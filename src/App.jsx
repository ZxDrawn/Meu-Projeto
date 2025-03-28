import "@/App.css";
import Count from "@/components/Count.jsx";
import Message from "@/components/Message.jsx";
import Greeting from "@/components/Geeting.jsx";
import Button from "@/components/Button";
import UserCard from "./components/UserCard";
import ToggleText from "./components/ToggleText";
import Form from "./components/Form";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFoud";
import Products from "./pages/Products";

function App() {
  return (
    // <div id="primeiraDiv">
    //   <Message text="React" text2="React2" />
    //   <Greeting name="João" />
    //   <Greeting name="Maria" />
    //   <Count />
    //   <Button name="Adicionar" />
    //   <UserCard name="Kaiky Vinícius" age={21} />
    //   <ToggleText />
    //   <input type="text" placeholder="Digite alguma coisa" id="input" />
    //   <Form />
    //   <div id="div"></div>
    // </div>
    <>
      <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/products" element= {<Products/>}/>
        <Route path="*" element= {<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
