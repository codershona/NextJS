import React from 'react';
import User from '../../components/User';

const authIndexPage = () => (
     <div>
       <h1>The Auth Index Main Page - {props.appName}</h1>
       <User name="Lissa" age={24} />

     </div>  

);

authIndexPage.getInitialProps = (context) => {
	const promise = new Promise((resolve, reject) => {
		  	 setTimeout(() => {
		  	 	resolve({appName: 'Super App (AUTH)'});
              }, 1000);
      });
		 return promise;

};


export default authIndexPage;