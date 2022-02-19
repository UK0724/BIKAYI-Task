import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { val } from '../Data/years'
import { Form } from 'react-bootstrap'
import { Category } from '../Data/Catagory'

function Nav({setYear,setCategory,setToggle}) {

    let handlechange = (e) =>{
        setYear(prev => prev = e.target.value)
      }
    let handleCatagory = (e) =>{
        setCategory(prev => prev = e.target.value)
      }
    return (
        <Navbar bg="primary" variant="dark">
            <Container fluid>
            <Navbar.Brand href="">Nobel Prize Winners</Navbar.Brand>
            <button style = {{backgroundColor:"white"}} className='btn' onClick={() => setToggle(prev => !prev)}>Topwinners</button>
            <Form className="d-flex">
                <select
                    style={{
                        width: '150px',
                        height: '40px',
                    }}
                    className="m-10"
                    onChange={handlechange}>
                    {
                        val.map((item, idx) => {
                            return <option key={idx} value={item}>{item}</option>
                        })
                    }
                    </select>
                <select
                    style={{
                        width: '150px',
                        height: '40px',
                    }}
                    onChange={handleCatagory}>
                    {
                        Category.map((item, idx) => {
                            return <option key={idx} value={item}>{item}</option>
                        })
                    }
                    </select>
                    </Form>
                    </Container>
        </Navbar>
    )
}

export default Nav