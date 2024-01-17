import React from 'react';
import { useState } from 'react';
import { useStockItemContext } from '../hooks/useStockItemsContext';
import {AiOutlineClose} from 'react-icons/ai'
import { format } from 'date-fns';

function AddProduct({ closeModal }) {
  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [mfgDate, setMfgDate] = useState(null);
  const [expDate, setExpDate] = useState(null);

  const { dispatch } = useStockItemContext();

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const formattedMfgDate = mfgDate ? format(new Date(mfgDate), 'd-MMMM-yyyy') : null;
    const formattedExpDate = expDate ? format(new Date(expDate), 'd-MMMM-yyyy') : null;

    const stockItem = {
      itemName,
      amount,
      unitPrice,
      mfgDate: formattedMfgDate,
      expDate: formattedExpDate,
    };
    console.log(stockItem);

    const response = await fetch('/api/item', {
      method: 'POST',
      body: JSON.stringify(stockItem),
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      dispatch({ type: 'ADD_STOCKITEMS', payload: json });
    }
  };

  return (
    <div className='w-full lg:h-screen'>
    <div className='max-w-[750px] m-auto px-2 py-16 w-full '>
   
    <div className='relative col-span-3 h-auto w-full shadow-xl shadow-gray rounded-xl lg:p-4 bg-aliceBlue'> 
   
    

    <form onSubmit={handleAddProduct}>
     <div className='grid w-full py-2'>

     
        <h1 className='text-center pt-3 text-blue Inter font-normal text-3xl'>Add Product</h1>
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 absolute right-6 top-3'>
          <AiOutlineClose  size={20}  
          onClick={() => closeModal(false)}
          />
        </div>
   
          <div className='flex flex-col py-2 px-16'>
            <label >Name:</label>
            <input type='text' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel  focus:border-nobel'
             onChange={(e)=>setItemName(e.target.value)}
                   value={itemName}
            />
          </div>
               
          <div className='flex flex-col py-2 px-16 '>
            <label className=''>Quantity:</label>
            <input type='number' className ='border-2 rounded-lg p-3 border-gray-300 flex border-nobel  focus:border-nobel'
                  onChange={(e)=>setAmount(e.target.value)}
                   value={amount}
            />
          </div>

          <div className='flex flex-col py-2 px-16'>
            <label >Unit price:</label>
            <input type='number' className ='border-2 rounded-lg p-3 border-gray-300 flex border-nobel  focus:border-nobel'
                  onChange={(e)=>setUnitPrice(e.target.value)}
                   value={unitPrice}
            />
          </div>

          <div className='flex flex-col py-2 px-16'>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Manufactured Date:</label>
            <input type='date' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel  focus:border-nobel
            '
                 onChange={(e)=>setMfgDate(e.target.value)}
                   value={mfgDate}
            />
          </div>
          <div className='flex flex-col py-2 px-16'>
            <label className='block Inter font-300 font-[25px] text-black mb-3'>Expired Date:</label>
            <input type='date' className='border-2 rounded-lg p-3 border-gray-300 flex border-nobel  focus:border-nobel' 
                   onChange={(e)=>setExpDate(e.target.value)}
                   value={expDate}
            />
          </div>
     
    
  </div>
  <div className='flex justify-center items-center'>

        <button
          className='p-4 w-full max-w-[200px] rounded-lg text-gray-100 mt-4 bg-[#6688FF] text-white Inter mx-auto'
          type="submit"
        >
          Add
        </button>
  </div>
    </form>
    </div>
    </div>
    </div>
  );
}

export default AddProduct;
