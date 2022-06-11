import React from 'react';


const Navbar = () => {

    const logoImg = "http://4.bp.blogspot.com/-Wb_3NzXcO5c/VGv5sR3M7UI/AAAAAAAAh3w/ciwMZiICmF0/s1600/pokemon-logo-em-png-queroimagem-cei%C3%A7a-crispim-01.png"
    return (
        <nav>
            <div>
                <img
                    alt="pokeapi-logo" src={logoImg} className="navbar-img" />
                    
                
            </div>
            
        </nav>

    );
};

export default Navbar;