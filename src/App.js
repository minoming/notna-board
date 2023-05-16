import React, {useState, useEffect} from 'react'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {getData} from './service/homeService'
import {getDatas} from './service/dataService'
import Home from './view/Home'

function App() {
  const {totalFertilityRate} = useSelector((state) => state.home)
  const dispatch = useDispatch()

  const handle = () => {
    dispatch(getData())
    getDatas()
  }

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
