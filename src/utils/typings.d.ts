export interface USER {
  name: string;
  id: string;
}

export interface Register {
  name: string;
  email: string;
  password: string;
  role: string;
}

export type LoggedUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  profileImg: string;
  billingId: null;
  token?: string;
};
