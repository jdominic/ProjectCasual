exports.index = function(req, res) {
  req.models.User.forge({name: 'Joel Dominic'}).save().then(function() {
    console.log('Wrote it');
  });
  res.render('index', { title: 'Express' });
};
