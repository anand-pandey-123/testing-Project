import axios from "axios";
import React, { createContext, useEffect, useState } from "react";


const Context = (props)=>{
    const[products, setProducts] = useState(null);

    const getProducts = async () => {
      try{
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data)
      } catch(err){
        console.log(err);
      }
    };

    useEffect(()=>{
      getProducts();
    },[]);

    return <ProductContext.Provider value={[products, setProducts]}>
        {props.children}
    </ProductContext.Provider>
}

export const ProductContext = createContext();

export default Context;