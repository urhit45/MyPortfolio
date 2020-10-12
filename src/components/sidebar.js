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
                 
                {/* <div>
                    <h4>My Badges</h4>
                    <a target="_blank" href="https://www.youracclaim.com/badges/dd0e3818-3900-4a2c-a6ed-c42fba61916b/public_url"><div className="author-img" style={{backgroundImage: 'url(images/aws_saa.png)'}} /></a>
                    <a target="_blank" href="https://api.accredible.com/v1/auth/invite?code=e1816e635d9c09d8291d&credential_id=8a6045af-b949-4c44-a08e-6d08a628a04c&url=https%3A%2F%2Fcertificates.automationanywhere.com%2F8a6045af-b949-4c44-a08e-6d08a628a04c&ident=78628e9988cee5c7d5a9d9cbe6f606bd9aab9f34"><div className="author-img" style={{borderRadius="0px", backgroundImage: 'url(images/aa_bot_developer.jpg)'}} /></a>
                    <div className="author-img" style={{backgroundImage: 'url(images/auth_img.jpg)'}} />
                </div> */}
            </Menu>
            

        </div>
    )
}
