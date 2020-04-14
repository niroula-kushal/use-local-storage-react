import {useObjectState} from '@rehmat-falcon/use-object-state';

export const useLocalStorage = (key, initial = "", override = false) => {
  let initialState;
  if(override) {
    window.localStorage.setItem(key,initial);
    initialState = {
      value : initial,
      exists : true
    };
  } 
  else {
    const item = window.localStorage.getItem(key);
    initialState = {
      value : item,
      exists : item !== null
    };
  }
  const [state, updateState] = useObjectState(initialState);
  const update = (newValue) => {
    window.localStorage.setItem(key, newValue);
    updateState({
      value : newValue,
      exists : true
    });
  };
  const remove = () => {
    window.localStorage.removeItem(key);
    updateState({
      value : null,
      exists : false
    });
  };
  const [nonReactiveState] = useObjectState(initialState);
  return {
    state,
    nonReactiveState,
    key,
    update,
    remove,
  };
};