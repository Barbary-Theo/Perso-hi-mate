module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      // Proxy all requests to your local server
      '/': {
        target: 'http://localhost:8080', // Change this to your local server's port
        bypass: function(req, res) {
          // Allow requests from any origin
          res.setHeader('Access-Control-Allow-Origin', '*');
        }
      }
    }
  }
}
