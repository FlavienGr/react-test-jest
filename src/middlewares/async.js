export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  action.payload.then(response => {
    const newAction = Object.assign({}, action, { payload: response });
    dispatch(newAction);
  });
};
