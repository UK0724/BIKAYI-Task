import React from 'react'
import Laureates from './Laureates'
import * as ReactBootStrap from 'react-bootstrap'

function Table({Data,Year,Category}) {
  return (
    <ReactBootStrap.Table  striped bordered hover className='table table-responsive'>
        <thead>
      <tr>
        <th>S.No</th>
        <th>Year</th>
        <th>Category</th>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      {
       Category === 'All' && Year === 'All' ? 
       Data.map((item,idx) =>{
        return <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{item.year}</td>
          <td>   {item.category}</td>
          <td><Laureates item = {item.laureates}/></td>
          </tr>
       })
       :
       Category !== 'All' && Year === 'All'
       ?
       Data.filter(item => item.category === Category)
       .map((item,idx) =>{
        return <tr key={idx}>
          <td>{idx+1}</td>
         <td>{item.year}</td>
          <td>  {item.category}</td>
          <td><Laureates item = {item.laureates}/></td>
          </tr>
       })
       :
       Category !== 'All' && Year !== 'All'
       ?
       Data.filter(item => item.year === Year && item.category === Category)
       .map((item,idx) =>{
        return <tr key={idx}>
          <td>{idx+1}</td>
         <td>{item.year}</td>
          <td>  {item.category}</td>
          <td><Laureates item = {item.laureates}/></td>
          </tr>
       })
       :
       Data.filter(item => item.year === Year)
       .map((item,idx) =>{
        return <tr key={idx}>
          <td>{idx+1}</td>
         <td>{item.year}</td>
          <td>  {item.category}</td>
          <td><Laureates item = {item.laureates}/></td>
          </tr>
       })
      }
      </tbody>
        </ReactBootStrap.Table>
  )
}

export default Table