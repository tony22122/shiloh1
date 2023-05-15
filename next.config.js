const nextConfig = {
  // This is the base path for your application.
  basePath: "",

  // This is the environment that your application is running in.
  env: {},

  // This is the list of pages that should be exported when you run the `next export` command.
  exportPathMap: async function () {
    return {
      "/pages/*": { page: "./pages/*" },
    };
  },
};

module.exports = nextConfig;
