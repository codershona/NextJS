import React from 'react';
import Link from 'next/link';



const errorPage = () => (
     <div>
     <h1>OOP's Sorry, Something went wrong!</h1>
     <p>Try to <Link href="/auth"><a>going back</a></Link>!</p>
     



     </div>  

);


export default errorPage;
