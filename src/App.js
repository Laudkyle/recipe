import Categories from "./components/Categories";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Search /> 
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
