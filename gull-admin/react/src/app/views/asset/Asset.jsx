import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import ReactPaginate from "react-paginate";
import { data } from './data'
import { Link } from "react-router-dom";

class Asset extends Component {
    state = {
        rowsPerPage: 10,
        page: 0
    }
    render() {
        let {
            rowsPerPage,
            page
        } = this.state
        return (
            <div className="row">       
                                     <h3 >Assets List </h3>

               
                <div className="bg-white">
                    <div className="row px-4 mt-3">
                        <div className="col-lg-6 col-sm-12 col-md-6 ">
                            <div className="d-flex align-items-center col-lg-5">
                                <h4 >Assets List </h4>

                            </div>
                        </div>
                        
                        
                        <div className="col-lg-4 col-sm-12 col-md-6 ">
                            <div className="d-flex justify-content-lg-end align-items-center">
                                <div className="mr-1">
                                    <input
                                        type="search"
                                        className="form-control form-control-sm rounded-pill i-Magnifi-Glass1 "
                                        placeholder='Enter keywords ...'                                    // onChange={this.handleSearch}
                                        aria-controls="ul-contact-list"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <button
                                className="btn btn-primary  border-0  btn-rounded"
                                type="submit"
                                style={{ backgroundColor: ' #00CDC2' }}
                            >
                                +Add Another Department
                            </button>
                        </div>
                    </div>

                    <div className="card-body  pt-1">
                        <div className="table-responsive">
                            <table id="ul-contact-list" className="display table w-100">
                                <thead>
                                    <tr style={{ backgroundColor: "#f5f5f5" }}>
                                        <th>Asset ID #</th>
                                       
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Availability</th>
                                        <th>Assigned To</th>
                                        <th>Date Assigned</th>

                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data
                                        .slice(rowsPerPage * page, rowsPerPage * (page + 1))
                                        .map((item, index) => (
                                            <tr key={index}>
                                                <td> {item.AssetID}</td>
                                                <td>{item.Name}</td>
                                                <td>{item.Description}</td>
                                                <td> {item.Availability}</td>
                                                <td>{item.AssignedTo}</td>
                                                <td>{item.DateAssigned}</td>
                                                <td className="d-flex">
                                                    <Link to="/notification/viewNotification">
                                                        <div>
                                                            <i className="i-Eye"></i>
                                                        </div>
                                                    </Link>
                                                    <Link to="/notification/viewNotification">
                                                        <div>
                                                            <img src="/assets/images/Delete.png"></img>
                                                        </div>
                                                    </Link>

                                                </td>
                                            </tr>

                                        )
                                        )}

                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-end mr-lg-4">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={Math.ceil(data.length / rowsPerPage)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination pagination-lg"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                        </div>
                    </div>

                </div >


            </div>
        );
    }
}

export default Asset;
