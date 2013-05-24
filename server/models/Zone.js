define(['db', './Card'], function(Bookshelf, Card) {
  var Zone = Bookshelf.Model.extend({
    tableName: 'zones'
  });
  return Zone;
});
