const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');
      playerRoutes = require('./routes/playerRoutes');
      gameRoutes=require('./routes/gamesRoutes')
      
      mongoose.Promise = global.Promise;

      mongoose.connect(process.env.DATABASE_URI || 'mongodb://admin:admin@cluster0-shard-00-00-nili5.mongodb.net:27017,cluster0-shard-00-01-nili5.mongodb.net:27017,cluster0-shard-00-02-nili5.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority').then(
          () => {console.log('Database connected') },
          err => { console.log('Can not connect to the database'+ err)}
        );

      const app = express();
      app.set('view engine', 'ejs');
      app.use(bodyParser.json());
      app.use(cors());
      const port = process.env.PORT || 4000;
      app.use('/players', playerRoutes);
      app.use('/games', gameRoutes);
      app.listen(port, function(){
         console.log('Listening on port ' + port);
       });
       