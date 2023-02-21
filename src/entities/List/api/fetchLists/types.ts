import { List } from "../../models/lists";
import { listsSlice } from "../../slices/listsSlice";

export type ListsResponse = {
  page: number;
  result: {
    list: List[];
  };
  total_pages: number;
  total_result: number;
};

export interface ListsParams {
  api_key: string;
  sessionId: string;
}
