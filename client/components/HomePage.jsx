import React, { Component } from 'react';
import SideNav from './SideNav';
import Products from './Products'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'All',
      open: false
    }
  }

  onToggleSideNav = () => {
    this.setState(() => ({
      open: !this.state.open
    }))
  }

  render() {
    const { active, open } = this.state;
    return (
      <div className="bg-gray-900 min-h-screen">

        <section className="md:flex md:px-16 px-8">
          <div className="flex-1 md:pr-20 xl:pr-48">
            <div className="text-white text-2xl lg:text-3xl xl:text-5xl font-bold pt-6 text-center md:text-left">SHOP OUR LATEST AVAILABLE STOCK HERE</div>
            <div className="flex my-8 md:my-0 md:mt-8">
              <div className="flex-1 mr-4">
                <input
                  className="p-2 rounded w-full text-xs md:text-sm"
                  type="text"
                  placeholder="Enter Search Term (e.g iPhone x, 128GB or A1)"
                />
              </div>
              <div className="flex-initial">
                <button className="flex justify-center items-center px-1 bg-blue-600 py-2 rounded w-full h-full px-4 xl:px-6">
                  <p className="text-xs md:text-sm text-white font-medium">
                    Search
                  </p>
                  <i
                    className="fa fa-long-arrow-right ml-2 text-white text-xs md:text-sm"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="images/device.png" className="w-full" alt="device" />
          </div>
        </section>


        <section className="relative md:static md:mt-24 mt-12">
          <div onClick={() => this.onToggleSideNav()} className="ml-4 md:hidden absolute cursor-pointer w-10 h-10 bg-gray-800 text-white text-center rounded-full flex items-center justify-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </div>

          <div className="md:flex">
            <div className={`z-50 absolute md:static flex-initial w-2/3 md:w-1/4 xl:w-1/6 bg-gray-800 min-h-screen pt-2 pb-16 px-8 text-white md:mr-10 md:block ${!open ? 'sidebar' : 'toggled'}`}>
              <SideNav
                active={active}
              />
            </div>

            <div onClick={() => this.onToggleSideNav()} className={`overlay ${!open ? 'hidden' : 'block'}`} role="button" tabindex="0" aria-label="overlay"></div>


            <div className="flex-1 pt-10 md:pt-0">
              <Products />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
