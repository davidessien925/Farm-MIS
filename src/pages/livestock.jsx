import React from 'react';
import './../sass/personnel.scss'

function Livestock() {
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
            <main className="">
                <ul> 
                    <p>Number of live birds:</p>
                    <p>Broilers</p>
                    <p>Layers</p>
                    <p>Number of dead birds:</p>
                    <p>Broilers</p>
                    <p>Layers</p>
                    <p>Number of vaccinated birds:</p>
                    <p>Broilers</p>
                    <p>Layers</p>
                    <p>Summary:</p>
                </ul>
            </main>
            <footer class='customrow customcenter'>
                All rights reserved.
            </footer>
        </div>   
    )
    
}

export default Livestock