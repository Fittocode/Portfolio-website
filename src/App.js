import { React, useState } from 'react'
// Global Style
import GlobalStyle from './components/GlobalStyle'
import "./styles.css";
import "./styles/app.scss"
// import pages
import AboutSection from './components/AboutSection'
import ContactMe from './pages/ContactMe'
import Projects from './pages/Projects'

// Import navbar
import { Navbar } from './components/nav/Navbar';
// Router
import { Switch, Route, useLocation } from 'react-router-dom'
// import animate
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  const [navStatus, setNavStatus] = useState(0)
  console.log(navStatus)
  return (
    <div className="App" >
      <GlobalStyle navStatus={navStatus} />
      <Navbar navStatus={navStatus} setNavStatus={setNavStatus} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutSection />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
