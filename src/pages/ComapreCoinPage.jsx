import React from 'react'
import { useLocation } from 'react-router-dom'
import CompareTable from '../components/ComapreTable.jsx/CompareTable';
import ComapreChart from '../components/ComapreTable.jsx/ComapreChartContainer';
import ComapreChartContainer from '../components/ComapreTable.jsx/ComapreChartContainer';

function ComapreCoinPage() {

const {state} = useLocation();

  return (
    <>
      <CompareTable coinIDs={state}/>
      <ComapreChartContainer coinIds={state}/>
    </>
   
  )
}

export default ComapreCoinPage
