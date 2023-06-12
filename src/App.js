import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetsup from "./pages/NewMeetsup";
import Favourite from "./pages/Favourite";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetups" element={<NewMeetsup />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </Layout>
  );
}
export default App;
