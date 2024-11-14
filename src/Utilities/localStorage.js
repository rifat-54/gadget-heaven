import toast from "react-hot-toast";

const storeData=()=>{
    const data=localStorage.getItem('item');
    if(data)
    {
        return JSON.parse(data);
    }else{
        return [];
    }
}

const addToLocalStorage=idx=>{
    const data=storeData();
    const isExit=data.find(item=>item.id==idx);
    if(isExit){
        toast('already added')
        
    }else{
        data.push(idx);
        localStorage.setItem('item',JSON.stringify(data));
        // toast
        
    }
}

const removeFromStorage=id=>{
    const data=storeData();
    const remaiing=data.filter(item=>item.id!=id);
    localStorage.setItem('item',JSON.stringify(remaiing));

    toast('SuccessFully Removed')
}

const deleteAll=()=>{
    localStorage.setItem('item',[]);
}

export{addToLocalStorage,removeFromStorage,storeData,deleteAll};