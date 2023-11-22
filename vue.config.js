module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    allowedHosts: 'all',
    host: 'barbary-theo.com',
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