import initialState from '../initial-state';

export default function signupReducer(state = initialState.signup, action) {

  switch (action.type) {

    case 'UPDATE_SIGNUP_FORM': {
      const { name, value } = action.payload;
      return {
        ...state,
        [[name]]: value,
      }
    }

    case 'CREATE_USER_FULFILLED': {
        console.log('User successfully created');
        return state;

    }

    case 'CREATE_USER_REJECTED': {
      console.log('User creation failed');
      return state;
    }

    default: {
      return state;
    }
  }
}