import React , {useEffect} from 'react'
import {useDispatch , useSelector} from "react-redux"
import axios from 'axios'
import { getAllProductAction } from '../actions/productAction'
import ProductCard from '../components/ProductCard'
export default function Home() {
    const {reduxProducts} = useSelector(state =>state.products)
    const dispatch = useDispatch()
    useEffect(e => {
        dispatch(getAllProductAction())
    }, [])
    
  return ( 
    <div className='container'>
        <div className='row'>
        {
            reduxProducts.map ( singleProduct => {
                return <div key={singleProduct._id} className='col-sm-3'>
                    <ProductCard item = {singleProduct}/>
                    </div>
            })
        }
            </div>
       
    </div>
  )
}
