import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate()
  const cartItems  = useSelector(state => state.cart.items)

  const cartBtn =()=>{
    navigate('/cart')
  }
  const homeBtn =()=>{
    navigate('/')
  }
  return (
    <div>

        <div className="header">
            <header>
                <label htmlFor="" onClick={homeBtn}><img src="https://copperdigital.com/wp-content/uploads/2023/03/copper-digital-logo-new.svg" alt="" /></label>
                <nav>
                <div className="heart-icon">
                <svg aria-hidden="true" focusable="false" fillRule='white' viewBox="0 0 24 24" role="img" width="24px" height="24px" ><path stroke="white" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg>
                </div>

                <div className="cart-icon" onClick={cartBtn}>
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fillRule="white"><path stroke="white" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path></svg>{
                  cartItems.length > 0 &&(
                    <span className='cartCout'>{cartItems.length}</span>
                  )
                }
                        
                </div>
                </nav>
            </header>
        </div>
    </div>
  )
}

export default Header