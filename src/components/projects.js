import React, {Component} from 'react'
import { Carousel,Card, Button } from 'react-bootstrap'


export default class Project extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Projects</span>
                                <h2 className="colorlib-heading">Here are few projects I've undertaken</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services">
                                    <Card.Header style={{float:'left'}}><h1>Smart Interviewer</h1></Card.Header>
                                    <Card.Img style={{width: "100%", height: "300px"}} src="images/smart-interviewer.jpg"/>
                                    <Card.Body style={{textAlign: "justify"}}>The use case of the project was to develop a system that captures the sentiments from the interviewee’s audio and video. The project was implemented using Convolutional Neural Networks and OpenCV. Technologies used were Keras, Tensorflow, Python, OpenCV.
                                    </Card.Body>
                                    <br/>
                                    <Card.Footer style={{textAlign: "justify"}}><em>Tags:</em> ML, Convolutional Neural networks, AI, OpenCV, Tensorflow</Card.Footer>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services">
                                    <Card.Header style={{float:'left'}}><h1>Galaxy Generator</h1></Card.Header>
                                    <Card.Img style={{width: "100%", height: "300px"}} src="images/Galaxy.jpg"/>
                                    <Card.Body style={{textAlign: "justify"}}> An implementation achieved using Tensorflow and the concept of Generative Adversarial Networks, the purpose was to create images of Galazies using the existing dataset of about 200 galaxies. The Generator and the Discriminator were created using the Concept of DCGAN.
                                    </Card.Body>
                                    <br/>
                                    <Card.Footer style={{textAlign: "justify"}}><em>Tags:</em> ML, Convolutional Neural networks, AI, DCGAN, Tensorflow</Card.Footer>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services">
                                    <Card.Header style={{float:'left'}}><h1>Curiosity Forum</h1></Card.Header>
                                    <Card.Img style={{width: "100%", height: "300px"}} src="images/Curiosity.jpg"/>
                                    <Card.Body style={{textAlign: "justify"}}> The main objective was to design a website that provides students with a platform to interact among themselves. Students could has the ability start a discussion, like a message, reply to a message. There were fixed topics for Discussions like Development, Lifestyle and Technologies.
                                    </Card.Body>
                                    <br/>
                                    <Card.Footer style={{textAlign: "justify"}}><em>Tags:</em> Web Development, PHP, MySQL, Javascript, LAMP Full Stack</Card.Footer>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>
        )
    }
}
