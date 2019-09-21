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
    return await data.json();
}


export function mapIdObjectArray(Array: Array<ArrayObjectCheckbox>) {
    return Array.reduce((acc: any, currentValue: ArrayObjectCheckbox) => {
        return {
            [currentValue.id]: {
                ...currentValue
            },
            ...acc
        };
    }, {});
}


export function SelectObjectCreator(length: Number, name: string): Array<ArrayObjectCheckbox> {
    const arrayObj: any = [];
    for (let i = 1; i <= length; i++) {
        let currentObj: any = {};
        currentObj.id = `${name + i}`;
        currentObj.name = `${i}`;
        arrayObj.push(currentObj);
    }
    return arrayObj;
}

export function ObjValueCounter(key: string, value: any, arr: any[]): Number {
    return arr.reduce((accumulator: number, currentValue: any) => {
        if (currentValue[key] === value) {
            return ++accumulator;
        } else
            return accumulator;
    }, 0);
}

export function createArrUntil(season: number, arr: number[]): ArrayObjectCheckbox[] | any {
    if (arr) {
        return arr.reduce((acc: any, current: any): any => {
            let obj: any = {};
            obj.name = `${current}`;
            obj.id =  season + "episode"+current;
            return [...acc, obj];
        }, []);
    }
}

export function ArrayUntilNumber(num: number) {
    let arr: Array<number> = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}

export function FilterArrayObject(Arr: Array<any>, propertyName: string, propertyValue: string) {
    return Arr.filter((item:any) => {
        if(item[propertyName] === propertyValue) {
            return true
        }
    });
}