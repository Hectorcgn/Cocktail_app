import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/shared/Footer/Footer";
import Home from "./components/pages/Home";
import Header from "./components/shared/Header/Header";
import DrinkList from "./components/pages/DrinkList/DrinkList";
import DrinkDetail from "./components/pages/DrinkDetail/DrinkDetail";
import AddDrink from "./components/pages/AddDrink/AddDrink";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinklist/:name" element={<DrinkList />} />
        <Route path="/drinklist/details/:id" element={<DrinkDetail />} />
        <Route path='/adddrink' element={<AddDrink/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
