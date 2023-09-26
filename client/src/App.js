import React from "react";
import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ErrorPage from "./components/pages/ErrorPage";
import styled from "styled-components";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import AccessoriesPage from "./components/pages/AccessoriesPage";
import ElecronicPage from "./components/pages/ElecronicPage";
import ClothingPage from "./components/pages/ClothingPage";
import FurniturePage from "./components/pages/FurniturePage";
import JewelryPage from "./components/pages/JewelryPage";
const Container = styled.div`
width: 1200px;
margin: 0 auto;
padding: 3rem 0;
`;

export default function App() {
  return (
    <Router>
      <Header />

      <Container>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/sign" element={<SignUpPage />}></Route>
          <Route path="/accessories" element={<AccessoriesPage />}></Route>
          <Route path="/electronic" element={<ElecronicPage />}></Route>
          <Route path="/clothing" element={<ClothingPage />}></Route>
          <Route path="/furniture" element={<FurniturePage />}></Route>
          <Route path="/jewelry" element={<JewelryPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}
