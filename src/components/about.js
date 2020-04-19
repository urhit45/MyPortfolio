import React, {Component} from 'react'

export default class About extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-about" data-section = "about">
                    <div className= "colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Us</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>
                                                I am a working professional currently working with ECS Infosolutions Pvt. Ltd as an AWS Solutions Architect, currently studying for the Associate Developer. I got my graduation in Computer Science from 
                                                DY Patil's Ramrao Adik Institue of Technology, Nerul, Navi Mumbai . Being a computer science grad my expertise lie in related domains of Web Development, DevOps and Data Science. Machine Learning and AI excite me, gets me thinking as I love me a challenge. By best-friends are Stack Overflow, GitHub, reddit and Quora.</p>
                                            <p>
                                                Now with the boring stuff aside, I write, I sketch also I would love to be able to sing but that's just pushing my luck too much. I am someone who loves to learn, "wait, where else have I heard that?".
                                                Yeah right! Everywhere :p. As of when I'm writing this I'm learning to play a Ukulele, learning French, improving my oratory skills. Soon I'll be writing a blog ( "Soon" I hope 🤞 ). 
                                            </p>
                                            <p>So that's me, in less than 200 words.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                                        <p>I have experience building websites and chrome extentions using JavaScript,React,Redux,HTML,CSS. Comfortable with both MEAN and LAMP stacks</p>
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
                                <p>I have a good grasp of Data Structures and Algorithms, but I believe that no amount of practice is enough to master DSA so one has got to keep doing it</p>
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
                                <p>I am an AWS certified Solutions Architect Associate, and hence have a good understanding of AWS cloud architecture and related servcies</p>
                            </div>
                            </div>
                        </div>
                        {/*
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-2">
                            <span className="icon">
                                <i className="icon-data" />
                            </span>
                            <div className="desc">
                                <h3>Dev Ops</h3>
                                <p>Jenkins , Kubernetes , Docker </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-4">
                            <span className="icon">
                                <i className="icon-layers2" />
                            </span>
                            <div className="desc">
                                <h3>Graphic Design</h3>
                                <p>My friend knows .. P</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-6">
                            <span className="icon">
                                <i className="icon-phone3" />
                            </span>
                            <div className="desc">
                                <h3>Digital Marketing</h3>
                                <p>I use Instagram eight hours a day :) </p>
                            </div>
                            </div>
                        </div>
                        */}
                        </div>
                    </div>
                </section>

            </div>
        )

    }
}