import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
           <div className="home__container">

               <img 
               className="home__image"
               src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=" "
               />
               <div className="home__row">
               <Product 
               id="12321341"
               title="The lean startup:"
               price={29.99}
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
               rating={2}
               />
               <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer:"
                price={239.00}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                rating={4}
                />
               </div>

               <div className="home__row">
               <Product
               id="4903850"
                title="FitBit band:"
                price={198.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                rating={3}
                />
               <Product
                id="23445930"
                title="Amazon Echo :"
                price={99.99}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$ "
                rating={5}/>

               <Product
                id="12345678"
                title="New Apple iPad Pro :"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg "
                rating={2}/>
               </div>

               <div className="home__row">
               <Product
                id="3254354345"
                title="Samsung LED Monitor :"
                price={1094.99}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                rating={2}/>
               </div>
             
           </div>
        </div>
    )
}


export default Home
