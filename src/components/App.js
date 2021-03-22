import React from 'react';
import Header from './Header';
import Home from './Home';
import './App.css';
import Navbar from './Navbar';
import css from './App.module.css';
import Explore from './Explore';
import NewPost from './NewPost';
import Activity from './Activity';
import Profile from './Profile';

class App extends React.Component{
    state = { page: 'Home'
    }
    
    handleNavChange=(page)=>{
      console.log(this.state, 'before')
      this.setState({
        page:page
      })
    }

    render() {
      let pageContent= (
        <div style={{paddingTop:50}}>
          <Home />
        </div>
      );
      if(this.state.page==="Explore"){
        pageContent=(
          <main style={{paddingTop:50}}>
            <div>
              <Explore />
              </div> 
          </main>
        )
      }
      if(this.state.page==="New Post"){
        pageContent=(
          <main style={{paddingTop:50}}>
            <div>
              <NewPost />
            </div>
          </main>
        )
    }
    if(this.state.page==="Activity"){
      pageContent=(
        <main style={{paddingTop:50}}>
          <div>
            <Activity />
          </div>
        </main>
      )
    }
    if(this.state.page==="Profile"){
      pageContent=(
        <main style={{paddingTop:50}}>
          <div>
            <Profile />
          </div>
        </main>
      )
    }
  return (
      <React.Fragment>
       <Header/>
      <main className={css.content}>
       {pageContent}        
      </main>
      <Navbar onNavChange={this.handleNavChange}/>
    </React.Fragment>
  );
}
}

export default App;
