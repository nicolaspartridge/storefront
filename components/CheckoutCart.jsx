import {React, useState, useEffect} from 'react'

const s = {
  container: "w-full flex flex-col grow h-full max-h-full items-start bg-gray-50 px-6 py-6 shadow-xl justify-between z-2",
  itemContainer: "w-full h-full flex flex-row items-center justify-between bg-white px-6 rounded-lg my-2 h-14 max-h-14 min-h-[56px] shadow-sm border-2 border-white",
  checkoutButton: "flex flex-row items-center justify-center bg-red-500 text-white text-sm py-2 px-3 rounded-md w-full hover:opacity-75 transition-all duration-200",
  info: "w-full flex flex-col items-center mb-12 text-sm",
  infoItem: "flex flex-row items-center justify-between w-full text-sm my-1",
}

const CheckoutCart = ({ items, isCheckValid, setIsCheckValid }) => {
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)

  useEffect(() => {
    setTotal(items.reduce((acc, item) => acc + item.price, 0))
    if (total >= 400) {
      setDiscount(total * 0.1)
    } else {
      setDiscount(0)
    }
  },[items, total])
  
  return (
    <div className={s.container}>
      <div className='flex flex-col w-full flex-1 max-h-96 overflow-y-auto'>
        <h1 className='font-bold mb-4'>Your Products</h1>
        {items.length !== 0 && items.map(item => <CartItem key={item.id} title={item.title} price={item.price} desc={item.desc} />)}
      </div>
      
      <div className={s.info}>
        <div className={s.infoItem}>
          <span>Price</span>
          <span>${total}</span>
        </div>
        {
          discount > 0 && (<div className={s.infoItem}>
            <span className='flex flex-row'>Volume Discount</span>
            <span className='text-green-600 font-bold'>-${discount}</span>
          </div>)
        }
        
        <div className='flex flex-row items-center justify-between w-full text-sm my-3 border-t border-gray-600 py-1'>
          <span>Total</span>
          <span>${total - discount}</span>
        </div>
        <div className='flex flex-row items-center justify-start w-full'>
          <input type="checkbox" name="terms" onChange={() => setIsCheckValid(!isCheckValid)} />
          <p className='ml-2'>I agree to the terms</p>
        </div>
       
      </div>
    </div>
  )
}

const CartItem = ({ title, price, desc="Product Description" }) => {
  return (
    <div className={s.itemContainer}>
      <div className='flex flex-row'>
        <div className='flex flex-col items-start justify-start'>
            <span className='text-xs'>{title}</span>
            <span className='text-xs text-gray-400'>{desc}</span>
        </div>
      </div>
      <span className='text-xs'>
        {price}
        <span className='text-gray-400'> /mo</span>
      </span>
    </div>
  )
}

export default CheckoutCart