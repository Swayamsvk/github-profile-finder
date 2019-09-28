import React,{Component} from 'react';


class Content extends Component{

    render(){
    return (
        
        <form onSubmit={this.props.onchange}>
        <input type="text" name="newName" placeholder="search here"  />
        
        <button>Search</button>
        </form>
        
    );
   }
  }
  
  export default Content;


  