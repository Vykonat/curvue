const randomNumberForPhotoId = (min: number, max: number ) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateRandomPhoto = () => {
    const randomId = randomNumberForPhotoId(1, 50);
    return `https://picsum.photos/id/${randomId}/1600/900`
}