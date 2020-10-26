import React from 'react';
import {slide as Menu} from 'react-burger-menu';

export default props => {
    return(
        <div>
            
            <Menu>

                <div style={{textAlign:"center"}}>
                    <div className="author-img" style={{backgroundImage: 'url(images/auth_img.jpg)'}} />
                    <h2 id="colorlib-logo"><a href="index.html">Rohit Upadhyay</a></h2>
                    <span className="email"><i className="icon-mail"></i> urhit45@gmail.com</span>
                </div>
                
                <div style={{textAlign:"center"}}>
                    <div><a href='/About'>About</a></div>
                    <div><a href='/Projects'>Projects</a></div>
                    <div><a href='/Connect'>Connect</a></div>
                    <div><a href="https://www.instagram.com/rohit4515/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></div>
                    <div><a href="https://www.linkedin.com/in/rohitupadhyay15/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></div>
                    <div><a href="https://github.com/urhit45" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></div>                        
                </div>
            </Menu>
            

        </div>
    )
}
