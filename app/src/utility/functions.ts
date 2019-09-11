import {ArrayObjectCheckbox} from "../interfaces";

export function randomItemArray(arr: string[]): string {
    let arrLength = arr.length;
    let index = RandomNumber(0, arrLength - 1);
    return arr[index];

}

export function RandomNumber(minimum: number, maximum: number): number {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

export function toggleHeads(arr: string[], selectedItem: string): string {
    let newFilteredArray = arr.filter(function (item) {
        return item !== selectedItem;
    });
    return randomItemArray(newFilteredArray);
}

export async function fetchAPI(URL: string) {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dataJSON;
}


export function mapIdObjectArray(Array: Array<ArrayObjectCheckbox>) {
    let newObj = Array.reduce((acc: any, currentValue: ArrayObjectCheckbox) => {
        const obj = {
            [currentValue.id]: {
                ...currentValue
            },
            ...acc
        };
        return obj;
    }, {});
    return newObj;
}


export function SelectObjectCreator(length: Number, name: string): Array<ArrayObjectCheckbox> {
    const Arrayobj: any = [];
    for (let i = 1; i <= length; i++) {
        let currentObj: any = {};
        currentObj.id = `${name + i}`;
        currentObj.name = `${i}`;
        Arrayobj.push(currentObj);
    }
    return Arrayobj;
}