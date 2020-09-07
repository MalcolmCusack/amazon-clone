
import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img  
            className='home_image' 
            src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_3000x1200_PRE_Final_en-US_PVD5224._CB410800060_.jpg'
            alt=""
            />
            <div className="home_row">
                <Product
                    id="123"
                    title = "Watch"
                    price ={69.69}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id="234087234087"
                    title = "Tracfone Carrier-Locked Alcatel MyFlip 4G Prepaid Flip Phone"
                    price ={19.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/6168YmN7qsL._AC_UY436_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                     id="414368523445"
                      title = "TChop Sabers Light Up LightSaber Chopsticks"
                      price ={9.97}
                      rating={5}
                      image="https://m.media-amazon.com/images/I/81ABckNfDjL._AC_UY436_FMwebp_QL65_.jpg"
                />
                <Product
                    id="340897713845"
                    title = "SMODS 40 Foot Tiny Home"
                    price ={36000}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/710hnPwOzqL._AC_UY436_FMwebp_QL65_.jpg"
                />
                <Product
                    id="865434545"
                    title = "Uranium Ore"
                    price ={39.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91tal9iiB1L._SL1500_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="334634577125"
                    title = "Antique Persian Meshad Rug BB6128 - Doris Leslie Blau"
                    price ={180000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/A1uVBRiynjL._AC_SL1500_.jpg"
                />
            </div>
            
        </div>

    );
}

export default Home
