import React from 'react';
import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

const Content = props =>(
    <form onSubmit={props.onchange}>
    <TextField label="User Input" margin="normal" variant="outlined" type="text" name="newName" >
    
    </TextField>
    
    
    <Button variant="contained" color="primary" type="submit" style={styles.button}>
    Search
    </Button>
    


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

const styles = {
  button: {
      margin:12,
      top:12
  }
}

  
  export default Content;


  