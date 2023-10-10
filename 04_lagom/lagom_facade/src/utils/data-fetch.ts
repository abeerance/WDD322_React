class FetchError extends Error {
  status: number;
  info: any;

  constructor(message: string, status: number, info: any) {
    super(message);
    this.status = status;
    this.info = info;
  }
}

// general data fetch async function
async function dataFetch(endpoint: string) {
  // general fetch response
  const response = await fetch(`${process.env.BASE_URL}${endpoint}`, {
    headers: {
      // JWT Token Authorization HTTP header
      Authorization: `Bearer ${process.env.PUBLIC_BEARER}`,
    },
  });

  // check if response is not ok
  if (!response.ok) {
    const info = await response.json();
    throw new FetchError(
      "An error ocurred while fetching the data.",
      response.status,
      info
    );
  }

  // return response json so that we can access the data in the component
  return response.json();
}

export default dataFetch;
