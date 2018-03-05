import initialState from '../initial-state';

function currentSessionReducer(state = initialState.currentSession, action) {
  switch (action.type) {
    case 'LOGGED_IN': {
      return {
        ...state,
        currentUser: action.user.username,
      };
    }

    case 'UPDATE_CURRENT_USER': {
      return {
        ...state,
        currentUser: action.payload,
      };
    }

    case 'UPDATE_CURRENT_PROPERTY': {
      return {
        ...state,
        currentProperty: action.payload,
      };
    }

    case 'USER_PROPERTIES': {
      return {
        ...state,
        properties: action.properties,
      };
    }

    case 'USER_RESERVATIONS': {
      return {
        ...state,
        reservations: action.reservations,
      };
    }

    case 'USER_RESERVATIONS_DETAILS': {
      const reservationsCopy = state.reservations.slice();
      for (var i = 0; i < reservationsCopy.length; i++) {
        reservationsCopy[i].propertyDetails = action.propertyDetails[i];
      }
      return {
        ...state,
        reservations: reservationsCopy,
      };
    }

    default: {
      return state;
    }

  }
}

export default currentSessionReducer;
