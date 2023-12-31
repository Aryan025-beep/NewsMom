import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Navbar/>
            
          </div>
          <Routes>
          <Route exact path="/about" element={<News  pageSize={5} country='in' category='general' />}/>
          </Routes>
          <Routes>
          <Route exact path="/" element={<News  pageSize={5} country='in' category='general' />}/>
          </Routes>
          <Routes>
          <Route exact path="/business" element={<News  pageSize={5} country='in' category='business' />}/>
          </Routes>
          <Routes>
          <Route exact path="entertainment" element={<News  pageSize={5} country='in' category='entertainment' />}/>
          </Routes>
          <Routes>
          <Route exact path="/general" element={<News  pageSize={5} country='in' category='general' />}/>
          </Routes>
          <Routes>
          <Route exact path="/health" element={<News  pageSize={5} country='in' category='health' />}/>
          </Routes>
          <Routes>
          <Route exact path="/science" element={<News  pageSize={5} country='in' category='science' />}/>
          </Routes>        
          <Routes>
          <Route exact path="/sports" element={<News  pageSize={5} country='in' category='sports' />}/>
          </Routes>
          <Routes>
          <Route exact path="/technology" element={<News  pageSize={5} country='in' category='technology' />}/>
          </Routes>
      </BrowserRouter>
    )
  }
}

