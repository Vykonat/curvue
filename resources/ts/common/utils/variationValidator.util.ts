export const brandVariations = ['default', 'primary', 'accent', 'success', 'warn', 'danger'];

export const variationValidator = (value: string) => {
    // Validates a chosen variation on a component
    return brandVariations.indexOf(value.toLowerCase()) !== -1;
};