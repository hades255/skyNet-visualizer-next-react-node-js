const initialState = {
  user: null,
};

function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      console.log('CALLED LOGOUTINSIDE');
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default userReducer;
