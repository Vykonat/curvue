export const randomInt = ( min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const random = ( min: number, max: number ): number => {
    return min + Math.random() * max;
}