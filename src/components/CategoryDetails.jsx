import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { useLocation } from "react-router-dom";

export function CategoryDetails() {
    const[products, setProducts] = useContext(ProductContext);
    
    // const category = search.split("=")[1].toString();
    // console.log(category);
    return<div>
        category
    </div>
}