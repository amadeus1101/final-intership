export function validatePassword(value: string) {
  if (value.length < 8) return true;
  return false;
}
