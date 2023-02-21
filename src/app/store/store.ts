import {
  AnyAction,
  CombinedState,
  configureStore,
  Reducer,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import { ListsInitialState } from "@/entities/List/models/lists";
import { listsSlice } from "@/entities/List/slices/listsSlice";
import { UserInitialState } from "@/entities/User/models/user";
import { userSlice } from "@/entities/User/slices/userSlice";
// import { rocketsSlice } from "@/entities/Rockets/slices/rocketsSlice";

const rootReducer = combineReducers({
  userState: userSlice.reducer,
  listsState: listsSlice.reducer,
});

const reducerForHydrate = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const reducerForHydrateWithTypes = reducerForHydrate as Reducer<
  CombinedState<{
    userState: UserInitialState;
    listsState: ListsInitialState;
  }>,
  AnyAction
>;

export const setupStore = () => {
  return configureStore({
    reducer: reducerForHydrateWithTypes,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend().concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;

export const wrapper = createWrapper<AppStore>(setupStore, { debug: true });
