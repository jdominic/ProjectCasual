define(['db'], function(Bookshelf) {
  var User = Bookshelf.Model.extend({
    tableName: 'users'
  });
  return User;
});
