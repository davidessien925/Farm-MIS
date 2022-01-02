import './../sass/dashboard.scss'
import Customcard from './../components/customcard.jsx'
import { faUser, faCrow, faFeatherAlt, faMoneyBillAlt, faCogs, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

function Dashboard() {
    return(
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
            <main id="main" className="customrow customcenter">
                <Customcard name="Personnel" colorclass="red" icon={faUser}/>
                <Customcard name="Livestock" colorclass="green" icon={faCrow}/>
                <Customcard name="Produce" colorclass="orange" icon={faFeatherAlt}/>
                <Customcard name="Equipment" colorclass="yellow" icon={faCogs}/>
                <Customcard name="Finances" colorclass="light-blue" icon={faMoneyBillAlt}/>
                <Customcard name="Medical" colorclass="pink" icon={faHeartbeat}/>
            </main>
            <footer class='customrow customcenter'>
                All rights reserved.
            </footer>
        </div>   
    )
}

export default Dashboard