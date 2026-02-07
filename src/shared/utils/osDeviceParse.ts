export function osDeviceParse(os: string) {
  const parsedOs: { name: string } = os
    ? JSON.parse(os)
    : { name: "Unknown OS" };

  return parsedOs;
}
