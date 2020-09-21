import React from 'react'
import Header from './components/header/Header'
import Forms from './components/content/Forms'
import Footer from './components/footer/Footer'




class App extends React.Component {


  render(){


    return(

      <div className="site-content">


        <Header />
        <Forms />
        <Footer />
        
      </div>
    )
  }



}


export default App