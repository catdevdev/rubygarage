export type DeleteListResponse = {
  status_code: number;
  status_message: string;
};

export interface DeleteListParams {
  api_key: string;
  sessionId: string;
}

export interface DeleteListArgs {
  list_id: number;
}
