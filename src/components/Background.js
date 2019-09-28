import React,{Component} from 'react';

import "./Background.css"



class Background extends Component{
    render(){
    return (
      <div className="Background">
       <div>
            {this.props.login&&<p>Git-name: {this.props.login}</p>}
            <p><img src={this.props.avatar_url}alt=""/></p>
            {this.props.login&&<p>Git-account: {this.props.html_url}</p>}
            {this.props.login&&<p>Full Name: {this.props.name}</p>}
            
            {this.props.login&&<p>Repos: {this.props.public_repos}</p>}
            {this.props.login&&<p>Public-gits: {this.props.public_gists}</p>}
            {this.props.login&&<p>Followers: {this.props.followers}</p>}
            {this.props.login&&<p>Following: {this.props.following}</p>}
            {this.props.login&&<p>Creation Date: {this.props.created_at}</p>}
            {this.props.login&&<p>Updation Date: {this.props.updated_at}</p>}
       </div>
      </div>
    );
   }
  }
  
  export default Background;
  