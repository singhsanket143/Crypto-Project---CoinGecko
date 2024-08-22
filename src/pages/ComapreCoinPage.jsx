import React from 'react'
import { useLocation } from 'react-router-dom'
import CompareTable from '../components/ComapreTable.jsx/CompareTable';

function ComapreCoinPage() {

const {state} = useLocation();

  return (
   <CompareTable coinIDs={state}/>
  )
}

export default ComapreCoinPage
