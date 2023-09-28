// import { a, Routes, Route } from 'react-router-dom';

export default function Header(){
    return(
        <header className='header'>
            <nav>
                <a href ="">
                    <img src="src/assets/logo.svg" alt="Shortly logo" />
                </a>

                <div className="header__tabs">
                    <ul role='list'>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Features</a></li>
                        <li><a href="">Pricing</a></li>        
                    </ul>
                </div>

                <div className="header__dialogs">
                    <ul role='list'>
                        <li><a href="">Login</a></li>
                        <li><a href="">Sign Up</a></li>
                    </ul>                              
                </div>
            </nav>

            {/* <Routes>
                <Route path='' element={}/>
                <Route path='' element={}/>
                <Route path='' element={}/>
                <Route path='' element={}/>
                <Route path='' element={}/>
            </Routes> */}
        </header>
    )
}