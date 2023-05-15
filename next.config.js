const nextConfig = {
  // This is the base path for your application.
  basePath: '/',

  // This is the environment that your application is running in.
  env: {
    NODE_ENV: 'production',
  },

  // This is the list of pages that should be exported when you run the `next export` command.
  exportPathMap: {
    '/pages/*': './pages/*',
  },
};

module.exports = nextConfig;