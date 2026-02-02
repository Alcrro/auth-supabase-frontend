export function maskIPv4(ip: string | null) {
  if (!ip) return undefined;
  const parts = ip.split(".");

  if (parts.length !== 4) return ip;
  return `***.***.***.${parts[3]}`;
}
