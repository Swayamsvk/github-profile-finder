import React,{useState,useEffect} from 'react';
import Background from "./components/Background";
import Content from "./components/Content";

import './App.css';




  const client_id='8be0411a560aff552d8f';
  const client_secret='e4e62cf2078a216e48199d8f460e233ac239a90a';
 
  const App = () =>{
    const [inputText,setInputText] = useState({
      login:undefined,
      avatar_url:undefined,
      html_url: undefined,
      name: undefined,
      public_repos:undefined,
      public_gists:undefined,
      followers:undefined,
      following:undefined,
      created_at:undefined,
      updated_at:undefined,
    })

    const onchangename = async(event) =>{
      event.preventDefault();

    
    const user=event.target.elements.newName.value;

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
    
    const profile = await profileResponse.json();
    

      setInputText({
      login:profile.login,
      avatar_url:profile.avatar_url,
      html_url: profile.html_url,
      name: profile.name,
      public_repos:profile.public_repos,
      public_gists:profile.public_gists,
      followers:profile.followers,
      following:profile.following,
      created_at:profile.created_at,
      updated_at:profile.updated_at,
      })
    }
    return (
          <div className="App">
          <h1>GitHub Profile viewer</h1>
            
          
          <Content onchange = {onchangename}/>
          <Background 
          login={inputText.login}
          avatar_url={inputText.avatar_url}
          html_url={inputText.html_url}
          name={inputText.name}
          public_repos={inputText.public_repos}
          public_gists={inputText.public_gists}
          followers={inputText.followers}
          following={inputText.following}
          created_at={inputText.created_at}
          updated_at={inputText.updated_at}
          
          />
          </div>
        );

  }




export default App;



// class App extends Component{
   
//   state = {
//     login:undefined,
//     avatar_url:undefined,
//     html_url: undefined,
//     name: undefined,
//     public_repos:undefined,
//     public_gists:undefined,
//     followers:undefined,
//     following:undefined,
//     created_at:undefined,
//     updated_at:undefined,
    
//   }
  

 

//   onchangename = async(event) => {
//     event.preventDefault();

    
//     const user=event.target.elements.newName.value;

//     const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
    
//     const profile = await profileResponse.json();
    

//     this.setState({
//       login:profile.login,
//       avatar_url:profile.avatar_url,
//       html_url: profile.html_url,
//       name: profile.name,
//       public_repos:profile.public_repos,
//       public_gists:profile.public_gists,
//       followers:profile.followers,
//       following:profile.following,
//       created_at:profile.created_at,
//       updated_at:profile.updated_at,
      

//     })

//   }


  

//   render() {

//   return (
//     <div className="App">
//     <h1>GitHub Profile viewer</h1>
      
    
//     <Content onchange = {this.onchangename}/>
//     <Background 
//     login={this.state.login}
//     avatar_url={this.state.avatar_url}
//     html_url={this.state.html_url}
//     name={this.state.name}
//     public_repos={this.state.public_repos}
//     public_gists={this.state.public_gists}
//     followers={this.state.followers}
//     following={this.state.following}
//     created_at={this.state.created_at}
//     updated_at={this.state.updated_at}
    
//     />
//     </div>
//   );
// }
// }

// export default App;







