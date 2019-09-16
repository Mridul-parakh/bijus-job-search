import React, { Component } from 'react'
import axios from 'axios';
import Expirjoblist from './expirejoblist';
import Spinner from './../../Spinner/spinner';
import {Link} from 'react-router-dom';

export default class expirejobs extends Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            load:[],
            date: date,
            loading:false
        };
    }
    componentDidMount(){
		
		axios.get('http://localhost:5000/')
		.then(datass=>{
			const newdata=datass.data;
			
			const newexpire=newdata.map((dat,key)=>{
                if(dat.enddate==""){
                    //return dat;
                }
                else {
                    let s=dat.enddate;
                    if (s.length <= 10) {
                        //var segments = str.split(',');
                        var c=s.trim().split(/[ ,]+/);
                        var i1=parseInt(c[0]);
                        var i2=parseInt(c[1]);
                        var i3=parseInt(c[2]);
                        var arr=["Jan","Feb","Mar","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                        var month=0;
                        for(month=0;month<arr.length;month++){
                            if(i2==arr[month]){
                                break;
                            }
                        }
                        month++;
                        var today = new Date();
                  
                    
                    if (i3<parseInt(today.getFullYear())) {
                        return dat;
                    }
                    
                        if(i3==parseInt(today.getFullYear())){
                            if(month<parseInt(today.getMonth()) + 1){
                                return dat;
                            }
                            if(month==parseInt(today.getMonth()) + 1){
                                if(i1<parseInt(today.getDate())){
                                    return dat;
                                }
                            }
                        }
                        
                    }
                }
            });
            console.log(newexpire);
			this.setState({load:newexpire,loading:true});

			
		})
    }
    render() {
        let dom;
		if(this.state.loading){
			dom=this.state.load.map((data,key)=>{
                if(data!=undefined){
                    return <Expirjoblist key={key} title={data.title} apply={data.applylink}
				location={data.location}
				name={data.companyname}
				experience={data.experience}
                />
                
                }
                else{
                    return "";
                }
				
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
									                <Link to="/" className="btn btn-success" >Check All Jobs</Link>
									              </div>
								              </div>
				              			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 pr-lg-5">
						<div className="row justify-content-center pb-3">
		          <div className="col-md-12 heading-section ">
		          	<span className="subheading"><h4>Recently Expired Jobs</h4></span>
		            
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
