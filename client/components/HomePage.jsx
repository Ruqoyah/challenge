import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRequests, loadiPhones } from '../actions/requestActions';
import SideNav from './SideNav';
import Products from './Products';
import { toast, ToastContainer } from 'react-toastify';
import { debounce } from "lodash";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'All',
      open: false,
      sellRequests: [],
      activePage: 1,
      storageSize: '32GB',
      value: [0, 5000]
    }
  }

  componentDidMount() {
    this.setState(() => {
      loading: true
    })
    const { activePage, storageSize, value } = this.state;
    this.props.actions.getRequests('sell', activePage, storageSize, null, null, value[0], value[1])
      .then(() => {
        const { sellRequests, requestError } = this.props
        this.setState(() => ({
          loading: false,
          sellRequests,
          requestError
        }))
      })
  }

  onChangeSerch = ({ target }) => {
    this.setState(() => ({ criteria: target.value }), () => {
      if(!this.state.criteria) {
        const { activePage, storageSize, value } = this.state;
        this.props.actions.getRequests('sell', activePage, storageSize, null, null, value[0], value[1])
        .then(() => {
          const { sellRequests, requestError } = this.props
          this.setState(() => ({
            loading: false,
            sellRequests,
            requestError
          }))
        })
      }
    })
  }

  handleSearch = () => {
    const searchValue = this.state.criteria.split(",")
    this.setState(() => {
      loading: true
    })
    const { activePage, value } = this.state;
    if (searchValue.length === 1) {
      this.props.actions.getRequests('sell', activePage, null, null, searchValue[0], value[0], value[1])
        .then(() => {
          const { sellRequests, requestError } = this.props
          this.setState(() => ({
            loading: false,
            sellRequests,
            requestError
          }))
        })
    } 
    else if(searchValue.length === 2) {
      this.props.actions.getRequests('sell', activePage, null, searchValue[0], searchValue[1], value[0], value[1])
        .then(() => {
          const { sellRequests, requestError } = this.props
          this.setState(() => ({
            loading: false,
            sellRequests,
            requestError
          }))
        })
    }
    else {
      this.props.actions.getRequests('sell', activePage, searchValue[2], searchValue[0], searchValue[1], value[0], value[1])
        .then(() => {
          const { sellRequests, requestError } = this.props
          this.setState(() => ({
            loading: false,
            sellRequests,
            requestError
          }))
        })
    }
  }

  onNavigate = (value) => {
    this.setState(() => ({
      active: value
    }))
  }

  onToggleSideNav = () => {
    this.setState(() => ({
      open: !this.state.open
    }))
  }

  handlePageChange = (pageNumber) => {
    this.setState(
      (prev) => ({
        loading: true,
        activePage: pageNumber,
      }),
      () => {
        const { activePage, storageSize, value } = this.state;
        this.props.actions.getRequests('sell', activePage, storageSize, null, null, value[0], value[1])
          .then(() => {
            const { sellRequests, requestError } = this.props
            this.setState(() => ({
              loading: false,
              sellRequests,
              requestError
            }))
          })
      }
    );
  }

  onChangeStorageSize = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
      loading: true
    }), () => {
      const { activePage, storageSize, open, value } = this.state;
      this.props.actions.getRequests('sell', activePage, storageSize, null, null, value[0], value[1])
        .then(() => {
          const { sellRequests, requestError } = this.props
          this.setState(() => ({
            loading: false,
            sellRequests,
            requestError
          }), () => {
            if (open) {
              this.onToggleSideNav()
            }
          })
        })
    })
  }

  onFilterPrice = (value) => {
    this.setState(() => ({
      value
    }), () => {
      this.setState(() => {
        loading: true
      })
      const { activePage, storageSize, value } = this.state;
      this.props.actions.getRequests('sell', activePage, storageSize, null, null, value[0], value[1])
        .then(() => {
          const { sellRequests, requestError } = this.props
          this.setState(() => ({
            loading: false,
            sellRequests,
            requestError
          }))
        })
    })
  }

  onLoadiPhones = () => {
    this.setState(() => ({
      loadingBtn: true
    }))
    this.props.actions.loadiPhones()
      .then(() => {
        const { loadiPhoneRes, loadiPhoneError } = this.props;
        this.setState(() => ({
          loadingBtn: false
        }))
        if (loadiPhoneRes) {
          this.setState(() => {
            loading: true
          })
          const { activePage, storageSize, value } = this.state;
          this.props.actions.getRequests('sell', activePage, storageSize, null, null, value[0], value[1])
            .then(() => {
              const { sellRequests, requestError } = this.props
              this.setState(() => ({
                loading: false,
                sellRequests,
                requestError
              }))
              toast(<div>{loadiPhoneRes}</div>, {
                position: toast.POSITION.BOTTOM_LEFT,
                autoClose: false,
                className: "custom-toast"
              });
            })
        } else {
          toast(<div>{loadiPhoneError}</div>, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: false,
            className: "custom-toast custom-toast-error"
          });
        }

      })
  }


  render() {
    const { active, open, sellRequests, loading, storageSize, loadingBtn, value } = this.state;
    return (
      <div className="bg-gray-900 min-h-screen">

        <section className="md:flex md:px-16 px-8">
          <div className="flex-1 md:pr-20 xl:pr-48">
            <div className="text-white text-2xl lg:text-3xl xl:text-5xl font-bold pt-6 text-center md:text-left">SHOP OUR LATEST AVAILABLE STOCK HERE</div>
            <div className="flex my-8 md:my-0 md:mt-8">
              <div className="flex-1 mr-4">
                <input
                  onChange={this.onChangeSerch}
                  className="p-2 rounded w-full text-xs md:text-sm"
                  type="text"
                  placeholder="Enter Search Term (e.g iPhone x, 128GB or A1)"
                />
              </div>
              <div className="flex-initial">
                <button onClick={this.handleSearch} className="flex justify-center items-center px-1 bg-blue-600 py-2 rounded w-full h-full px-4 xl:px-6">
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
          <div onClick={() => this.onToggleSideNav()} className={`ml-4 md:hidden absolute cursor-pointer w-10 h-10 bg-gray-800 text-white text-center rounded-full flex items-center justify-center ${open && 'mt-4'}`}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </div>

          <div className="md:flex">
            <div className={`z-50 absolute md:static flex-initial w-2/3 md:w-1/4 xl:w-1/6 bg-gray-800 min-h-full pt-2 pb-16 px-8 text-white md:mr-10 md:block ${!open ? 'sidebar' : 'toggled mt-4'}`}>
              <SideNav
                active={active}
                onChangeStorageSize={this.onChangeStorageSize}
                storageSize={storageSize}
                onNavigate={this.onNavigate}
                onLoadiPhones={this.onLoadiPhones}
                loadingBtn={loadingBtn}
                onFilterPrice={this.onFilterPrice}
                value={value}
              />
            </div>

            <div onClick={() => this.onToggleSideNav()} className={`overlay ${!open ? 'hidden' : 'block'}`} role="button" tabIndex="0" aria-label="overlay"></div>


            <div className="flex-1 pt-10 md:pt-0">
              {
                active === 'All' || active === 'iPhone' ?
                  <Products
                    sellRequests={sellRequests}
                    handlePageChange={this.handlePageChange}
                    loading={loading}
                  /> : null
              }
            </div>
          </div>
        </section>
        <ToastContainer />
      </div>
    );
  }
}

/**
 * @description mapStateToProps - maps state value to props
 *
 * @param  {object} state the store state
 *
 * @return {Object} returns state object
 *
 */
function mapStateToProps(state) {
  return {
    sellRequests: state.request.requests,
    requestError: state.request.requestError,
    loadiPhoneRes: state.request.loadiPhoneRes,
    loadiPhoneError: state.request.loadiPhoneError,
  };
}

/**
 * mapDispatchToProps - maps dispatch to props value
 *
 * @param  {Function} dispatch dispatchs function
 *
 * @return {Object} returns an Object
 *
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getRequests,
      loadiPhones
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
