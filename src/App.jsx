import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { UserDetails } from "./components/UserDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { CategoryDetails } from "./components/CategoryDetails";

function App() {
  return (
    <>
    <div className="w-screen h-screen bg-zinc-100 flex  overflow-x-hidden">
      <Routes>
        <Route path="/testing-Project/" element={<Home ></Home>}></Route>
        <Route path="/testing-Project/details/:id" element={<UserDetails ></UserDetails>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
