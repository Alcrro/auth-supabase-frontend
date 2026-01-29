import { credentialsLogin } from "../usecases/credentialsLogin";
import { loginWithGoogle } from "../usecases/loginWithGoogle";
import { loginWithMagicLink } from "../usecases/loginWithMagicLink";
import { logout } from "../usecases/logout";
import { loginWithGithub } from "./loginWithGithub";
import { registerAccount } from "./registerAccount";
import { resetPassword } from "./resetPassword";
import { updatePassword } from "./updatePassword";

export interface AuthCredentials {
  email: string;
  password: string;
}
export type AuthType =
  | "loginWithCredentials"
  | "loginWithMagicLink"
  | "loginWithGithub"
  | "loginWithGoogle"
  | "logout"
  | "resetPassword"
  | "registerAccount"
  | "updatePassword";

export type AuthCommand =
  | { type: "loginWithCredentials"; payload: AuthCredentials }
  | { type: "loginWithMagicLink"; payload: { email: string } }
  | { type: "loginWithGithub" }
  | { type: "loginWithGoogle" }
  | { type: "resetPassword"; payload: { email: string } }
  | {
      type: "updatePassword";
      payload: Pick<AuthCredentials, "password">;
    }
  | { type: "registerAccount"; payload: AuthCredentials }
  | { type: "logout" };

export function authenticate(cmd: AuthCommand) {
  switch (cmd.type) {
    case "loginWithCredentials":
      return credentialsLogin(cmd.payload);

    case "loginWithMagicLink":
      return loginWithMagicLink(cmd.payload);

    case "loginWithGoogle":
      return loginWithGoogle();

    case "loginWithGithub":
      return loginWithGithub();

    case "resetPassword":
      return resetPassword(cmd.payload);

    case "registerAccount":
      return registerAccount(cmd.payload);

    case "updatePassword":
      return updatePassword(cmd.payload);

    case "logout":
      return logout();
  }
}
