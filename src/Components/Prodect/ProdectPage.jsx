import React, { useState, useEffect } from 'react'
import './Productpage.css'
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/action'
const ProdectPage = () => {
  const dispatch = useDispatch();
  // const { parems } = useParams()
  const [productlist, setProductlist] = useState([])
  const [catogary, setCatogary] = useState([])
  const [typecatogary, setTypecatogary] = useState("electronics")
  useEffect(() => {
    catogarydata()
    details()
  }, [typecatogary])
  const catogarydata = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/categories`)
    const data = await res.json()
    setCatogary(data)
  }
  const details = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${typecatogary}`)
    const data = await res.json()
    setProductlist(data)
  }
  return (
    <div className='ProductpagrOuterDiv'>
      <div className='productBox'>
        <div className='productLeftDiv'>
          {
            catogary.length === 0 ? <div>Data not Present</div> :
              catogary.map((ele) => {
                return <div>
                  <Link to={ele} onClick={() => {
                    setTypecatogary(ele)
                  }}><h2>{ele && ele}</h2></Link>
                </div>
              })
          }
        </div>
        <div className='productRightDiv'>
          <ul>
            {productlist.map((ele) => {
              return <div><Link to={`/cart/${ele.id}`} onClick={() => {
                dispatch(addToCart(ele))
              }}><li>{ele && ele.title}</li></Link></div>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default ProdectPage