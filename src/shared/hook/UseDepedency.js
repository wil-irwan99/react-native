import { useContext } from "react";
import { DepedencyContext } from "../context/DepedencyContext";

export function useDepedency(){
    return useContext(DepedencyContext)
}