export type CreateListResponse = {
  status_message: string;
  success: boolean;
  status_code: number;
  list_id: number;
};

export interface CreateListParams {
  api_key: string;
  sessionId: string;
}

export interface CreateListArgs {
  name: string;
  description: string;
  language: string;
}
