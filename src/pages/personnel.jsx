import React from 'react';
import './../sass/personnel.scss'

function Personnel() {
    return (
        <div class="customgrid-container" id="bootstrap-overrides">
            <header class='customrow'>
                <div>
                    <a class='brand' href="index.html"> Farm Management Information System </a>
                </div>
                <div>
                    <a href="#">Logout</a>
                    <a href="#">Exit</a>
                </div>
            </header>
            <main className="">
                <ul> 
                    <p>Number of workers present:</p>
                    <p>Number of workers excused:</p>
                    <p>Number of workers absent without excuse:</p>
                    <p>Summary:</p>
                </ul>
            </main>
            <footer class='customrow customcenter'>
                All rights reserved.
            </footer>
        </div>   
    )
    
}

export default Personnel