export function useServerPage(
  uiPage: number,
  limit: number,
  serverLimit: number,
) {
  return Math.ceil((limit * uiPage) / serverLimit);
}
