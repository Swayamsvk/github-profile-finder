import React from 'react';
import { List } from '@material-ui/core';


const Background = props => (
  
    <div className="Background">
    <div>
          <List style={styles.background}>
         {props.login&&<p>Git-name: {props.login}</p>}
         <p><img src={props.avatar_url}alt=""/></p>
         {props.login&&<p>Git-account: {props.html_url}</p>}
         {props.login&&<p>Full Name: {props.name}</p>}
         
         {props.login&&<p>Repos: {props.public_repos}</p>}
         {props.login&&<p>Public-gits: {props.public_gists}</p>}
         {props.login&&<p>Followers: {props.followers}</p>}
         {props.login&&<p>Following: {props.following}</p>}
         {props.login&&<p>Creation Date: {props.created_at}</p>}
         {props.login&&<p>Updation Date: {props.updated_at}</p>}
         </List>
    </div>
   </div>
  
)



// class Background extends Component{
//     render(){
//     return (
      // <div className="Background">
      //  <div>
      //       {this.props.login&&<p>Git-name: {this.props.login}</p>}
      //       <p><img src={this.props.avatar_url}alt=""/></p>
      //       {this.props.login&&<p>Git-account: {this.props.html_url}</p>}
      //       {this.props.login&&<p>Full Name: {this.props.name}</p>}
            
      //       {this.props.login&&<p>Repos: {this.props.public_repos}</p>}
      //       {this.props.login&&<p>Public-gits: {this.props.public_gists}</p>}
      //       {this.props.login&&<p>Followers: {this.props.followers}</p>}
      //       {this.props.login&&<p>Following: {this.props.following}</p>}
      //       {this.props.login&&<p>Creation Date: {this.props.created_at}</p>}
      //       {this.props.login&&<p>Updation Date: {this.props.updated_at}</p>}
      //  </div>
      // </div>
//     );
//    }
//   }

const styles = {
      background:{
            color:"blue"
      }
}
  
  export default Background;
  