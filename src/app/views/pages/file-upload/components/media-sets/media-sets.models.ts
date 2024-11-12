export interface MediaSets {
  docs?: Doc[];
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
  setname?: string;
  files?: File[];
  isDelete?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;
}

export interface File {
  uploadedBy?: string | null;
  _id?: string;
  file_name?: string;
  file_url?: string;
  file_size?: number;
  file_mime?: string;
  timestamp?: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  id?: string;
  selected?: boolean;
  uniqId?: string;
  exists?: boolean;
}
