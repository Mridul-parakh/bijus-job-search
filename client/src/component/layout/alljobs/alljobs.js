import React, { Component } from 'react'
import axios from 'axios';
import Joblist from './alljobslist';
import Spinner from './../../Spinner/spinner';
import {Link} from 'react-router-dom';

class Alljobs extends Component {
	constructor(props){
		super(props);
		this.state={
			load:[],
			loading:false
		}
	}
    componentDidMount(){
		
		axios.get('http://localhost:5000/expire')
		.then(datass=>{
			const newdata=datass.data;
			console.log(newdata);
			
			this.setState({load:newdata,loading:true});

			
		})
    }
    render() {
		let dom;
		if(this.state.loading){
			dom=this.state.load.map((data,key)=>{
				return <Joblist key={key} title={data.title} apply={data.applylink}
				location={data.location}
				name={data.companyname}
				experience={data.experience}
				/>
			   //return <div key={key}>{data.title}</div>
		   });
		}
		else{
			dom=<div>
				<h1>Loading...! Please wait!</h1>
				<Spinner/>
			</div>
		}
     
	
        return (
			<section className="ftco-section bg-light">
				<div className="col-md-3">
				              				<div className="form-group">
				              					<div className="form-field">
									                <Link to="/expirejobs" className="btn btn-danger" >Check Expire Jobs</Link>
									              </div>
								              </div>
				              			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 pr-lg-5">
						<div className="row justify-content-center pb-3">
		          <div className="col-md-12 heading-section ">
		          	<span className="subheading"><h2 className="mb-4">All jobs</h2></span>
		            
		          </div>
		        </div>
           <div className="row">{dom}</div>
		   </div>
		     
				</div>
			</div>
		</section>
        )
    }
}

export default Alljobs;

