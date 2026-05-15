export interface RegisterBody {
  email: string;
  password: string;
  company: string;
  ubication: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface AuthTokenPayload {
  userId: string;
  email: string;
}

export interface UserRecord {
  id: string;
  email: string;
  passwordHash: string;
  company: string;
  ubication: string;
}
