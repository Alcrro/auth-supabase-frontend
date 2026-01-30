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
export type AuthType = AuthCommand["type"];

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

export async function authenticate(cmd: AuthCommand) {
  try {
    switch (cmd.type) {
      case "loginWithCredentials":
        return await credentialsLogin(cmd.payload);

      case "loginWithMagicLink":
        return await loginWithMagicLink(cmd.payload);

      case "loginWithGoogle":
        return await loginWithGoogle();

      case "loginWithGithub":
        return await loginWithGithub();

      case "resetPassword":
        return await resetPassword(cmd.payload);

      case "registerAccount":
        return await registerAccount(cmd.payload);

      case "updatePassword":
        return await updatePassword(cmd.payload);

      case "logout":
        return await logout();
    }
  } catch (error) {
    return console.log(error);
  }
}
