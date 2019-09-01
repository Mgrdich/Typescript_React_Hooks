export function randomItemArray(arr: string[]):string {
    let arrLength = arr.length;
    let index = RandomNumber(0, arrLength - 1);
    return arr[index];

}

export function RandomNumber(minimum: number, maximum: number): number {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

export function toggleHeads (arr:string[],selectedItem:string):string {
    let newFilteredArray = arr.filter(function (item) {
        return item !== selectedItem;
    });
    return randomItemArray(newFilteredArray);
}

export async function fetchAPI(URL:string) {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dataJSON;
}