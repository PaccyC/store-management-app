import React,{useState} from 'react'
import { useStockItemContext } from '../hooks/useStockItemsContext';
import { AiOutlineClose } from 'react-icons/ai';
function Manage({stockItem,closeModal}) {
  const [itemName,setItemName]=useState('');
  const [amount,setAmount]=useState(0);
  const [unitPrice,setUnitPrice]=useState(0);
   
  const{dispatch} =useStockItemContext();
    const handleUpdateProduct=async(e)=>{
      e.preventDefault();
     const stockItem={itemName,amount,unitPrice};
     
     const response=await fetch(`/api/item/${stockItem._id}`,{
       method:"PUT",
       body:JSON.stringify(stockItem),
       headers:{"Content-Type":"application/json"},
     
     })

     const json=await response.json();
     if(response.ok){
      dispatch({type:"UPDATE_STOCKITEM",payload:json});
     }
    
   }
  return (
    <div className='w-full lg:h-screen'>
 <div className='max-w-[750px] m-auto px-2 py-16 w-full'>

 <div className='relative col-span-3 h-auto w-full shadow-xl shadow-gray rounded-xl lg:p-4 bg-aliceBlue'> 

 
    
    <form onSubmit={()=>{}}>
    <div className='grid w-full py-2'>

     
        <h1 className='text-center mb-6 text-blue Inter font-normal text-3xl'>Manage</h1>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 absolute right-6 top-3'>
          <AiOutlineClose  size={20}  
          onClick={() => closeModal(false)}
          />
        </div>
     <div className='flex flex-col py-2 px-16'>

            <label className='block Inter font-300 font-[25px] text-black mb-3'>Name:</label>
            <input type='text' className='border-2 rounded-lg p-3 border-gray-300 flex  border-nobel  focus:border-nobel' 
            onChange={(e)=>setItemName(e.target.value)}
            value={itemName}
            />
          </div>
          <div className='flex flex-col py-2 px-16'>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Quantity:</label>
            <input type='number' className='border-2 rounded-lg p-3 border-gray-300 flex  border-nobel hover:border-nobel'
            
            onChange={(e)=>setAmount(e.target.value)}
            value={amount}
            />
         </div>

         <div className='flex flex-col py-2 px-16'>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Unit price:</label>
            <input type='number' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel  hover:border-nobel'
               onChange={(e)=>setUnitPrice(e.target.value)}
               value={unitPrice}
            />
          </div>
    
     
          </div>
          <div className='flex justify-center items-center '>
         <button className='p-4 w-full max-w-[200px] rounded-lg text-gray-100 mt-4 bg-[#6688FF] text-white Inter mx-auto'
         onClick={()=>handleUpdateProduct}
         >
        Save
          </button>

          </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Manage