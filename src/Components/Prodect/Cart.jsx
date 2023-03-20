import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Cart.css'
const Cart = () => {
  const { id } = useParams();
  const result = useSelector((state) => state.cartData)
  console.log(result.length, "cart");

  return (
    <div className="cardOuterDiv">
      {
        result.length === 0 ?
          <div className="CartBoxDiv">
            <h1 style={{color:"red"}}>Data Not Found</h1>
            <p>Please Reload the Products Page Or Click on Products </p>
          </div> :
          <div className="CartBoxDiv">
            {console.log("inter in condition", result)}
            <div className='CartTitleDiv'> <h1>{result.category} Category</h1></div>
            <div className='CartDetailDiv'>
              <div className='productImage'>
                <img src={result.image} alt="" />
              </div>
              <div className='productDetails'>
                <div>
                  <p><b>Product Name:</b></p>
                  <p>{result.title}</p>
                </div>
                <div>
                  <p><b>Product Price:</b></p>
                  <p>{result.price}</p>
                </div>
                <div>
                  <p><b>Product Discription:</b></p>
                  <p>{result.description}</p>
                </div>
                <div>
                  <p><b>Product Rating:</b></p>
                  <p>{result.rating.rate}</p>
                </div>
              </div>
            </div>
          </div>
      }

    </div>
  )
}
export default Cart