import { supabase } from "../../../shared/libs/supabase/supabaseinsta";

export async function getGeolocation() {
  const { data, error } = await supabase
    .from("login_audit")
    .select("id, ip_address")
    .limit(1);

  if (error || !data.length) {
    throw new Error("no data");
  }

  const row = data[0];
  const subnetIp = row.ip_address.replace("xxx", "0");

  const fetchGeolocation = await fetch(`https://ipwho.is/${subnetIp}`);
  const result = await fetchGeolocation.json();

  return result;
}
