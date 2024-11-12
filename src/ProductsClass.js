import React, { Component } from 'react'
import ProductClass from './ProductClass'

class ProductsClass extends Component {
    render() {
        const products = [
            {
            id: 1,
            title: 'PC Portable Gamer HP VICTUS',
            price: '7490 DH',
            img: '/pictures/HP16D0195NF.jpg'
            },
            {
            id: 2,
            title: 'PC Portable Gamer HP VICTUS',
            price: '2190 DH',
            img: '/pictures/HP14424U3EA.jpg'
            },
            {
            id: 3,
            title: 'Pc Portable Chromebook Acer',
            price: '3640 DH',
            img: '/pictures/NXATHEF002.jpg'
            },
            {
            id: 4,
            title: 'PC Portable - HUAWEI',
            price: '1270 DH',
            img: '/pictures/HUA6901443442959.jpg'
            },
        ];
        return (
            <>
                <div className='row'>
                    {products.map((product) => (
                        <ProductClass key={product.id} title={product.title} price={product.price} img={product.img} />
                    ))}

                </div>
            </>
        )
    }
}

export default ProductsClass
