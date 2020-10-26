import React, {Component} from 'react'

export default class Expertise extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Development </h3>
                                        <p>I have experience building websites and chrome extentions using JavaScript, React, Redux, HTML, CSS. Comfortable with both MEAN and LAMP stacks</p>
                                    </div>
                                </div>
                            </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-3">
                                <span className="icon">
                                    <i className="icon-phone3" />
                                </span>
                                <div className="desc">
                                    <h3>Data Structures & Algorithms</h3>
                                    <p>I have a good understanding of Data Structures and Algorithms, but I believe that no amount of practice is enough to master DSA, so one has got to keep doing it</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-5">
                                <span className="icon">
                                    <i className="icon-data" />
                                </span>
                                <div className="desc">
                                    <h3>Amazon Web Services</h3>
                                    <p>I am an AWS certified Solutions Architect Associate, and I am quite adept in creating efficient cloud architectures. I am also familiar with DevOps and CI/CD methodologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
    }
}