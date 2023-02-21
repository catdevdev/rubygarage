import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppStore } from "@/app/store/store";
import axios from "@/shared/axios/axiosInstance";

import { DeleteListArgs, DeleteListParams, DeleteListResponse } from "./types";

export const deleteList = createAsyncThunk(
  "lists/deleteList",
  async (
    { list_id }: DeleteListArgs,
    thunkApi
  ): Promise<DeleteListResponse> => {
    const getState = thunkApi.getState as AppStore["getState"];
    getState().userState.session_id;

    const params: DeleteListParams = {
      api_key: getState().userState.api_key,
      sessionId: getState().userState.session_id,
    };

    const response = await axios.delete<DeleteListResponse>(
      `/list/${list_id}`,
      {
        params,
      }
    );

    return response.data;
  }
);
