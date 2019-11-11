// user sign in options
export interface UserOptions {
  username: string;
  password: string;
}
// user sign up option
export interface userSignUp {
  password: string;
  email: string;
  fullName: string;
  passwordComfirm: string;
}

export interface Notes {
  title: String;
  note: String;
  createdDate: string;
}

export interface Login {
  username: String;
  password: String;
}

export interface SignUp {
  fullName: string;
  email: string;
  password: string;
}
