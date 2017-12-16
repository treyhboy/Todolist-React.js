import * as types from '../Actions/actionTypes';
import initialState from './InitialState';

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.create_todo:
      return [...state, Object.assign({ val: action.todo, class: 'nos' })];
    case types.delete_todo:
      return [
        ...state.filter(item => {
          return item.class !== 'strike';
        })
      ];
    case types.strike_todo:
      return state.map((item, it) => {
        return it === action.i
          ? {
              val: item.val,
              class: action.k.className === 'strike' ? 'nos' : 'strike'
            }
          : item;
      });
    case types.moveup_todo: {
      let n = [...state];
      let m = n.splice(action.i, 1);
      n.splice(action.i - 1, 0, ...m);
      return [...n];
    }
    case types.movedown_todo: {
      let n = [...state];
      let m = n.splice(action.i, 1);
      n.splice(action.i + 1, 0, ...m);
      return [...n];
    }
    default:
      return state;
  }
}
