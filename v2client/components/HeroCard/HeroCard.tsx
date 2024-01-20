import React from 'react';
import style from './herocard.module.css'; // Update with your actual CSS module path

export default function HeroCard() {
    return (
        <>
            <div className={`flex space-x-10 justify-center mt-20 flex-wrap sm:flex-no-wrap md:flex-wrap lg:flex-no-wrap  xl:flex-wrap`}>

                <div className="bg-gradient-to-r from-black to-gray-900 card w-80 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                </div>

                <div className="bg-gradient-to-r from-black to-gray-900 card w-80 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                </div>

            </div>
        </>
    );
};

