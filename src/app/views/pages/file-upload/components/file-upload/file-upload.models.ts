export interface ImageSets {
  docs: Doc[];
  totalDocs?: number;
  limit?: number;
  totalPages?: number;
  page?: number;
  pagingCounter?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: null;
  nextPage?: number;
}

export interface Doc {
  _id?: string;
  uploadedBy?: string;
  file_name?: string;
  file_url?: string;
  file_size?: number;
  file_mime?: string;
  timestamp?: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;
  file_actual_url?: string;
  isCopied?: boolean;
}
