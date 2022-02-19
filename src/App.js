import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Nav from './Components/Nav';
import Table from './Components/Table';
import Topwinners from './Components/Topwinners';


const url = `https://api.nobelprize.org/v1/prize.json`
function App() {
  const [Data, setData] = useState([])
  const [Year, setYear] = useState('All')
  const [Category, setCategory] = useState('All')
  const [Toogle,setToggle] = useState(false)

  
  useEffect(() => {
    getData()
  }, [Year])

  const getData = async() =>{
    try {
      let data = await axios.get(url)
      data = data.data.prizes.filter((item => item.year >= 1900 && item.year <= 2018))
      setData(data) 
    } catch (error) {
      console.log(error);
    } 
  }
  if(Toogle){
    return(<div>
      <Topwinners Data = {Data} setToggle = {setToggle}/>
      </div>)
  }

  return (
    <div className='container'>
      <Nav setYear = {setYear} setCategory ={setCategory} setToggle={setToggle}/>
      <br/>
       <Table Data = {Data}  Year = {Year} Category = {Category} />
    </div>
  )
}

export default App
