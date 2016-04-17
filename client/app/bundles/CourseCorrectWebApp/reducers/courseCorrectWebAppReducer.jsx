import Immutable from 'immutable';

import actionTypes from '../constants/courseCorrectWebAppConstants';

export const $$initialState = Immutable.fromJS({
  name: '', // this is the default state that would be used if one were not passed into the store
});

export default function courseCorrectWebAppReducer($$state = $$initialState, action) {
  const { type, name } = action;

  switch (type) {
    case actionTypes.COURSE_CORRECT_NAME_UPDATE:
      return $$state.set('name', name);

    default:
      return $$state;
  }
}
