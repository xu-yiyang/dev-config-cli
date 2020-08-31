const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    proxy(['/ajax'], {
        target: 'https://www.w3school.com.cn',     //  测试环境配合
        changeOrigin: true,
        ws: true
    })
  );
};
