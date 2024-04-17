import { useEffect, useCallback, useReducer, Dispatch } from "react";
import { Child } from "../domain/types";
import { fetchAllChildren } from "../data/net_service";

export enum PageState {
  Loading,
  Success,
  Error,
}

interface AppState {
  children: Child[];
  visibleChildren: Child[];
  lastChildIndex: number;
  pageState: PageState;
}

type AppAction =
  | { type: "setAppChildren"; payload: Child[] }
  | { type: "setVisibleChildren"; payload: Child[] }
  | { type: "setLastChildIndex"; payload: number }
  | { type: "setPageState"; payload: PageState };

type AppDispatch = Dispatch<AppAction>;

const initialState: AppState = {
  children: [],
  visibleChildren: [],
  lastChildIndex: 0,
  pageState: PageState.Loading,
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "setAppChildren":
      return { ...state, children: action.payload };
    case "setPageState":
      return { ...state, pageState: action.payload };
    case "setVisibleChildren":
      return { ...state, visibleChildren: action.payload };
    case "setLastChildIndex":
      return { ...state, lastChildIndex: action.payload };
    default:
      return state;
  }
}

export const useApp = (): [AppState, AppDispatch] => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const childrenPerLoad = 8;

  useEffect(() => {
    dispatch({ type: "setPageState", payload: PageState.Loading });
    fetchAllChildren()
      .then((response) => {
        dispatch({ type: "setAppChildren", payload: response.children });
        dispatch({
          type: "setVisibleChildren",
          payload: response.children.slice(0, childrenPerLoad),
        });
        dispatch({ type: "setLastChildIndex", payload: childrenPerLoad });
        dispatch({ type: "setPageState", payload: PageState.Success });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: "setPageState", payload: PageState.Error });
      });
  }, []);

  const loadMoreChildren = useCallback(() => {
    if (state.lastChildIndex >= state.children.length) return;

    const nextChildren = state.children.slice(
      state.lastChildIndex,
      state.lastChildIndex + childrenPerLoad
    );
    dispatch({
      type: "setVisibleChildren",
      payload: [...state.visibleChildren, ...nextChildren],
    });
    dispatch({
      type: "setLastChildIndex",
      payload: state.lastChildIndex + childrenPerLoad,
    });
  }, [state.lastChildIndex, state.children]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight
      ) {
        loadMoreChildren();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreChildren]);

  return [state, dispatch];
};
