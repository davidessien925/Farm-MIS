import React from 'react'
import {useState} from 'react'
import './../sass/personnel.scss'
import {Form, Button} from 'react-bootstrap'

function Produce() {
    const [x,setX] = useState(null)
    const [y,setY] = useState(null)
    const [z,setZ] = useState(null)
    const [s,setS] = useState(null)
    const [print,setPrint] = useState(false)

   
    function getX(e) {
        setX(e.target.value)
        setPrint(false)
    }

    function getS() {
        setS(y+z)
        setPrint(false)
    }
    function getY(e) {
        setY(e.target.value)
        setPrint(false)
    }

    function getZ(e) {
        setZ(e.target.value)
        setPrint(false)
    }

    return (
        <div class="customgrid-container" id="bootstrap-overrides">
            <header class='customrow'>
                <div>
                    <a class='brand' href="/"> Farm Management Information System </a>
                </div>
                <div>
                    <a href="#">Logout</a>
                    <a href="#">Exit</a>
                </div>
            </header>
            <main>
                <ul> 
                    Good Eggs:
                        {
                            print?
                            <span>{x}</span>
                            :null
                        } <br/><br/>
                    Bad Eggs: 
                        {
                            print?
                            <span>{y}</span>
                            :null
                        } <br/><br/>
                    Meat in kilos: 
                        {
                            print?
                            <span>{y}</span>
                            :null
                        } <br/><br/>
                </ul>
                <div className="edit"> 
                    <Form.Group className="mb-3">
                        <Form.Label>Input number of working equipment</Form.Label>
                        <Form.Control onChange={getX} type="int" placeholder="Enter number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Input number of faulty equipment</Form.Label>
                        <Form.Control onChange={getY} type="int" placeholder="Enter number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Input number of workers missing</Form.Label>
                        <Form.Control onChange={getZ} type="text" placeholder="Enter number" />
                    </Form.Group>
                    
                    <Button onClick={()=>setPrint(true)} variant="primary" type="submit">
                        Edit Data
                    </Button>
                </div>
            </main>
            <footer class='customrow customcenter'>
                All rights reserved.
            </footer>
        </div>   
    )
    
}

export default Produce