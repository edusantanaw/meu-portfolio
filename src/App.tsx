import ContactsMenu from "./layout/ContactsMenu"
import { Nav } from "./layout/Nav"
import About from "./pages/About/About"
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"
import Tecnologies from "./pages/skills/Tecnologies"
import { GlobalStyle } from "./styles/Global"


function App() {

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <ContactsMenu />
      <Home />
      <About />
      <Projects />
      <Tecnologies />
    </div>
  )
}

export default App
