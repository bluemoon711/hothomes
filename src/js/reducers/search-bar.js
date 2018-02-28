import initialState from '../initial-state';

export default searchBarReducer = (state = initialState.searchBar, action) => {

  switch (action.type) {

    case 'SEARCH_BAR_CHANGE': {
      return {
        ...state,
        input: action.input
      };
    }

    default: {
      return state;
    }
  }
}