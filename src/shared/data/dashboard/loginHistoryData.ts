import type { LoginHistoryProps } from "../../../features/auth/types/auth.types";

export const tableDocumentMap = [
  { label: "nr.crt", key: "nrCrt", computed: true },
  { label: "status", key: "status", computed: true },
  { label: "action", key: "action" },
  { label: "device", key: "device" },
  { label: "locatie", key: "location", computed: true },
  { label: "provider", key: "provider" },
  { label: "browser", key: "browser" },
  { label: "IP", key: "ip_address" },
  { label: "OS", key: "os" },
  { label: "Date", key: "created_at" },
] satisfies TableDocumentMapProps[];

export interface TableDocumentMapProps {
  label: string;
  key: KeyType | ComputedKey;
  computed?: true;
}

type KeyType = keyof LoginHistoryProps;
type ComputedKey = "status" | "action" | "provider" | "nr.crt";
