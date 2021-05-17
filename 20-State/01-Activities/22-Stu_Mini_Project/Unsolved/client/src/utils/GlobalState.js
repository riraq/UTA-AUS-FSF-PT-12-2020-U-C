import React, { createContext, useReducer, useContext } from "react";
import {UPDATE_POSTS, ADD_POST, REMOVE_POST, SET_CURRENT_POST, LOADING} from "./actions.js"
// Don't forget to import all of your actions!

const StoreContext = createContext();
const { Provider } = StoreContext;


const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_POSTS":
    action.UPDATE_POSTS();
      break;
    case "ADD_POST":
      action.ADD_POST();
      break;
    case "REMOVE_POST":
      action.REMOVE_POST();
      break;
    case "SET_CURRENT_POST":
      action.SET_CURRENT_POST();
      break;
    case "LOADING":
      action.LOADING();
      break;
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, { posts: {
    posts: [],
    currentPost: {
      id: 0,
      title: "",
      author: "",
      body: "",
      date: new Date(Date.now())
    },
    favorites: "",
    loading: false
  }});

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
