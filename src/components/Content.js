import React from 'react';

const Content = props =>(
    <form onSubmit={props.onchange}>
    <input type="text" name="newName" placeholder="search here"  />
    
    <button>Search</button>
    </form>
)


// class Content extends Component{

//     render(){
//     return (
        
//         <form onSubmit={this.props.onchange}>
//         <input type="text" name="newName" placeholder="search here"  />
        
//         <button>Search</button>
//         </form>
        
//     );
//    }
//   }
  
  export default Content;


  