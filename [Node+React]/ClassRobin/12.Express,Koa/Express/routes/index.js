module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('test1', { title: 'Hello', message: 'Hello there!'});
  });
};