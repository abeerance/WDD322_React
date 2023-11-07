export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("DO_SPACES_ACCESS_KEY"),
        secretAccessKey: env("DO_SPACES_SECRET_KEY"),
        endpoint: env("DO_SPACES_ENDPOINT"), // e.g., 'nyc3.digitaloceanspaces.com'
        params: {
          Bucket: env("DO_SPACES_BUCKET"),
        },
        cdn: env("DO_SPACES_CDN_URL"), // Optional: If you have a CDN in front of Spaces
      },
    },
  },
  // ...
});
