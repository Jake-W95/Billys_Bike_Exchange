import './App.css';

import Header from './componenets/Header/Header';
import Landing from './Pages/Landing/Landing';
import { Services } from './Pages/Services/Services';
import { Contact } from './Pages/Contact/Contact';
import Footer from './componenets/Footer/Footer';
import QuotePage from './Pages/QuotePage.js'

import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react';



function App() {
  const pageRefs = {
    services: useRef(null),
    contact: useRef(null),
  }
  const [refsInitialized, setRefsInitialized] = useState(false)
  useEffect(() => {
    setRefsInitialized(true)
  }, [])
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behaviour: 'smooth' })
  }
  // console.log(pageRefs)
  return (
    <div className="App">
      <Header />
      <main>
        <Landing scrollTo={scrollTo} servicesRef={pageRefs.services} contactRef={pageRefs.contact} />
        {refsInitialized && (

          <>
            <QuotePage int={0} />
            <Services
              pageRef={pageRefs.services} />
            <QuotePage int={1} />
            <Contact
              pageRef={pageRefs.contact}
              fb={BsFacebook}
              ig={BsInstagram} />
          </>
        )}
      </main>
      <Footer fb={BsFacebook} ig={BsInstagram} />
    </div>
  );
}

export default App;
