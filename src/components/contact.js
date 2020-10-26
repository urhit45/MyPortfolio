import React, {Component} from 'react'
import { Form, Button, Col } from 'react-bootstrap';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
        full_name: null,
        email: null,
        subject: null,
        message:null,
        formSuccess: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return(
            <div>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Want to Reach Out?</span>
                                <h2 className="colorlib-heading">I would love to hear from you</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="animate-box">
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <div className="col-md-6">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control value={this.state.name} name="full_name" onChange={(event) => this.handleUserInput(event)} style={{border:'1px solid black', color:"black",borderRadius:"25px"}} as="input" type="name" />
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Label>Email id</Form.Label>
                                            <Form.Control value={this.state.name} name="email" onChange={(event) => this.handleUserInput(event)} style={{border:'1px solid black',color:"black",borderRadius:"25px"}} as="input" type="email"/>
                                        </div>
                                        <div className="col-md-12">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control value={this.state.name} name="subject" onChange={(event) => this.handleUserInput(event)} style={{border:'1px solid black',color:"black",borderRadius:"25px"}} as="input" type="text"/>
                                        </div>                                           
                                        <div className="col-md-12">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control value={this.state.name} name="message" onChange={(event) => this.handleUserInput(event)} style={{border:'1px solid black',color:"black",borderRadius:"25px"}} as="textarea" rows={4} type="text"/>
                                        </div>   
                                            
                                    </Form.Group>
                                    <div className="col-md-12" style={{marginTop:"10px"}}>
                                        <Button disabled={!this.state.full_name || !this.state.email || !this.state.message} style={{float:"right", borderRadius:"25px"}} variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )

    }
}