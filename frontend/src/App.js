import React, { Component } from "react";
import Header from './components/Header'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className='py-3'>
        <div className="content ">
        {this.props.children}
        </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;