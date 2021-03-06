import React from 'react';
import {Link} from "react-router-dom";

export default function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container-fluid px-md-4	">
	      
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
	          <li className="nav-item"><Link to="/" className="nav-link">Browse Jobs</Link></li>
	          <li className="nav-item"><Link to="/" className="nav-link">Canditates</Link></li>
	          <li className="nav-item"><Link to="/" className="nav-link">Blog</Link></li>
	          <li className="nav-item"><Link to="/" className="nav-link">Contact</Link></li>
	          <li className="nav-item cta mr-md-1"><Link to="/" className="nav-link">Post a Job</Link></li>
	          <li className="nav-item cta cta-colored"><Link to="/" className="nav-link">Want a Job</Link></li>

	        </ul>
	      </div>
	    </div>
	  </nav>
        </div>
    )
}
