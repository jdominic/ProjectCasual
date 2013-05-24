define(['./Table', './User', './Card', './Zone', './Seat'], 
function(Table, User, Card, Zone, Seat) {
  var models = {};
  models.Table = Table;
  models.User = User;
  models.Card = Card;
  models.Zone = Zone;
  models.Seat = Seat;

  return models;  
});
