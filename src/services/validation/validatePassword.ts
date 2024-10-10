export function validatePassword(value: string) {
  if (value.length === 0) return '';
  if (value.length < 8) return 'Password should be >8';
  return '';
}
