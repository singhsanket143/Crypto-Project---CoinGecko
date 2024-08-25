import React from 'react'
import { useLocation } from 'react-router-dom'
import CompareTable from '../components/ComapreTable.jsx/CompareTable';
import ComapreChart from '../components/ComapreTable.jsx/ComapreChart';

function ComapreCoinPage() {

const {state} = useLocation();

  return (
    <>
      <CompareTable coinIDs={state}/>
      <ComapreChart coinIds={state}/>
    </>
   
  )
}

export default ComapreCoinPage
