export function validateLogin(value: string) {
  if (value.length === 0) return false;
  if (value.length > 5) return true;
  return false;
}
