import {React, useEffect, useState} from 'react'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { InformationCircleIcon, ShoppingCartIcon } from '@heroicons/react/outline'

const s = {
  container: "w-[330px] flex flex-col grow h-full max-h-full items-start bg-gray-50 px-6 py-6 shadow-xl justify-between z-2",
  itemContainer: "w-full h-full flex flex-row items-center justify-between bg-white px-6 rounded-lg my-2 h-14 max-h-14 min-h-[56px] shadow-sm border-2 border-white",
  checkoutButton: "flex flex-row items-center justify-center bg-red-500 text-white text-sm py-2 px-3 rounded-md w-full hover:opacity-75 transition-all duration-200",
  info: "w-full flex flex-col items-center mb-12 text-sm",
  infoItem: "flex flex-row items-center justify-between w-full text-sm my-1",
}

const Cart = ({ items }) => {
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
      <div className='flex flex-col w-full flex-1 max-h-[700px] overflow-y-auto'>
        <h1 className='font-bold mb-4'>Your Products</h1>
        {items.length !== 0 && items.map(item => <CartItem key={item.id} title={item.title} price={item.price} desc={item.desc} />)}
      </div>
      
      <div className={s.info}>
        <div className={s.infoItem}>
          <span>Price</span>
          <span>${total}</span>
        </div>
        {
          total >= 400 && (<div className={s.infoItem}>
            <span className='flex flex-row'>Volume Discount <InformationCircleIcon className='w-4 ml-2' /></span>
            <span className='text-green-600 font-bold'>-${discount}</span>
          </div>)
        }
        
        <div className={s.infoItem}>
          <span>Subtotal</span>
          <span>${total - discount}</span>
        </div>
        <div className='flex flex-row items-center justify-between w-full text-sm my-3 border-t border-gray-600 py-1'>
          <span>Total</span>
          <span>${total - discount}</span>
        </div>
        <Link href="/checkout"><button className={s.checkoutButton}><ShoppingCartIcon className='w-5 mr-2 text-white' />Checkout</button></Link>
      </div>

    </div>
  )
}

const CartItem = ({ title, price, desc="Product Description" }) => {
  return (
    <div className={s.itemContainer}>
      <div className='flex flex-row'>
      <CheckCircleIcon className='w-7 text-green-500 mr-2'/>
      <div className='flex flex-col items-start justify-center'>
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

export default Cart