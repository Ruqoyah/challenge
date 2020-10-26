import React from 'react';
import Paginate from './Paginate';
import Loading from './Loading';
import { formatPrice } from '../helpers'

const Products = ({ sellRequests, handlePageChange, loading }) => (
    <div>
        <div className="flex justify-center flex-wrap text-white mt-4 md:mt-0">
            {
                loading ? (
                    <Loading />
                  ) :sellRequests && sellRequests.response && sellRequests.response.map(sellRequest => (
                    <div key={sellRequest._id} className="flex-intial xl:w-1/6 bg-gray-800 mx-4 md:mx-0 md:mr-8 mb-8 md:p-4 p-4">
                        <div className="clearfix">
                  <div className="border border-white text-white py-1 md:px-4 px-2 float-right text-xs">{sellRequest.grade && sellRequest.grade}</div>
                        </div>
                        <div className="h-24 md:h-32 overflow-hidden">
                            <img
                                src={
                                    sellRequest.name ==='iPhone 7 Plus' ? "images/iphone_7_plus.png" :
                                    sellRequest.name ==='iPhone 7' ? "images/iphone_7.png" :
                                    sellRequest.name ==='iPhone XS Max' ? "images/iphone_xs_max.png" :
                                    sellRequest.name ==='iPhone XS' ? "images/iphone_xs.png" :
                                    sellRequest.name ==='iPhone XR' ? "images/iphone_xr.png" :
                                    sellRequest.name ==='iPhone 8 PLUS' ? "images/iphone_8_plus.png" :
                                    sellRequest.name ==='iPhone 8' ? "images/iphone_8.png" :
                                    sellRequest.name ==='iPhone 6 Plus' ? "images/iphone_6_plus.png" :
                                    sellRequest.name ==='iPhone 6' ? "images/iphone_6.png" :
                                    sellRequest.name ==='iPhone 6S Plus' ? "images/iphone_6s_plus.png" :
                                    sellRequest.name ==='iPhone 6S' ? "images/iphone_6s.png" :
                                    sellRequest.name ==='iPhone SE' ? "images/iphone_se.png" :
                                    sellRequest.name ==='iPhone X' ? "images/X.png" :
                                    null
                                }
                                alt="5"
                                className="h-full m-auto object-cover"
                            />
                        </div>
                        <div className="whitespace-normal md:text-lg text-sm">{sellRequest.name && sellRequest.name}</div>
                        <div className="whitespace-normal md:text-sm text-xs">{sellRequest.carrier ? sellRequest.carrier : 'Unlocked'} | {sellRequest.storageSize}</div>
                        <div className="mt-2">
                            <p className="text-xs whitespace-normal">Unit Price</p>
                            <p className="md:text-xl text-lg font-bold whitespace-normal">{sellRequest.price && `$${formatPrice(sellRequest.price)}`}</p>
                        </div>
                        <div className="text-xs whitespace-normal">1500 Available</div>
                        <div className="xl:px-8 px-2">
                            <button className="px-1 bg-blue-600 py-2 rounded w-full font-bold mt-4 text-xs md:text-sm">BUY</button>
                        </div>
                    </div>
                ))
            }

        </div>
        <div className="my-4 md:pl-8 md:pr-16">
            <Paginate
                totalData={sellRequests.count && sellRequests.count}
                perPage={15}
                handlePageChange={handlePageChange}
                activePage={sellRequests.currentPage && sellRequests.currentPage}
                dataCount={sellRequests.totalPages && sellRequests.totalPages}
            />
        </div>
    </div>
)

export default Products;
