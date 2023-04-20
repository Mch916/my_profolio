import { useReducer } from "react";
import HomeContext from "./HomeContext";

const initState = {
  activePage: 'home'
}

const homeReducer = (state, action) => {
  if (action.type === 'UPDATE') {
    return {
      activePage: action.page
    }
  }

  return initState;
}

const HomeProvider = ({children}) => {
  const [homeState, dispatchHomeAction] = useReducer(homeReducer, initState);

  const setPageHandler = (page) => {
    
    dispatchHomeAction({ type: 'UPDATE', page: page });
  }

  const homeContext = {
    activePage: homeState.activePage,
    setPage: setPageHandler
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
