import React from 'react'
import './home.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../reducer/cartSlice'
import { useNavigate } from 'react-router-dom'


function Home() {
      const navigate = useNavigate()
    
    const distpatch = useDispatch();

    const productItem = [
        {
            id:1,
            img:"https://s3.amazonaws.com/img2.copperdigital.com/wp-content/uploads/2025/01/07124136/product-retail-768x734.webp",
            title:"Custom Mobile ai function",
            offer:"15 %",
            price: "12 795.00"

        },
        {
            id:2,
            img:"https://s3.amazonaws.com/img2.copperdigital.com/wp-content/uploads/2023/11/29190759/hiline-homepage-768x688.webp",
            title:"A Digital Solution for Catalog Management",
            offer:"8 %",
            price:" 11 495.00",
        },
        {
            id:3,
              img:"https://s3.amazonaws.com/img2.copperdigital.com/wp-content/uploads/2023/11/29190846/green-dot-new-768x768.webp",
              title:"Custom Mobile Solution for Streamlined Operations",
              offer:"10 %",
              price:" 10 795.00"
        },
        {
            id:4,
            img:"https://s3.amazonaws.com/img2.copperdigital.com/wp-content/uploads/2023/11/29190636/sirius-xm-screen-new-768x480.webp",
            title:"Created a Best-in-Class Media Streaming App",
            offer:"12 %",
            price:" 11 895.00",
        },
        
        {
            id:5,
            img:"https://s3.amazonaws.com/img2.copperdigital.com/wp-content/uploads/2023/10/10111832/mobile-web-screen-2.webp",
            title:"Responsive Web Development",
            offer:"12%",
            price:" 8 795.00"
            
        },
        {
            id:6,
            img:"https://s3.amazonaws.com/img2.copperdigital.com/wp-content/uploads/2023/10/10112321/mobile-web-3-.webp",
            title:"Smart TV Apps",
            offer:"10%",
            price:" 16 499.00"
        }
        

    ]

const handleAddToBag =(e,item)=>{
    e.preventDefault()
    distpatch(addToCart(item))
    navigate('/cart')

}
  return (
    <div>
        <div className="productItem">
            <div className="productItem-details">
                {
                    productItem.map((item) => {
                        return(
                            <>
                            <div className="product-items" key={item.id}>
                                <a href="" onClick={(e)=> handleAddToBag(e,item)}>
                                <div className="img">
                                    <img src={item.img} alt="product" id='product-img' />
                                </div>
                                <div className="product-details">
                                    <div className="title">
                                    <p>{item.title}</p>
                                    </div>
                                    <div className="offer">
                                        <p className='offer-price'>Offer: {item.offer}</p>
                                    </div>
                                    <div className="price">
                                        <p>MRP : ₹{item.price}</p>
                                    </div>
                                </div>
                                </a>
                            </div>

                            </>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Home