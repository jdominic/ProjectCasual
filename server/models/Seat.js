define(['db', './User'], function(Bookshelf, User) {
  var Seat = Bookshelf.Model.extend({
    tableName: 'seats'
  });
  return Seat;
});
