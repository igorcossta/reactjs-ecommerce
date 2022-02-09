import STATE from './directory.data';
import { Action } from './directory.interface';

const directoryReducer = (state = STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
