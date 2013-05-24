define(['db'], function(Bookshelf) {
  var Card = Bookshelf.Model.extend({
    tableName: 'cards'
  });
  return Card;
});
