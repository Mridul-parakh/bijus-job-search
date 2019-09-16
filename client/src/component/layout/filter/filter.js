import React, { Component } from 'react';
import {connect} from 'react-redux';
import Spinner from '../../Spinner/spinner';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Filterlist from './filterlist'
//import {withRouter} from 'react-router-dom';

class filter extends Component {
    constructor(props){
		super(props);
		this.state={
			load:[],
			loading:false
		}
	}
    componentDidMount(){
        axios.get('http://localhost:5000/')
		.then(datass=>{
			const newdata=datass.data;
			//console.log(newdata);
            const detail=this.props.detail.detail;
            const newfilter=newdata.map((filter,key)=>{
                var arr1 = filter.skills.replace(/ /g,'').toLowerCase().split(',');
               // console.log(detail);
               //return filter;
                // if(Object.entries(detail).length === 0){

                //     return filter;
                // }
                //for(var i=0;i<arr1.length;i++)

               
            //     if(arr1[0]=="cassandra")
            //    // console.log(arr1[0]);
            //     return filter;
            if(detail.skills!="")
               {
                var arr2= detail.skills.replace(/ /g,'').toLowerCase().split(',');
                for(var i=0;i<arr1.length;i++){
                    for(var j=0;j<arr2.length;j++){
                        if(arr1[i]==arr2[j]){
                            return filter;
                        }
                    }
                }
               }
                var ex=filter.experience.split('');
                var fil="";
                if(ex[1]!='-'){
                    fil=ex[0]+ex[1];
                }
                 if(parseInt(detail.experience)>=parseInt(fil)&&filter.experience.length!=0){
                     return filter;
                 }

                 var loc1=detail.location.replace(/ /g,'').toLowerCase();
                 var loc=filter.location.replace(/ /g,'').toLowerCase();
                 if(loc1==loc){
                     return filter;
                 } 
                // if(arr1=="cassandra"){
                //     return filter;
                // }


            })
            console.log(newfilter);
			this.setState({load:newfilter,loading:true});

			
		})
    }
    render() {
        let dom;
        
		if(this.state.loading){
            //console.log(this.state.load);
			dom=this.state.load.map((data,key)=>{
				if(data!=undefined){
                    return <Filterlist key={key} title={data.title} apply={data.applylink}
                    skills={data.skills}
				location={data.location}
				name={data.companyname}
				experience={data.experience}
				/>
                }
			//    return <div key={key}>hh</div>
		   });
		}
		else{
			dom=<div>
				<h1>Loading...! Please wait!</h1>
				<Spinner/>
			</div>
		}
        // const detail=this.props.detail.detail;
        // console.log(detail);
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
                  <span className="subheading"><h4>Filtered Jobs</h4></span>
                
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

const mapStateToProps=state=>({
	detail:state.details
  })
export default connect(mapStateToProps,{})(filter);
