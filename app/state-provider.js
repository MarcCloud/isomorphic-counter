import Bacon from 'baconjs';
import counter from './counter/count';

export default function stateProvider(initial){
    const countProperty = counter.counterToProperty(initial);
    return Bacon.combineTemplate({count:countProperty});
}
