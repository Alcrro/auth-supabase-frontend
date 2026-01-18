import { supabaseUpdatePassword } from "../services/supabaseUpdatePassword";

export async function updatePassword(payload: {
  email?: string;
  password?: string;
}) {
  const { data, error } = await supabaseUpdatePassword(payload);
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
}
