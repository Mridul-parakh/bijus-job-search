import {GET_DETAIL} from '../actions/type';
//import isEmpty from '../validation/isEmpty';  

const initialState={
   
    detail:{}
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_DETAIL:
        return{
            ...state,
            detail:action.payload
        }
        default:
        return state;
    }

}
export default reducer;