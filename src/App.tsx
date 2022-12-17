import { Nav } from "./layout/Nav"
import Home from "./pages/home/Home"
import { GlobalStyle } from "./styles/Global"


function App() {

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Home />
    </div>
  )
}

export default App
