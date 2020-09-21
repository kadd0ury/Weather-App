import React from 'react';



function Header() {
    return (
			<div className="site-header">
            <div className="container">
                <a href="index.html" className="branding">
                    <img src="logo.png" alt="" className="logo" />
                    <div className="logo-type">
                        <h1 className="site-title">Weather</h1>
                        <small className="site-description">Weather's informations</small>
                    </div>
                </a>

         
                <div className="main-navigation">
                    <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                 
                </div> 

                <div className="mobile-navigation"></div>

            </div>
        </div> 
     




    )
}

export default Header