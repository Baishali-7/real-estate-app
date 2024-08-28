import './navbar.scss'

function NavBar(){

    return(
        <nav>
            <div className="left">
                <a href='/' className='logo'>
                    <img src ='/logo.png' alt=''></img>
                    <span>Hiiiii</span>
                </a>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Movies</a>
            </div>
            <div className="right">
            <a href='/'>Sign In</a>
            <a href='/'>Sign Up</a>
            </div>
        </nav>
    )
}

export default NavBar;