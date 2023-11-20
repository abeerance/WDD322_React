const fetcher = (url: string, config?: RequestInit) =>
  fetch(url, config).then((res) => res.json());

export default fetcher;
