import { useReducer } from "react";
import HomeContext from "./HomeContext";

const initState = {
  activePage: 'home',
  identity: 'dev'
}

const homeReducer = (state, action) => {
  if (action.type === 'setPage') {
    return {
      ...state,
      activePage: action.page
    }
  }
  if (action.type === 'setIdentity') {
    return {
      ...state,
      identity: action.identity
    }
  }

  return initState;
}

const HomeProvider = ({children}) => {
  const [homeState, dispatchHomeAction] = useReducer(homeReducer, initState);

  const setPageHandler = (page) => {

    dispatchHomeAction({ type: 'setPage', page: page });
  }
  const setIdentityHandler = (identity) => {

    dispatchHomeAction({ type: 'setIdentity', identity: identity });
  }

  const homeContext = {
    activePage: homeState.activePage,
    identity: homeState.identity,
    setPage: setPageHandler,
    setIdentity: setIdentityHandler,
  };
  return (
    <>
      <HomeContext.Provider value={homeContext}>
        {children}
      </HomeContext.Provider>
    </>
  );
};

export default HomeProvider;
