import React, { useEffect, useState } from "react";
import CardLists from "../Components/CardLists";
import WishList from "../Components/WishList";
import { deleteAll, storeData } from "../Utilities/localStorage";
import { useLoaderData, useNavigate } from "react-router-dom";
import { storeDataWishList } from "../Utilities/wishList";
import { GoVerified } from "react-icons/go";

const Dashbord = () => {
    const navigate=useNavigate();
  const [control, setControl] = useState(0);
  const handleDelete = () => {
    console.log("handle delete");
    setControl(control + 1);
  };
  const data = useLoaderData();

  const [money, setMoney] = useState(0);

  useEffect(() => {
    const item = storeData();
    const total = item.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );
    setMoney(total.toFixed(2));
  }, [control]);

  // console.log(money)

  const [btn, setBtn] = useState(true);

  const [cartData, setCartData] = useState([]);
  const [wishData, setWishData] = useState([]);

  // setCartData(item)

  useEffect(() => {
    const item = storeData();
    setCartData(item);
  }, [control]);

  useEffect(() => {
    const wishItem = storeDataWishList();
    setWishData(wishItem);
  }, [control]);

  // console.log(cartData)

  const handleBtn = (btn) => {
    setBtn(btn);
  };

  const handleSort = () => {
    const item = storeData();
    const sortData = [...item].sort((a, b) => b.price - a.price);
    setCartData(sortData);
  };

  const handlePurches = () => {
      document.getElementById("my_modal_1").showModal()
   
    
  };


  const handleClose=()=>{
    deleteAll();
    setMoney(0);
    setControl(control + 1);
    navigate('/')
  }

  return (
    <div>
      <div className="bg-[#9538E2] text-center text-white">
        <h2 className="text-2xl my-4 font-bold pt-10">Dashboard</h2>
        <p className="pb-10">
          Explore the latest gadgets that will take your experience to the next
          level. From smart <br /> devices to the coolest accessories, we have
          it all!
        </p>
        <div className="flex gap-4 items-center justify-center pb-12">
          <button
            onClick={() => handleBtn(true)}
            className={
              btn
                ? "btn px-8 bg-white text-[#9538E2]"
                : " btn px-8 bg-[#9538E2] text-white"
            }
          >
            Cart
          </button>
          <button
            onClick={() => handleBtn(false)}
            className={
              btn
                ? "btn px-8  bg-[#9538E2] text-white"
                : "bg-white text-[#9538E2] btn px-8 "
            }
          >
            WishList
          </button>
        </div>
      </div>

      <div className="mt-8">
        {btn ? (
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold px-4 md:px-8">Cart</h2>
              </div>
              <div className="flex px-4 md:px-8 flex-col md:flex-row items-center justify-between gap-4">
                <h2 className="text-xl font-bold">Total Cost: {money}</h2>
                <button
                  onClick={handleSort}
                  className="btn bg-white text-[#9538E2]"
                >
                  Sort by Price
                </button>
                <button
                  onClick={handlePurches}
                  className="btn bg-[#9538E2] text-white"
                >
                  Purchase
                </button>
              </div>
            </div>
            <div className="mb-40 mt-24">
              {/* card */}
              {cartData.map((item) => (
                <CardLists
                  key={item.id}
                  handleDelete={handleDelete}
                  type={1}
                  item={item}
                ></CardLists>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-36">
            <h2 className="text-2xl mb-16 font-bold">Wish List</h2>

            {wishData.map((item) => (
              <CardLists
                key={item.id}
                handleDelete={handleDelete}
                type={2}
                item={item}
              ></CardLists>
            ))}
          </div>
        )}
      </div>
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="flex flex-col justify-center items-center">

            <span className="text-green-500 text-7xl"><GoVerified /></span>
          
            <h3 className="font-bold  mt-5 text-2xl">Payment Successfully</h3>
            <p className="py-4 text-gray-500">
            Payment Successfully
            </p>
            <p className="text-gray-500">Total Cost: {money}</p>
            </div>
            <div className="modal-action flex justify-center text-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button onClick={handleClose} className="btn text-center px-10 mx-auto">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Dashbord;
