import ContactsMenu from "./layout/ContactsMenu"
import { Nav } from "./layout/Nav"
import Home from "./pages/home/Home"
import { GlobalStyle } from "./styles/Global"


function App() {

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <ContactsMenu />
      <Home />
    </div>
  )
}

export default App
