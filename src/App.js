import React, { useState, useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from './service/homeService'

function App() {
  const { totalFertilityRate } = useSelector((state) => state.home)
  const dispatch = useDispatch()

  const handle = () => {
    dispatch(getData())
  }

  return (
    <>
      <button onClick={handle}>getData</button>
      <div>{totalFertilityRate}</div>;
    </>
  )
}

export default App
