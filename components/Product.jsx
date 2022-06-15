import {React, useState, useEffect} from 'react'
import { InformationCircleIcon, ReceiptTaxIcon } from '@heroicons/react/outline'

const s = {
  container: "w-full h-full flex flex-row items-center justify-between bg-white px-6 rounded-lg my-2 h-14 max-h-14 shadow-sm border-2 border-white",
  containerSelected: "w-full h-full flex flex-row items-center justify-between bg-white px-6 rounded-lg my-2 h-14 max-h-14 shadow-sm border-2 border-red-500",
  selectedButton: "bg-red-500 text-white text-sm py-1 px-3 rounded-md",
  button: "bg-gray-700 text-white text-sm py-1 px-3 rounded-md",
}

const Product = ({ title, price, items, setItems, id }) => {

  const [isSelected, setIsSeclected] = useState(items.find(item => item.id === id))
  const [total, setTotal] = useState()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    let sum = 0
    items.forEach(item => sum+=item.price)
    setTotal(sum)
  },[items])

  console.log('total', total)

  const select = () => {
    if (isSelected) {
      if(total - price < 400 && total >= 400) {
        setShowModal(true)
      } else {
        setItems(items.filter(item => item.id !== id))
        setIsSeclected(!isSelected)
      }

    } else {
      setItems([...items,{title: title, price: price, id: id}])
      setIsSeclected(!isSelected)
    }
  }

  const removeItem = () => {
    setItems(items.filter(item => item.id !== id))
    setShowModal(false)
    setIsSeclected(!isSelected)
  }

  return (
    <div className={ isSelected ? s.containerSelected : s.container}>
      {
        showModal ?
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/50'>
          <div className='w-[450px] h-[250px] bg-white flex flex-col justify-center items-center rounded-lg p-4 text-center'>
            <ReceiptTaxIcon className='w-8 mb-2 text-red-500' />
            <p>Wait! Don&#39;t loose your Discount. Keep Product {id} and receive 10% off</p>
            <div className='flex flex-row w-full mt-6'>
              <button onClick={removeItem} className='border border-gray-400 text-gay-400 text-sm py-2 px-3 rounded-md w-full mr-2'>Remove</button>
              <button onClick={() => setShowModal(false)} className='bg-red-500 text-white text-sm py-1 px-3 rounded-md w-full'>Keep QuantEdge Report</button>
            </div>
          </div>
        </div>
        : null
      }
      <div className='flex flex-row'>
        <InformationCircleIcon className='w-6 mr-2 text-red-500' />
        <div className='flex flex-col'>
          <span className='text-xs'>{title}</span>
          <span className='text-xs'>{price} <span className='text-gray-400'>/mo</span></span>
        </div>
      </div>
      
      {isSelected ? 
        <button onClick={select} className={s.selectedButton} >Selected</button> :
        <button onClick={select} className={s.button} >Select</button>
        }
    </div>
  )
}


export default Product