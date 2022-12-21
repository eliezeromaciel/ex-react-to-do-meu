  import { GlobalStyles } from "./styles/global";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { Home } from "./pages/Home";

  function App() {
    return (
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>

          <GlobalStyles/>
          
        </BrowserRouter>
    );
  }
  export default App;
