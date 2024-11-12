export interface Pagination {
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
  name?: string;
  phone?: string;
  dob?: number;
  username?: string;
  gender?: string;
  roleId?: RoleID;
  status?: boolean;
  onlineStatus?: boolean;
  teamIds?: TeamID[];
  tagIds?: TagID[];
  parentId?: string;
  usercolor?: string;
  createdBy?: string;
  updatedBy?: string;
  notification?: Notification;
  channelId?: string;
  onlyAssignedCustomer?: boolean;
  otherChatView?: boolean;
  groupChatView?: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  lastLoginAt?: number;
  lastLoginToken?: string;
  fcm_token?: string;
  assinedCount?: number;
  maskingKey?: boolean;
  lastLoginAtByMobile?: number;
  teams?: string[],
  tags?: Tags,
  [key: string]: any;
}

export interface Tags {
  preview: string[];
  remaining: string[];
}

export interface Notification {
  chat?: boolean;
  payment?: boolean;
  order?: boolean;
  broadcast?: boolean;
  autoreply?: boolean;
  [key: string]: any;
}

export interface RoleID {
  _id?: string;
  name?: string;
  status?: boolean;
  __v?: number;
  [key: string]: any;
}

export interface TagID {
  _id?: string;
  tag?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  [key: string]: any;
}

export interface TeamID {
  _id?: string;
  name?: string;
  status?: boolean;
  createdAt?: number;
  createdBy?: null | string;
  updatedAt?: number;
  updatedBy?: string;
  parentId?: null;
  __v?: number;
  color?: string;
  [key: string]: any;
}
