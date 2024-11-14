import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { removeFromStorage } from '../Utilities/localStorage';
import { removeFromStorageWishList } from '../Utilities/wishList';

const CardLists = ({item,type,handleDelete}) => {
    const{product_image,product_title,price,id,description}=item;

    const handleRemove=(id)=>{
        handleDelete()
        if(type===1){

            removeFromStorage(id);
        }else{
            removeFromStorageWishList(id);
        }
    }

    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 mb-5 px-16 py-8 rounded-lg bg-base-100 shadow-xl '>
            <div>
                <img className='w-[100px]' src={product_image} alt="" />
            </div>
            <div className='relative'>
                <h2 className='text-2xl font-bold'>{product_title}</h2>
                <p className='text-gray-500 my-3'>{description}</p>
                <p className='text-xl font-semibold'>Price: ${price}</p>
                <button onClick={()=>handleRemove(id)} className='text-4xl bg-white text-red-600  font-bold absolute -top-28 -right-8 md:-top-5 md:-right-5'><CiCircleRemove /></button>
            </div>
        </div>
    );
};

export default CardLists;