import React,{Component} from 'react';
import Pdf from '../files/Rohit_Upadhyay.pdf'

export default class Introduction extends Component {
    render(){
        return(
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <h1>Hi! <br />I'm Rohit</h1>
                                                    <p><a className="btn btn-primary btn-learn" href={Pdf} target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1>I love building<br /> THINGS !!</h1>
                                                    <p><a className="btn btn-primary btn-learn" href="https://github.com/urhit45" target="_blank" rel="noopener noreferrer">My Github <i className="icon-briefcase3" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1>I often <br/>Write ... </h1>
                                                    <p><a className="btn btn-primary btn-learn" href="www.wordpress.com" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}