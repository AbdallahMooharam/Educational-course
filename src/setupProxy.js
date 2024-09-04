const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
 // Proxy for /api/auth route
 app.use(
  '/api/auth',
  createProxyMiddleware({
    target: 'https://unih0me.com',
      changeOrigin: true, // Proxy to a different server if needed
    changeOrigin: true,
    pathRewrite: {
      '^/api/auth': '/auth', // Optionally rewrite the path if needed
    },
  })
);
  
  
  
  
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://unih0me.com',
      changeOrigin: true,
    })
  );
};