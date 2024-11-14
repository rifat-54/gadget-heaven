import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const Cards = () => {

    const data=useLoaderData();
    const {category}=useParams();
    
    const[gadget,setGadget]=useState([]);
    useEffect(()=>{
        if(category)
        {
            const gad=[...data].filter(item=>item.category==category);
            setGadget(gad);
        }else{
            setGadget(data.slice(0,6));
        }
       
    },[data,category]);
    // console.log(data)

    return (
        <div className='w-11/12 mx-auto  mt-20 lg:px-5'>
            {
                gadget.length==0?<p className='text-5xl text-center mb-36 font-bold'>No Item Found</p>:
                
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7'>
                        {
                    gadget.map(item=><Card key={item.id} card={item}></Card>)}
                    </div>
                
            }
        
            
        </div>
    );
};

export default Cards;