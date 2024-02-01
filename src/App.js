import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Home from './pages/home/Home';
import { useEffect, useState } from 'react';
import Show from './pages/show/Show';
import { useDispatch } from 'react-redux';
import { addShow } from './store/slices/dataSlices';

const App = () => {

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const jsonData = await response.json();
      await dispatch(addShow(jsonData))
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/product' element={<Home />} />
        <Route path='/team' element={<Home />} />
        <Route path='/show/:id' element={<Show />} />
      </Route>
    </Routes>
  )
}

export default App