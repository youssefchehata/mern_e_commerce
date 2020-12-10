import React from "react";
import Header from './components/Header'
import Footer from './components/Footer';

const App =({children})=>{
  
    return (
      <>
        <Header />
        <main className='py-3'>
        <div className="content ">
        {children}
        </div>
        </main>

        <Footer />
      </>
    );
  }


export default App;