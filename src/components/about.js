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
                                                A Computer Science Masters student at Rutgers University, New Brunswick, NJ with two years of professional experience as a Full Stack Developer and AWS Cloud Architect, graduating during the Summer of 2023.
                                                Proficient with Object Oriented Programming, Machine Learning, Data Science and Web technologies. Undergraduate done in Computer Engineering from the University of Mumbai, completed in 2019.
                                            </p>
                                            <p>
                                                Looking for Part-time or Internship oppurtunities in Data Science, Machine Learning along with a focus on integrating it with software. Enthusiastic about Machine Learning and Artifical Intelligence, so 
                                                would be eager learn from your experiences too, so please do reach out, now that your spent some seconds reading this.
                                            </p>
                                            <p>
                                                Now with that aside, I write, I sketch also I would love to be able to sing but that's just pushing my luck too much. I am someone who loves to learn, "wait, where else have I heard that?".
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