export const brandVariations = [
  'default',
  'primary',
  'accent',
  'success',
  'warn',
  'danger'
];

export const variationValidator = (value: string) => {
  return brandVariations.indexOf(value.toLowerCase()) !== -1;
};
