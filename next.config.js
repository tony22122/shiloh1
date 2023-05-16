//need to convert to modern import method: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports

const nextConfig = {
  
  // This is the base path for your application.
  basePath: "",

  // This is the environment that your application is running in.
  env: {},

  // This is the list of pages that should be exported when you run the `next export` command.
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' , query: { __nextDefaultLocale: 'en' }},
  '/about': { page: '/about' , query: { __nextDefaultLocale: 'en' }},
  '/contactus': { page: '/contactus' , query: { __nextDefaultLocale: 'en' }},
  '/getinvolved': { page: '/getinvolved' , query: { __nextDefaultLocale: 'en' }},
  '/hireus': { page: '/hireus' , query: { __nextDefaultLocale: 'en' }},
  '/projects': { page: '/projects' , query: { __nextDefaultLocale: 'en' }},
      
    };
    
  },
  //This disables image optimization.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
