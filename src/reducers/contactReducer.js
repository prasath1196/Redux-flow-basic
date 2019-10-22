import * as actionTypes from '../actions/actionType'

export default (state = [],action) => {
  switch(action.type){
    case actionTypes.CREATE_NEW_CONTACT:
      return [
        ...state,
        Object.assign({},action.contacts)
      ];
      default:
         return state;
  }
};

