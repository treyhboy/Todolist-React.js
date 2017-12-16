import * as types from './actionTypes';
//import courseApi from '../api/mockCourseApi';

export function rendertodo() {
  return { type: types.render_todo };
}

export function createtodo(todo) {
  return { type: types.create_todo, todo };
}
export function deltodo() {
  return { type: types.delete_todo };
}

export function striketodo(k, i) {
  return { type: types.strike_todo, k, i };
}
export function moveup(i) {
  return { type: types.moveup_todo, i };
}
export function movedown(i) {
  return { type: types.movedown_todo, i };
}
// export function loadcourses() {
//     return function (dispatch) {
//         return courseApi.getAllCourses().then(courses => {
//             dispatch(loadcoursesSuccess(courses));
//         }).catch(error => {
//             throw(error);
//         });
//     }
// }
//
// export function savecourse(course) {
//     return function (dispatch,getState) {
//         return courseApi.saveCourse(course).then(
//             savedCourse => {
//                 course.id ? dispatch(updatecourseSuccess(savedCourse)):
//                     dispatch(createcourseSuccess(savedCourse))
//             }
//         ).catch(error => {throw(error);
//         });
//     };
// }
