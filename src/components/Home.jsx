import { Nav } from "./Nav";
import { Card } from "./Card";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { Loading } from "./Loading";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";


export function Home() {
    const[products] = useContext(ProductContext);
    const {search} = useLocation();

    const category = decodeURIComponent(search.split("=")[1]);

    const[filteredProduct, setFilteredProduct] = useState(null);

    const getProductCategory = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            setFilteredProduct(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        if(!filteredProduct || category == "undefined") setFilteredProduct(products);
        if(category != "undefined") getProductCategory();
    }, [category,products]);

    return (filteredProduct ? 
        <>
    <Link to="/" className="absolute top-[3%] right-[8%] px-4 py-2 bg-zinc-200 rounded-full text-sm font-semibold" >Home</Link>
    
    <Nav></Nav>
    <div className="w-[85%] bg-zinc-100 h-full flex flex-wrap overflow-y-auto">
        {filteredProduct.map((product, index)=>{
            return <Card product={product} key={product.id} id={product.id} ></Card>
        })}
    </div>
    </>
    : <Loading></Loading>)
}