import { useContext } from "react"
import { ProductContext } from "../utils/Context"
import { Link, useLocation } from "react-router-dom";

export function Nav() {
    const[products, setProduct] = useContext(ProductContext);
    

    let productCategory = (products && products.map((product)=>product.category));


    const filteredCategory = [];
    for(let i = 0; i < productCategory.length-1; i++) {
        if(productCategory[i] != productCategory[i+1]){
            filteredCategory.push(productCategory[i]);
        }
    }

    return <>
    <nav className="w-[15%] bg-zinc-100 h-full flex items-center flex-col">
        <a href="/create" className="py-3 px-8 border-blue-300 border rounded-md mt-6 text-blue-300">Add Items</a>
        <hr className="w-[80%] mt-5 mb-5 border-blue-300"></hr>
        <h2 className=" w-[80%] text-2xl mb-3 font-light">Category Filter</h2>
        {filteredCategory.map((c, index)=>{
            return (
                <h2 key={index} className="w-[80%] flex items-center text-sm mb-2">
                    <Link to={`/testing-Project/?category=${c}`} className="flex items-center">
                        <span className="w-3 h-3 bg-zinc-400 rounded-full inline-block mr-3"></span>{c}
                    </Link>
                </h2>
            )
        })}
    </nav>
    </>
}