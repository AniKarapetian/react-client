
export default function mainReducer(state = {
    isSignedIn: false,
  }, action) {
    switch (action.type) {
      case 'SIGNIN_SUCCESS':
        return {
          ...state,
          isSignedIn: true,
          user: action.data
        };
      case 'SIGNIN_FAILURE':
        return {
          ...state,
          signInError: action.data
        };
        case 'SIGNOUT_SUCCESS':
        return {
          ...state,
          isSignedIn: false
        };
        
      default:
        return state;
    }
  }