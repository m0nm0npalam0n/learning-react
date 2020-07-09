import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import useAxiosGet from '../hooks/HttpRequests'

function Home(){
    const url = `https://5f05ee92ee44800016d389bf.mockapi.io/api/v1/products?page=1&limit=10`

    let products = useAxiosGet(url)

    let content = null

    if (products.error) {
        content = 
            <p>
                There was an error encountered.
            </p>
    }

    if (products.loading) {
        content = <Loader />
    }

    if (products.data) {
        content = 
        products.data.map((product) => 
            <div key={product.id}>
                <ProductCard 
                    product={product}
                />
            </div>
        )

    }

    return (
        <div>
            <h1 className="font-bold text-2xl">
                Top Items
            </h1>
            { content }
        </div>
    )
}

export default Home