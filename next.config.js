//need to convert to modern import method: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports

const nextConfig = {
  
  // This is the base path for your application.
  basePath: "",

  // This is the environment that your application is running in.
  env: {},

  // This is the list of pages that should be exported when you run the `next export` command.
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
  '/about': { page: '/about' },
  '/contactus': { page: '/contactus' },
  '/getinvolved': { page: '/getinvolved' },
  '/hireus': { page: '/hireus' },
  '/projects': { page: '/projects' },
      
    };
    
  },
  //This disables image optimization.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
