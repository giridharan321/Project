import React from 'react'
import { data } from '../Components/cartdetails'
export default function Cart() {
    return (

        <div className='container card-container'>
            {
                data.map((data) => (
                    <div className='main-card'>
                        <div className='card  text-center'>
                            <h1 className='card-head'>{data.name}</h1>
                            <img src={data.img} className='card-top img-fluid' />
                            <h4 className='card-title'>{data.price}</h4>
                        </div>
                    </div>
                ))
            }
            {/* <div className='card'>
        <h1 className='card-head'>{data[1].name}</h1>
            <img src={data[1].img}className='card-top'/>
            <h4 className='card-title'>{data[1].price}</h4>
        </div>
        <div className='card'>
        <h1 className='card-head'>{data[2].name}</h1>
            <img src={data[2].img}className='card-top'/>
            <h4 className='card-title'>{data[2].price}</h4>
        </div> */}
        </div>
    )
}
