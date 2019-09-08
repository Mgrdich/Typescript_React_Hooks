import {useEffect} from "react";

export function useFetch(someActionCreator:any,...thisArgs:any) {
    useEffect(()=>{
        someActionCreator(...thisArgs);
    },[]);
}