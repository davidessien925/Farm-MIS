import React from 'react';
import './../sass/personnel.scss'
import {Form, Button} from 'react-bootstrap'

function Personnel() {
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
                    <p>Number of workers present:</p>
                    <p>Number of workers excused:</p>
                    <p>Number of workers absent without excuse:</p>
                    <p>Summary:</p>
                </ul>
                <div className="edit"> 
                    <Button variant="primary">
                        Edit Data
                    </Button>
                    <Form.Group className="mb-3">
                        <Form.Label>Input number of workers present</Form.Label>
                        <Form.Control type="text" placeholder="Enter number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Input number of workers excused</Form.Label>
                        <Form.Control type="text" placeholder="Enter number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Input number of workers missing</Form.Label>
                        <Form.Control type="text" placeholder="Enter number" />
                    </Form.Group>
                </div>
            </main>
            <footer class='customrow customcenter'>
                All rights reserved.
            </footer>
        </div>   
    )
    
}

export default Personnel