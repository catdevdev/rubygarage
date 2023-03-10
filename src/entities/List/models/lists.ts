export interface List {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  iso_639_1: string;
  list_type: string;
  name: string;
  poster_path: string;
}

export interface ListsInitialState {
  lists: List[];
  total_pages: number;
  current_page: number;
  error: string;
  isLoading: boolean;
}
