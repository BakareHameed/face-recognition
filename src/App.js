import React, {Component} from 'react'
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'
import Rank from './components/rank/Rank'
import './App.css'

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
    }
  }
  // <id>@face-recognition-429912.iam.gserviceaccount.com
  // face-916@face-recognition-429912.iam.gserviceaccount.com

  onInputChange = (event) => {
    console.log(event.target.value)
  }


  onButtonSubmit = () => {
    console.log('click')
  }

   render() {
     return (
       <div className='App'>
         <Navigation/> 
         <Logo/>
         <Rank/>
         <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
       </div>
     )

   }
}

export default App