
import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img  
            className='home_image' 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
            <div className="home_row">
                <Product
                    id="123"
                    title = "New Product"
                    price ={69.69}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id="123"
                    title = "New Product"
                    price ={69.69}
                    rating={5}
                    image=""
                />
            </div>
            

        </div>

    );
}

export default Home