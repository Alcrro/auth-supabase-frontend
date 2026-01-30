export function isValidDeviceModel(model?: string) {
  if (!model) return false;
  if (model.length <= 2) return false; // <- cazul "K"
  return true;
}
