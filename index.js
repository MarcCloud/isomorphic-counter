const express = require('express'),
      React = require('react'),
      server = express(),
      App = require('./app/counter'),
      {resolve} = require('path'),
      fs = require('fs'),
      appState = require('./app/state-provider');


      const _index = fs.readFileSync(resolve(__dirname,'./app/index.html')).toString()
      server.use(express.static(__dirname+'/public'));
      server.get('/:start?',(req,res)=>{
          const startOn = parseInt(req.params.start) || 0 ;
          appState(startOn)
            .take(1)
            .onValue(model=>{
                res.send(_index.replace('{{APP_CONTENT}}',React.renderToString(<App {...model}/>)).replace('{{STATE}}',JSON.stringify(model)));
            })

      });

      server.listen(3000,()=>console.log('Server running on port 3000'))
