import React from 'react';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const SideNav = ({ active, onChangeStorageSize, storageSize, onNavigate, onLoadiPhones, loadingBtn, onFilterPrice, value}) => (
    <div>
        <div>
            <div className="text-sm md:text-xl mb-2 mt-4">Categories</div>
            <div>
                <div className="flex items-center">
                    <div onClick={() => onNavigate('All')} className={`flex-1 mb-2 hover:bg-gray-600 cursor-pointer p-2  text-xs md:text-base ${active === 'All' && 'bg-gray-600 border-l-4 border-gray-700'}`}>All </div>
                    <div className="flex-initial cursor-pointer">
                        <i
                            className="fa fa-download ml-2 text-white text-xs md:text-sm"
                            aria-hidden="true"
                            title="Load All"
                        ></i>
                    </div>
                </div>
                <div className="flex items-center">
                    <div onClick={() => onNavigate('iPhone')} className={`flex-1 mb-2 hover:bg-gray-600 cursor-pointer p-2  text-xs md:text-base ${active === 'iPhone' && 'bg-gray-600 border-l-4 border-gray-700'}`}>iPhone </div>
                    <div className="flex-initial cursor-pointer">
                        {
                            loadingBtn ?
                                <i className="fa fa-spinner fa-pulse ml-2 text-white text-xs md:text-sm"></i> :
                                <i
                                    onClick={onLoadiPhones}
                                    className="fa fa-download ml-2 text-white text-xs md:text-sm"
                                    aria-hidden="true"
                                    title="Load iPhones"
                                ></i>

                        }

                    </div>
                </div>
                <div className="flex items-center">
                    <div onClick={() => onNavigate('Samsung')} className={`flex-1 mb-2 hover:bg-gray-600 cursor-pointer p-2  text-xs md:text-base ${active === 'Samsung' && 'bg-gray-600 border-l-4 border-gray-700'}`}>Samsung </div>
                    <div className="flex-initial cursor-pointer">
                        <i
                            className="fa fa-download ml-2 text-white text-xs md:text-sm"
                            aria-hidden="true"
                            title="Load Samsung"
                        ></i>
                    </div>
                </div>
                <div className="flex items-center">
                    <div onClick={() => onNavigate('iPad')} className={`flex-1 mb-2 hover:bg-gray-600 cursor-pointer p-2  text-xs md:text-base ${active === 'iPad' && 'bg-gray-600 border-l-4 border-gray-700'}`}>iPad </div>
                    <div className="flex-initial cursor-pointer">
                        <i
                            className="fa fa-download ml-2 text-white text-xs md:text-sm"
                            aria-hidden="true"
                            title="Load iPad"
                        ></i>
                    </div>
                </div>
                <div className="flex items-center">
                    <div onClick={() => onNavigate('MacBook')} className={`flex-1 mb-2 hover:bg-gray-600 cursor-pointer p-2  text-xs md:text-base ${active === 'MacBook' && 'bg-gray-600 border-l-4 border-gray-700'}`}>MacBook </div>
                    <div className="flex-initial cursor-pointer">
                        <i
                            className="fa fa-download ml-2 text-white text-xs md:text-sm"
                            aria-hidden="true"
                            title="Load MacBook"
                        ></i>
                    </div>
                </div>
                <div className="flex items-center">
                    <div onClick={() => onNavigate('AirPods')} className={`flex-1 mb-2 hover:bg-gray-600 cursor-pointer p-2  text-xs md:text-base ${active === 'AirPods' && 'bg-gray-600 border-l-4 border-gray-700'}`}>AirPods </div>
                    <div className="flex-initial cursor-pointer">
                        <i
                            className="fa fa-download ml-2 text-white text-xs md:text-sm"
                            aria-hidden="true"
                            title="Load AirPods"
                        ></i>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className="text-sm md:text-xl mb-2 mt-8">Price Filter</div>
            <div className="mt-8">
                <Range
                    min={0}
                    max={5000}
                    defaultValue={[0, 5000]}
                    tipFormatter={value => `$${value}`}
                    onChange={onFilterPrice}
                />
            </div>
            <div className="mt-8">
                    <div className="bg-white rounded p-2 mb-1 text-black text-xs md:text-base">Min: {value[0]}</div>
                <div className="text-gray-700 text-center">|</div>
                <div className="bg-white rounded p-2 mt-1 text-black text-xs md:text-base">Max: {value[1]}</div>
            </div>
        </div>

        <div>
            <div className="text-sm md:text-xl mb-2 mt-8">Storage</div>
            <div>
                <div className="checkbox-item pl-2">
                    <input
                        type="radio"
                        id="32GB"
                        name="storageSize"
                        value="32GB"
                        checked={storageSize === '32GB'}
                        onChange={onChangeStorageSize}
                    />
                    <label
                        htmlFor="32GB"
                        className="text-xs md:text-sm font-semibold"
                    >
                        32GB
                </label>
                </div>
                <div className="checkbox-item pl-2">
                    <input
                        type="radio"
                        id="64GB"
                        name="storageSize"
                        value="64GB"
                        checked={storageSize === '64GB'}
                        onChange={onChangeStorageSize}
                    />
                    <label
                        htmlFor="64GB"
                        className="text-xs md:text-sm font-semibold"
                    >
                        64GB
                </label>
                </div>
                <div className="checkbox-item pl-2">
                    <input
                        type="radio"
                        id="128GB"
                        name="storageSize"
                        value="128GB"
                        checked={storageSize === '128GB'}
                        onChange={onChangeStorageSize}
                    />
                    <label
                        htmlFor="128GB"
                        className="text-xs md:text-sm  font-semibold"
                    >
                        128GB
                </label>
                </div>
                <div className="checkbox-item pl-2">
                    <input
                        type="radio"
                        id="256GB"
                        name="storageSize"
                        value="256GB"
                        checked={storageSize === '256GB'}
                        onChange={onChangeStorageSize}
                    />
                    <label
                        htmlFor="256GB"
                        className="text-xs md:text-sm  font-semibold"
                    >
                        256GB
                </label>
                </div>
            </div>
        </div>
    </div>
)

export default SideNav;