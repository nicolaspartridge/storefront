import {React, useState, useEffect} from 'react'
import Header from '../components/Header'
import Sale from '../components/Sale'
import Product from '../components/Product'
import Cart from '../components/Cart'
import Cookie from 'js-cookie'
import cookie from 'cookie'

const s  = {
  container: "w-full h-screen overflow-hidden flex flex-row items-start pt-[60px]",
  left: "flex flex-col flex-grow items-center max-h-full",
  right: "flex flex-col items-start h-full",
  category: "bg-gray-100 rounded-lg py-2 px-4 flex flex-col w-[340px] items-center mb-6 max-h-[350px]",
  categoryTitle: "font-bold text-red-400 mb-1 tracking-[4px] uppercase text-sm",
  categorySubTitle: "text-red-400 text-xs",
}

const parseCookies = (req) => {
  return cookie.parse(req ? req.headers.cookie || '[]' : document.cookie)
}

const Pricing = ({ initialItems, initialTotal }) => {
  const [items, setItems] = useState(initialItems ? JSON.parse(initialItems) : [])

  console.log('items: ', items)

  useEffect(() => {
    Cookie.set('items', JSON.stringify(items))
  },[items])

  return (
    <>
    <Header />
    <div className={s.container}>
      
      <div className={s.left}>
        <Sale />
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='text-xl font-bold my-4'>Sample Heading</h1>
          <p className='text-sm mb-4'>Lorem ipsum dolor sit amet, consecutur adipiscing elit, sed do eiusmod tempor incidudnt ut labore et dolore magna aliqua.</p>
          <div className='bg-gray-100 rounded-lg p-2 flex flex-col w-64 h-20 items-center justify-center'>
            <span className='font-bold mb-2'>Lorem ipsum title</span>
            <span className='text-sm text-gray-500'>Some placeholder text...<span className='text-red-400 underline'>Link</span></span>
          </div>
        </div>
        <div className='flex flex-row mt-6'>
          <div className={s.category}>
            <span className={s.categoryTitle}>Category 1</span>
            <span className={s.categorySubTitle}>Sample Text</span>
            <Product title="Product 1" price={100} items={items} setItems={setItems} id={1} />
            <Product title="Product 2" price={100} items={items} setItems={setItems} id={2} />
            <Product title="Product 3" price={100} items={items} setItems={setItems} id={3} />
            <Product title="Product 4" price={100} items={items} setItems={setItems} id={4} />
          </div>
          <div className='flex flex-col mx-6'>
            <div className={s.category}>
              <span className={s.categoryTitle}>Category 2</span>
              <span className={s.categorySubTitle}>Sample Text</span>
              <Product title="Product 5" price={150} items={items} setItems={setItems} id={5} />
              <Product title="Product 6" price={150} items={items} setItems={setItems} id={6} />
            </div>
            <div className={s.category}>
              <span className={s.categoryTitle}>Category 3</span>
              <span className={s.categorySubTitle}>Sample Text</span>
              <Product title="Product 7" price={200} items={items} setItems={setItems} id={7} />
              <Product title="Product 8" price={200} items={items} setItems={setItems} id={8} />
            </div>
          </div>
        </div>
      </div>
      <div className={s.right}>
        <Cart items={items} />
      </div>
    </div>
    </>
  )
}

Pricing.getInitialProps = ({req}) => {
  const cookies = parseCookies(req)

  return {
    initialItems: cookies.items,
  }
}

export default Pricing