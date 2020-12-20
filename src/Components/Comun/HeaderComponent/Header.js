import React, { Component } from 'react'
//import PropTypes from 'prop-types'




export default class Header extends Component {

    render() {
        return (
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                <div className="row align-item-center">
                    <div className="col-md-4">
                        <h4 className="text-light text-uppercase mb-0"> Dashboard</h4>
                    </div>
                    <div className="col-md-5">
                        <form>
                            <div className="input-group">
                                <input type="text"
                                    className="form-control search-input"
                                    placeholder="Buscar..." />
                                <button
                                    type="button"
                                    className="btn btn-light search-button"
                                >
                                    <i className="fas fa-search text-danger"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}