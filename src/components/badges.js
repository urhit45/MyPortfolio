import React, {Component} from 'react'

export default class Badges extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Badges</span>
                                <h2 className="colorlib-heading">Click the badge for credentials</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.youracclaim.com/badges/dd0e3818-3900-4a2c-a6ed-c42fba61916b/public_url"><div className="author-img" style={{backgroundImage: 'url(images/aws_saa.png)'}} /></a>
                                </div>
                            </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-3">
                                <a target="_blank" rel="noopener noreferrer" href="https://api.accredible.com/v1/auth/invite?code=e1816e635d9c09d8291d&credential_id=8a6045af-b949-4c44-a08e-6d08a628a04c&url=https%3A%2F%2Fcertificates.automationanywhere.com%2F8a6045af-b949-4c44-a08e-6d08a628a04c&ident=78628e9988cee5c7d5a9d9cbe6f606bd9aab9f34"><div className="author-img" style={{borderRadius:"0px", backgroundImage: 'url(images/aa_bot_developer.png)'}} /></a>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-5">
                                <a target="_blank" rel="noopener noreferrer" href="https://api.accredible.com/v1/auth/invite?code=e1816e635d9c09d8291d&credential_id=5ee284ef-6bc5-4932-9002-b04a1af2925e&url=https%3A%2F%2Fcertificates.automationanywhere.com%2F5ee284ef-6bc5-4932-9002-b04a1af2925e&ident=78628e9988cee5c7d5a9d9cbe6f606bd9aab9f34"><div className="author-img" style={{borderRadius:"0px", backgroundImage: 'url(images/aa_ba.png)'}} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
    }
}