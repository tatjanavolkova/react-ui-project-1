import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModalContext from "./context/ModelContext";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home/Home";
import AllPosts from "./pages/AllPosts/AllPosts";
import CreatePost from "./pages/CreatePost/CreatePost";
import NotFound from "./pages/NotFound/NotFound";
import Nav from "./components/Nav/Nav";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer/Footer"; 

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <ModalContext.Provider value={{ isOpen, setIsOpen }}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/all-posts" element={<AllPosts />} />
            <Route exact path="/create" element={<CreatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          {isOpen && <Auth />}
        </BrowserRouter>
      </ModalContext.Provider>
    </>
  );
};

export default App; 