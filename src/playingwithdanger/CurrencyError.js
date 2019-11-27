import React from 'react'

class CurrencyError extends React.Component {
    
    //1. We will use hasError to conditionally render an error UI, 
    //if true it means an error has occurred and we should display the error UI, 
    //otherwise just display the normal children.

    constructor(props) {
        super(props);
        this.state = {
          hasError: false
        };
      }
    
      //2. Next add the getDerivedStateFromError() method. 
      //In this simple example we will simply set the hasError state to true.

      static getDerivedStateFromError(error) {
        return { hasError: true };
      }

      //3.Finally, in the render method conditionally render an error message 
      //if hasError is true. Otherwise display the children as normal.

      render() {
        if (this.state.hasError) {      
          return (
            <h2>Could not display this currency.</h2>
          );
        }
        return this.props.children;
      }
    }  

export default CurrencyError