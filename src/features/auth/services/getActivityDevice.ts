import { supabase } from "../../../shared/libs/supabase/supabaseinsta";
import type { ActivityFilters } from "../types/auth.types";

export async function getActivityDevice(
  filters: ActivityFilters,
  page: number,
  pageSize: number,
) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    throw new Error("no session active");
  }

  let query = supabase
    .from("login_audit")
    .select("*")
    .eq("user_id", session?.user.id);

  if (filters?.action) {
    query = query.eq("action", filters.action);
  }
  const { data, error } = await query
    .order("created_at", { ascending: false })
    .range(page * pageSize, page * pageSize + pageSize - 1);

  return { data, error };
}
