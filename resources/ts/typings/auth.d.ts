declare interface ILoginInput {
  username: string;
  password: string;
}

declare interface IRegisterInput {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

declare interface IForgotPasswordInput {
  email: string;
}

declare interface IResetPasswordInput {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}
