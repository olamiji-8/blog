import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './Pages/Blog';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' exact element ={<Home/>}/>
        <Route path='/blog/:id' element ={<Blog/>}/>
      </Routes>
      
     </div>
  )
}

export default App;