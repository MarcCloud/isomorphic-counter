
const Bacon = require('baconjs'),
      dispatcher = require('./dispatcher');

module.exports = {
    counterToProperty (current){
        return Bacon.update(current,
                dispatcher.stream('add'),(val,plus)=> val+plus,
                dispatcher.stream('sub'),(val,minus)=> val-minus);
    },

    add(one){
        dispatcher.push('add',one);
    },

    sub(one){
        dispatcher.push('sub',one);
    }
};
