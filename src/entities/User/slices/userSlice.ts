import { createSlice } from "@reduxjs/toolkit";

import { UserInitialState } from "../models/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    api_key: "bbe220c0cdf3879ab4296132d5764264",
    session_id: "dde06139373c7b9299d9871ed07a8f4ebc528208",
  } as UserInitialState,
  reducers: {},
});

export { userSlice };
