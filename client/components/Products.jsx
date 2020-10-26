import React from 'react';

const Products = () => (
    <div className="flex justify-center flex-wrap text-white mt-4 md:mt-0">
        <div className="flex-intial xl:w-1/6 bg-gray-800 mx-4 md:mx-0 md:mr-8 mb-8 md:p-4 p-4">
            <div className="clearfix">
                <div className="border border-white text-white py-1 md:px-4 px-2 float-right text-xs">B1</div>
            </div>
            <div className="h-24 md:h-32 overflow-hidden">
                <img
                    src={"images/5.png"}
                    alt="5"
                    className="h-full m-auto object-cover"
                />
            </div>
            <div className="whitespace-normal md:text-lg text-sm">iPhone 7</div>
            <div className="whitespace-normal md:text-sm text-xs">Unlocked | 256GB</div>
            <div className="mt-2">
                <p className="text-xs whitespace-normal">Unit Price</p>
                <p className="md:text-xl text-lg font-bold whitespace-normal">$450</p>
            </div>
            <div className="text-xs whitespace-normal">1500 Available</div>
            <div className="xl:px-8 px-2">
                <button className="px-1 bg-blue-600 py-2 rounded w-full font-bold mt-4 text-xs md:text-sm">BUY</button>
            </div>
        </div>
        
    </div>
)

export default Products;
