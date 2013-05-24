define(['db', './User', './Seat', './Zone', './Card'], function(Bookshelf, User, Seat, Zone, Card) {
  var Table = Bookshelf.Model.extend({
    tableName: 'tables'
  });
  return Table;
});
