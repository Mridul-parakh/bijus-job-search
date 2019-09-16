import { GET_DETAIL } from './type';

export const details=(detail)=>dispatch=>{
    
    // axios.post('/api/profile',profileData)
    //     .then(res => history.push('/dashboard'))
    //     .catch(err => dispatch({
    //         type:GET_ERROR,
    //         payload:err.response.data
    //     }))
   
    dispatch({
        type:GET_DETAIL,
        payload:detail
    })
}