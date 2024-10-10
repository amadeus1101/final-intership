export function validateLogin(value: string) {
  if (value.length === 0) return '';
  if (value.length > 5) return '';
  return 'Username should be 5 symbols length';
}
