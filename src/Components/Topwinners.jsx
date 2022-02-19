import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'

var people;
function Topwinners({Data,setToggle}) {
  let getVal = () =>{
      let val = []
      people = []
      Data.map(item => item.laureates).map(item =>{
        return (item ?
        item.map((item,idx) =>{
          return val.push(`${item.firstname} ${item.surname}`)
      })
      : null)
    })
    let frequency = {}
    for(let i of val){
        frequency[i] ? frequency[i] += 1 : frequency[i] = 1
    }
    for(let i in frequency){
        if(frequency[i] > 1){
            let name = i
            let times = frequency[i]
            let val = {name,times}
            people.push(val)
        }
    }
    people = people.sort((a,b) =>b.times - a.times)
  }
  getVal()
  return (
    <div className='container'>
        <ReactBootStrap.Table  striped bordered hover className='table table-responsive'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Won</th>
                </tr>
            </thead>
            <tbody>
            {people.map((item,idx) =>{
                return<tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.times}</td>
                </tr>
            })}
            </tbody>
        </ReactBootStrap.Table>
        <button className='btn ' style={{backgroundColor:'skyblue'}} onClick={() => setToggle(prev => !prev)}>Go Back</button>
    </div>
  )
}

export default Topwinners