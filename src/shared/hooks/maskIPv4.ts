export const maskIPv4 = (ip: string | null): string | undefined => {
  if (!ip) return undefined;

  const parts = ip.split(".");
  if (parts.length !== 4) return ip;

  parts[3] = "xxx";

  return parts.join(".");
};
