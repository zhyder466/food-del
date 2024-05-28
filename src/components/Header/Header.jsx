import React from 'react';
import './Header.css';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Craving something
                    <span>
                        <Typewriter
                            words={[
                                " delicious?",
                                " yummy?",
                                " tasty?",
                            ]}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={80}
                            deleteSpeed={80}
                            delaySpeed={2000}
                        />
                    </span>
                </h2>
                <h3>Indulge in a culinary journey with our exquisite selection of dishes, meticulously crafted to tantalize your taste buds. Discover the perfect blend of flavors and aromas that define Hyder's Delight, where every meal is a celebration of taste and tradition.</h3>
                <a href="#explore-menu"><button>View Menu</button></a>
            </div>
        </div>
    );
}

export default Header;
