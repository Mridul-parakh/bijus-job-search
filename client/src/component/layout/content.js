import React,{Component} from 'react';
import {Link} from 'react-router-dom';
//import Alljobs from './alljobs/alljobs';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {details} from './../../actions/detailaction';



class Content extends Component {
	constructor(props){
		super(props);
		this.state={
			skills:"",
			experience:'0',
			location:""
		}
	}
	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	submitHandler=(event) =>{
		
	   //  console.log(handle.trim());
	   event.preventDefault();
	   const Detail = {
		 skills: this.state.skills,
		 experience: this.state.experience,
		 location: this.state.location,
	   }
	 
	   // this.props.registeruser(newUser,this.props.history);
	   this.props.details(Detail);
	  
	
   }
	render(){
    return (
        <div>
              <div className="hero-wrap img" style={{backgroundImage: "url(images/bg_1.jpg)"}}>
      <div className="overlay"></div>
      <div className="container">
      	 <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-center">
	        <div className="col-md-10 d-flex align-items-center">
	        	<div className="text text-center pt-5 mt-md-5"> 
	        		<p className="mb-4">Find Job, Employment, and Career Opportunities</p>
	            <h1 className="mb-5">The Eassiest Way to Get Your New Job</h1>
							
							<div className="ftco-search my-md-5">
								<div className="row">
			            <div className="col-md-12 nav-link-wrap">
				            <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
				              <a className="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Find a Job</a>

				              <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Find a Candidate</a>

				            </div>
				          </div>
				          <div className="col-md-12 tab-wrap">
				            
				            <div className="tab-content p-4" id="v-pills-tabContent">

				              <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
				              	<form  className="search-job" onSubmit={(e)=>this.submitHandler(e)} action="/filter">
				              		<div className="row no-gutters">
				              			<div className="col-md mr-md-2">
				              				<div className="form-group">
					              				<div className="form-field">
					              					<div className="icon"><span className="icon-briefcase"></span></div>
									                <input type="text" name="skills" className="form-control" placeholder="eg. Garphic,Web Developer"
													value={this.state.skills}
													onChange={(event) => this.changeHandler(event)}
													/>
									              </div>
								              </div>
				              			</div>
										  
				              			<div className="col-md mr-md-2">
				              				<div className="form-group">
				              					<div className="form-field">
					              					<div className="select-wrap">
							                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
												  <select name="experience"  className="form-control"
												 	value={this.state.experience}
													 onChange={(event) => this.changeHandler(event)} 
												  >
												    <option value="0" defaultValue>0</option>
							                      	<option value="1">1</option>
							                      	<option value="2">2</option>
							                        <option value="3">3</option>
							                        <option value="4">4</option>
													<option value="5">5</option>
							                      	<option value="6">6</option>
							                        <option value="7">7</option>
							                        <option value="8">8</option>
													<option value="9">9</option>
							                      	<option value="10">10</option>
							                        <option value="11">11</option>
							                        <option value="12">12</option>
							                       
							                      </select>
												  
							                    </div>
									              </div>
								              </div>
				              			</div>
				              			<div className="col-md mr-md-2">
				              				<div className="form-group">
				              					<div className="form-field">
					              					<div className="icon"><span className="icon-map-marker"></span></div>
									                <input type="text" className="form-control" placeholder="Location" name="location"
													value={this.state.location}
													onChange={(event) => this.changeHandler(event)}
													/>
									              </div>
								              </div>
				              			</div>
				              			<div className="col-md">
				              				<div className="form-group">
				              					<div className="form-field">
								                	<button type="submit" className="form-control btn btn-primary" onClick={(e)=>this.submitHandler(e)} ><Link className="form-control btn btn-primary" to="/filter">Search</Link></button>
									              </div>
								              </div>
				              			</div>
				              		</div>
				              	</form>
				              </div>

				              <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
				              	<form action="#" className="search-job">
				              		<div className="row">
				              			<div className="col-md">
				              				<div className="form-group">
					              				<div className="form-field">
					              					<div className="icon"><span className="icon-user"></span></div>
									                <input type="text" className="form-control" placeholder="eg. Adam Scott" disabled/>
									              </div>
								              </div>
				              			</div>
				              			<div className="col-md">
				              				<div className="form-group">
				              					<div className="form-field">
					              					<div className="select-wrap">
							                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
							                      <select name="" id="" className="form-control" disabled>
							                      	<option value="">categaory</option>
							                      	<option value="">Full Time</option>
							                        <option value="">Part Time</option>
							                        <option value="">Freelance</option>
							                        <option value="">Internship</option>
							                        <option value="">Temporary</option>
							                      </select>
							                    </div>
									              </div>
								              </div>
				              			</div>
				              			<div className="col-md">
				              				<div className="form-group">
				              					<div className="form-field">
					              					<div className="icon"><span className="icon-map-marker"></span></div>
									                <input type="text" className="form-control" placeholder="Location" disabled/>
									              </div>
								              </div>
				              			</div>
				              			<div className="col-md">
				              				<div className="form-group">
				              					<div className="form-field">
									                <button type="submit" className="form-control btn btn-primary" disabled>Search</button>
									              </div>
								              </div>
				              			</div>
				              		</div>
                                     
				              	</form>

								  
				              </div>
                              </div>
                              
				          </div>
				        </div>
			        </div>
	          </div>
	        </div>
	    	</div>
      </div>
	  
    </div>






		{/* <section className="ftco-section bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 pr-lg-5">
						<div className="row justify-content-center pb-3">
		          <div className="col-md-12 heading-section ">
		          	<span className="subheading">Recently Added Jobs</span>
		            <h2 className="mb-4">Featured Jobs Posts For This Week</h2>
		          </div>
		        </div> */}
						
			
		      {/* </div>
		     
				</div>
			</div>
		</section> */}
        </div>
	)
}
}

const mapStateToProps=state=>({
	detail:state.details
  })


export default connect(mapStateToProps,{details})(withRouter(Content));