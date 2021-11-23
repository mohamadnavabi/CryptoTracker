export const toPrice = (price: nubmer, toFixed?: number = 2): number => {
    if (!price || typeof price != 'number')
        return null;

    return price.toFixed(toFixed);
}