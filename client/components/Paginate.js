import React, { Component } from 'react';
import Pagination from "react-js-pagination";

class Paginate extends Component {

    render() {
        const {activePage, perPage, totalData, handlePageChange } = this.props;
        return (
            <div className="block md:flex item-center">
                <div className="flex-auto text-center md:text-left mb-4 md:mb-0">
                    <div className="text-gray-600 text-sm">Showing {this.props.activePage} to {this.props.dataCount} of {this.props.totalData} entries</div>
                </div>
                <div className="md:flex-initial flex justify-center">
                    <div className="md:px-30% lg:px-40% xl:px-40% text-sm">
                        <Pagination
                            hideFirstLastPages
                            prevPageText={<div>Previous</div>}
                            nextPageText={<div>Next</div>}
                            pageRangeDisplayed={5}
                            activePage={Number(activePage)}
                            itemsCountPerPage={perPage}
                            totalItemsCount={totalData}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default Paginate;