import { useEffect } from "react";
import { supabase } from "../libs/supabase/supabaseinsta";

const useGetTotalRows = (setTotalRows: (value: number) => void) => {
  useEffect(() => {
    async function load() {
      const { data: totalRows } = await supabase.rpc("get_login_total");
      setTotalRows(totalRows);
    }
    load();
  }, []);
};

export default useGetTotalRows;
