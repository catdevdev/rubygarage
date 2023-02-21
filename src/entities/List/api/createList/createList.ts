import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";

import { AppStore } from "@/app/store/store";
import axios from "@/shared/axios/axiosInstance";

import { CreateListArgs, CreateListParams, CreateListResponse } from "./types";

export const createList = createAsyncThunk(
  "lists/createList",
  async (
    { name, description, language }: CreateListArgs,
    thunkApi
  ): Promise<CreateListResponse> => {
    const getState = thunkApi.getState as AppStore["getState"];

    const params: CreateListParams = {
      api_key: getState().userState.api_key,
      sessionId: getState().userState.session_id,
    };

    const response = await axios.post<CreateListResponse>(
      `/list`,
      { name, description, language },
      {
        params,
        paramsSerializer: {
          serialize: (params: any) => {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
        },
      }
    );

    return response.data;
  }
);
