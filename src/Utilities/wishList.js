import toast from "react-hot-toast";

const storeDataWishList=()=>{
    const data=localStorage.getItem('wish');
    if(data)
    {
        return JSON.parse(data);
    }else{
        return [];
    }
}

const addToLocalStorageWishList=idx=>{
    const data=storeDataWishList();
    const isExit=data.find(item=>item.id==idx);
    if(isExit){
        toast('Already added')
    }else{
        data.push(idx);
        localStorage.setItem('wish',JSON.stringify(data));
       
    }
}

const removeFromStorageWishList=id=>{
    const data=storeDataWishList();
    const remaiing=data.filter(item=>item.id!=id);
    localStorage.setItem('wish',JSON.stringify(remaiing));
    toast('SuccessFully Removed')
}

export{addToLocalStorageWishList,removeFromStorageWishList,storeDataWishList};