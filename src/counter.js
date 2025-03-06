export function createCounter(){
    let count = 0;

    const getCount = () => count;

    const countUp = () => count ++;
    const countDown = () => count --;

    return {getCount, countUp, countDown}
}