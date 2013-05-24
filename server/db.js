define(['bookshelf'], function(Bookshelf) {
  var db = Bookshelf.Initialize({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'casual',
      password: 'secret',
      database: 'casual',
      charset: 'utf8'
    }
  });
  return db;
});
