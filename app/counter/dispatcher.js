const Bacon = require('baconjs');
let   busCache={};
const bus = (name)=> { return busCache[name]=busCache[name] || new Bacon.Bus();}

const dispatcher = {
    stream(name){
        return bus(name);
    },
    push(name,value){
        bus(name).push(value);
    },
    plug(name,stream){
        bus(name).plug(stream);
    }
};

export default dispatcher;
