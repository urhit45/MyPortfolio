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
                                            <span className="heading-meta">About</span>
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
            </div>
        )

    }
}