import ContactsMenu from "./layout/ContactsMenu"
import Footer from "./layout/Footer"
import { Nav } from "./layout/Nav"
import About from "./pages/About/About"
import Contactar from "./pages/contacts/Contactar"
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"
import Tecnologies from "./pages/skills/Tecnologies"
import { GlobalStyle } from "./styles/Global"


function App() {

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Home />
      <About />
      <Projects />
      <Tecnologies />
      <Contactar />
      <ContactsMenu />
      <Footer />
    </div>
  )
}

export default App
