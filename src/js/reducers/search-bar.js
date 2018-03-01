import initialState from '../initial-state';

function searchBarReducer(state = initialState.searchBar, action) {
  switch (action.type) {

    case 'SEARCH_BAR_CHANGE': {
      return {
        ...state,
        input: action.input,
      };
    }

    case 'SEARCH_PROPERTIES': {
      const { results } = action;
      return {
        ...state,
        results,
      };
    }

    default: {
      return state;
    }
  }
}

export default searchBarReducer;
