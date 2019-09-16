import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class expirejoblist extends Component {
    render() {
        return (
            <div className="col-md-6 ">
		            <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
		              <div className="one-third mb-4 mb-md-0">
		                <div className="job-post-item-header align-items-center">
		                	<span className="subadge">Temporary</span>
		                  <h2 className="mr-3 text-black"><Link to="/">{this.props.name}</Link>
						  
						  </h2>
		                </div>
		                <div className="job-post-item-body d-block d-md-flex">
		                  <div className="mr-3"><span className="icon-layers"></span> <Link to="/">Exp: {this.props.experience}</Link></div>
		                  <div><span className="icon-my_location"></span> <span>{this.props.location}</span></div>
		                </div>
		              </div>

		              <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
		              	<div>
			                <Link to="/" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
			                	<span className="icon-heart"></span>
			                </Link>
		                </div>
		                <Link to="/" className="btn btn-primary py-2">Apply Now</Link>
		              </div>
		            </div>
		          </div>
        )
    }
}
