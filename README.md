# NextJS

### NextJS APP (Beyond create-react-app)

* NOTES :

###  Understanding Server Side Rendering :

```
   - Next.js is a minimalistic framework for server-rendered React applications ;
   * How SSR Works?
   ANS: Server ----------------> React App Code
                 (Fetch & Render React app)
                   |   |
 (First Page Load) |   | (Return Rendered First Page + React App Bundle)
                   |   | 
              { CLIENT (BROWSER)   }
                  ----> Re-render on Clinet (SPA)

     * Checkout NextJs documentation ;
     
```

### Setting Up my Project :

```
   - At first run : npm init ;
   - npm install --save next react react-dom / npm install next react react-dom;
   - script added intp package.json file ;
   - run : npm run dev and check localhost:3000 in the browser ;

    - git error: [ Solved by running this command : rm .git/index.lock ; Then : git init ; git add ./git commit -m ""] --->
    (Git: fatal: Unable to create '.git/index.lock': File exists.)
    - 

```
