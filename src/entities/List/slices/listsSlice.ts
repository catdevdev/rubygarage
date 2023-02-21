import { createSlice } from "@reduxjs/toolkit";

import { ListsInitialState } from "../models/lists";

const listsSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [],
    total_pages: 0,
    current_page: 1,
    error: "",
    isLoading: false,
  } as ListsInitialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export { listsSlice };
