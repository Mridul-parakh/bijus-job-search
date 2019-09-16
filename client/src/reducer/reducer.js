import {combineReducers} from 'redux';
import detailreducer from './detailreducer';

console.log(detailreducer);
export default combineReducers({
    
    details:detailreducer
});