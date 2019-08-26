export function randomItemArray(arr: string[]) {
    let arrLength = arr.length;
    let index = RandomNumber(0, arrLength - 1);
    console.log(index);
    return arr[index];

}

export function RandomNumber(minimum: number, maximum: number): number {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
