import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "./Loading";

export function UserDetails() {
    const[product, setProduct] = useState(null);
    const {id} = useParams();
    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getSingleProduct();
    }, []);

    return (product ? 
    <div className="my-auto w-[70%] mx-auto h-[90%] bg-zinc-100 flex  items-center shadow-2xl rounded-xl">
        <div className="ml-12 w-[30%] h-[60%]  rounded-lg  shadow-2xl">
            <img className=" h-full w-full rounded-lg " src={product.image}  alt="" />
        </div>
        <div className="w-[50%] h-[92%] py-15 pl-10 pr-10 pt-10  mx-auto rounded-xl shadow-2xl bg-zinc-100">
            <h2 className="text-3xl  font-bold mb-5 ">{product.title}</h2>
            <h2 className="font-semibold mt-3 text-xl">{product.category}</h2>
            <h2 className="font-semibold  mt-2 mb-5 text-2xl text-zinc-600">$ {product.price}</h2>
            <h2 className="font-regular text-lg">{product.description}</h2>
            <div className=" mt-5 flex ">
                <button className="py-2 px-8 text-lg bg-zinc-300 rounded-lg shadow-lg font-light ">Edit</button>
                <button className="py-2 px-8 text-lg bg-zinc-300 rounded-lg shadow-lg ml-9 font-light">Delete</button>
            </div>
        </div>
    </div>
    : <Loading></Loading>)
}