let config;

function apiCall() {
  import('./config.js').then(module => {
    config = module.default;
    console.log(`GET http://${config.url}`);
  });
}

console.log(config)
apiCall();
