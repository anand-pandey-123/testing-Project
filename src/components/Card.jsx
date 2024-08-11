export function Card({product, id}) {
  return (
    <>
      <a href={`/details/${id}`}>
        <div className="w-52 mt-16 h-[30vh] bg-zinc-100  rounded-md py-2 px-2  flex flex-col items-center gap-1 shadow-xl hover:scale-105">
          <div className=" w-full h-[80%] bg-white rounded-md ">
            <img
              className=" w-full h-full object-contain rounded-md "
              src= {product.image}
              alt=""
            />
          </div>
          <div className="font-semibold text-xs leading-none mb-1">
            {product.title}
          </div>
        </div>
      </a>
    </>
  );
}
