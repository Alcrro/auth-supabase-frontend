import {
  authenticate,
  type AuthCommand,
} from "../../../features/auth/usecases/authEngine";

export function actionHandler() {
  const authAction = async (command: AuthCommand) => {
    const data = await authenticate(command);

    return data;
  };

  return { authAction };
}
