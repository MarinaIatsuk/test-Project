// vite.config.js
export default {
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
          catalog: 'catalog.html',
          movie: 'page-movie.html',
          account: 'personalaccount.html',
          regisrt: 'registr.html'
        },
      },
    },
  };
  
