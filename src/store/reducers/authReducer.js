const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  if (action.type === 'LOGIN_ERROR') {
    console.log('login error')
    return {
      ...state, 
      authError: 'Login fail'
    }
  } else if (action.type === 'LOGIN_SUCCESS') {
   console.log('login success')
   return {
     ...state,
     authError: null
   }
  } else if (action.type === 'SIGNOUT_SUCCESS') {
    console.log('signout success');
    return state
  } else {
    return state;
  }
  
  // return state;
};

export default authReducer;