import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';


class IndexPage extends Component {
	// static async getInitialProps(context) {
		static getInitialProps(context) {
		console.log(context);
		  const promise = new Promise((resolve, reject) => {
		  	 setTimeout(() => {
		  	 	resolve({appName: 'Super App'});
                
		  	 }, 1000);

		  });
		  // promise.then();

		// return{appName: 'Super App'};
		return promise;

	}


    render () {
    	return (

    		 <div>
     <h1>The Main Page of {this.props.appName}</h1>
     <p>Go To  {""} 
       <Link href="/auth">
        <a>Auth</a>
        </Link>
        </p>
     <button onClick={() => Router.push('/auth')}> Go To Auth</button>

     </div>  

    		);
    }
 }

export default IndexPage;
