import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";

import { AppStore } from "@/app/store/store";
import axios from "@/shared/axios/axiosInstance";

import { ListsParams, ListsResponse } from "./types";

export const fetchLists = createAsyncThunk(
  "lists/fetchLists",
  async (_, thunkApi): Promise<ListsResponse> => {
    const getState = thunkApi.getState as AppStore["getState"];
    getState().userState.session_id;

    const params: ListsParams = {
      api_key: getState().userState.api_key,
      sessionId: getState().userState.session_id,
    };

    // to ask
    const response = await axios.post<ListsResponse>(`/account/${1}/lists`, {
      params,
    });

    return response.data;
  }
);
