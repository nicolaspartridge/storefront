import {React, useEffect, useState} from 'react'
import Header from '../components/Header'
import CheckoutCart from '../components/CheckoutCart'
import cookie from 'cookie'

const s  = {
  container: "w-full h-screen overflow-hidden flex flex-row items-start mt-[60px] border-t border-gray-300",
  left: "flex flex-col flex-grow items-center justify-center max-h-full",
  right: "flex flex-col w-1/3 items-start h-full bg-gray-50",
  category: "bg-gray-100 rounded-lg py-2 px-4 flex flex-col w-[340px] items-center mb-6 max-h-[350px]",
  categoryTitle: "font-bold text-red-400 mb-1 tracking-[4px] uppercase text-sm",
  categorySubTitle: "text-red-400 text-xs",
  form: "flex flex-col text-sm max-w-lg text-gray-500 mt-10 ml-36",
  input: "w-full border-gray-300 border rounded-lg px-3 py-2 my-2",
  label: "text-left",
  proceedButton: "flex flex-row items-center justify-center bg-red-500 text-white text-sm my-2 py-3 px-3 rounded-md w-full hover:opacity-75 transition-all duration-200",
  disbledButton: "flex flex-row items-center justify-center bg-gray-400 text-white text-sm my-2 py-3 px-3 rounded-md w-full"
}

const parseCookies = (req) => {
  return cookie.parse(req ? req.headers.cookie || '[]' : document.cookie)
}

const Checkout = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems ? JSON.parse(initialItems) : [])
  const [isValid, setIsValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPassValid, setIsPassValid] = useState(false)
  const [isNameValid, setIsNameValid] = useState(false)
  const [isAddValid, setIsAddValid] = useState(false)
  const [isCountryValid, setIsCountryValid] = useState(false)
  const [isCityValid, setIsCityValid] = useState(false)
  const [isProvinceValid, setIsProvinceValid] = useState(false)
  const [isPostalValid, setIsPostalValid] = useState(false)
  const [isCheckValid, setIsCheckValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const checkMailInput = (e) => {
    let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if(e.target.value.match(mailformat)) {
      setIsEmailValid(true)
      console.log("Email is valid");
    } else {
      setIsEmailValid(false)
      console.log("Email is not valid");
    }
  }

  const checkPassInput = (e) => {
    let passformat =  /^[A-Za-z]\w{7,14}$/
    if(e.target.value.length >= 6 && e.target.value.length <= 40 && e.target.value.match(passformat)) {
      setIsPassValid(true)
      console.log("Password is valid");
    } else {
      setIsPassValid(false)
      console.log("Password is not valid");
    }
  }

  const checkEmpty = (e) => {
    switch(e.target.name) {
      case "name":
        if(e.target.value.length > 0) {
          setIsNameValid(true)
        } else {
          setIsNameValid(false)
        }
      break;
      case "address":
        if(e.target.value.length > 0) {
          setIsAddValid(true)
        } else {
          setIsAddValid(false)
        }
      break;
      case "country":
        if(e.target.value.length > 0) {
          setIsCountryValid(true)
        } else {
          setIsCountryValid(false)
        }
      break;
      case "city":
        if(e.target.value.length > 0) {
          setIsCityValid(true)
        } else {
          setIsCityValid(false)
        }
      break;
      case "province":
        if(e.target.value.length > 0) {
          setIsProvinceValid(true)
        } else {
          setIsProvinceValid(false)
        }
      break;
      case "postal":
        if(e.target.value.length > 0) {
          setIsPostalValid(true)
        } else {
          setIsPostalValid(false)
        }
      break;
      default:
        console.log('default')
    }
  }

  const onSubmit = () => {
    setIsLoading(true)
    setTimeout(function(){
      setIsLoading(false)
      setIsSubmitted(true)
    }, 3000)
  }

  useEffect(() => {
    const validateForm = () => {
      if(isEmailValid && isPassValid && isNameValid && isAddValid && isCountryValid && isCityValid && isProvinceValid && isPostalValid && isCheckValid) {
       setIsValid(true)
      } else {
          setIsValid(false)
      }
    }
    validateForm()
  },[isEmailValid, isPassValid, isNameValid, isAddValid, isCountryValid, isCityValid, isProvinceValid, isPostalValid, isCheckValid])

  return (
    <>
    <Header />
    <div className={s.container}>
      <div className={s.left}>
        {
          !isSubmitted ?
            isLoading ? <p>Loading...</p> :
          
            <div className='flex flex-col items-center justify-center text-center'>
              <form className={s.form} onSubmit={onSubmit} >
              <div className='w-full flex flex-row'>
                  <span className='flex-grow border-b mb-[25px]'></span>
                  <h1 className='my-4 mx-3'>Account Info</h1>
                  <span className='flex-grow border-b mb-[25px]'></span>
                </div>
                <span className={s.label}>Your Email</span>
                <input className={s.input} type='text' name='email' onChange={(e) => checkMailInput(e)}/>
                <span className={s.label}>New Password</span>
                <input className={s.input} type='password' name='password' onChange={(e) => checkPassInput(e)}/>
                <span className='text-xs text-left'>Password is case sensitive, must not contain spaces or special characters(eg. @, &, etc) and must be between 6 & 40 characters</span>
                <div className='w-full flex flex-row'>
                  <span className='flex-grow border-b mb-[25px]'></span>
                  <h1 className='my-4 mx-3'>Billing Info</h1>
                  <span className='flex-grow border-b mb-[25px]'></span>
                </div>
                <span className={s.label}>Full Name</span>
                <input className={s.input} type='text' name='name' onChange={(e) => checkEmpty(e)}/>
                <span className={s.label}>Address</span>
                <input className={s.input} type='text' name='address' onChange={(e) => checkEmpty(e)}/>
                <span className={s.label}>Country</span>
                <input className={s.input} type='text' name='country' onChange={(e) => checkEmpty(e)}/>
                <div className='flex flex-row items-center justify-between'>
                  <div className='flex flex-col items-start justify-center'>
                    <span className={s.label}>City</span>
                    <input className={s.input} type='text' name='city' onChange={(e) => checkEmpty(e)}/>
                  </div>
                  <div className='flex flex-col items-start mx-3'>
                    <span className={s.label}>State / Province</span>
                    <input className={s.input} type='text' name='province' onChange={(e) => checkEmpty(e)}/>
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <span className={s.label}>Postal code</span>
                    <input className={s.input} type='text' name='postal' onChange={(e) => checkEmpty(e)}/>
                  </div>
                </div>
                {isValid && isCheckValid ?
                <button className={s.proceedButton} type="submit">Proceed</button>
                :
                <button className={s.disbledButton} type="submit" disabled>Proceed</button>

                }
              </form>
            </div>
          :
          <div>
            Purchase Complete
          </div>
        }
        
      </div>
      <div className={s.right}>
        <CheckoutCart items={items} setIsCheckValid={setIsCheckValid} isCheckValid={isCheckValid} />
      </div>
    </div>
    </>
  )
}

Checkout.getInitialProps = ({req}) => {
  const cookies = parseCookies(req)

  return {
    initialItems: cookies.items
  }
}

export default Checkout