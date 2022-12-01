
import { ThemeContextProvider } from "./context/ThemeContext";
import { Home } from "./pages/Home";


function App() {

  return (<>
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  </>);
}

export default App;
