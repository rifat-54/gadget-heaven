import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { addToLocalStorage } from "../Utilities/localStorage";
import { addToLocalStorageWishList } from "../Utilities/wishList";
import toast from "react-hot-toast";

const CardDetails = () => {
  const [isActive,setIsActive]=useState(false);
  const [isActiveB,setIsActiveB]=useState(false);
  const { id } = useParams();
  const data = useLoaderData();
  const currentData = data.find((item) => item.id == id);
  const {
    product_image,
    product_title,
    price,
    description,
    Specification,
    rating,
    Otherfield,
  } = currentData;

  const handleAddCard=idx=>{
        addToLocalStorage(idx);
        toast.success('Succesfully Added');
        setIsActive(true)
  }

  const handleWishList=idx=>{
    addToLocalStorageWishList(idx);
    toast.success('Succesfully Added');
    setIsActiveB(true);
  }



  return (
    <div className="mb-3 ">
      <div className="bg-[#9538E2] pb-44 rounded-b-lg ">
        <div className="text-center text-white">
          <h2 className="text-4xl pt-10 py-8">Product Details</h2>
          <p className="mb-16">
            Explore the latest gadgets that will take your experience to the
            next level. From smart <br /> devices to the coolest accessories, we
            have it all!
          </p>
        </div>
        <div className="absolute right-[15%]  sm:flex w-2/3 border  bg-base-100  shadow-xl border-white items-center gap-6 rounded-lg p-3 md:p-10 mx-auto">
          <div>
            <img className="w-[300px]" src={product_image} alt="" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{product_title}</h2>
            <p className="text-xl">Price: $ {price} </p>
            <p className="text-gray-500">{description}</p>
            <p className="text-2xl font-bold">Specification :</p>
            <ol>
              {Specification.map((item) => (
                <li className="text-gray-500">{item}</li>
              ))}
            </ol>
            <p className="text-xl font-bold">Rating</p>
            <div className="flex items-center gap-3">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div>
                <button className="btn">{rating}</button>
              </div>
            </div>
            <div className="flex items-center gap-3">
                <button disabled={isActive} onClick={()=>handleAddCard(currentData)} className="btn text-white text-xl bg-[#9538E2]">Add to Card <CiShoppingCart /></button>
                <button disabled={isActiveB} onClick={()=>handleWishList(currentData)} className="btn text-xl"><FaRegHeart /></button>
                
            </div>
          </div>

          
        </div>
      </div>
      <div className="h-[690px]"></div>
    </div>
  );
};

export default CardDetails;
