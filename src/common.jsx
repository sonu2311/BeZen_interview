import {Routes, Route, HashRouter} from "react-router-dom"
import React from 'react';
import { Home } from './home';

function MainFunc() {
  return (
    <HashRouter>
      <Routes>
        <Route >
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="*" element={<h1>Invalid</h1>} />
        </Route>
      </Routes>
    </HashRouter>);
}

export default MainFunc;
