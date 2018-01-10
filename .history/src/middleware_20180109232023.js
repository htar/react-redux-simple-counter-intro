const middleware = store => next => action => {
  if (action.type !== 'PROMISE') return next(action) 
  const [started, loaded, failed] = action.actions 
  store.dispatch({
    type: started
  })
  action.promise
    .then(res =>
      store.dispatch({ type: loaded, tournaments: res.tournaments })
    )
    .catch(error => store.dispatch({ type: failed, error }));
}
export default middleware;
