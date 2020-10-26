import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {slide as Menu} from 'react-burger-menu';

export default class Sidebar extends React.Component {
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
                
                <Menu>
    
                    <div style={{textAlign:"center"}}>
                        <div className="author-img" style={{backgroundImage: 'url(images/auth_img.jpg)'}} />
                        <h2 id="colorlib-logo"><a href="index.html">Rohit Upadhyay</a></h2>
                        <span className="email"><i className="icon-mail"></i> urhit45@gmail.com</span>
                        <div>
                            <span style={{margin:"10px"}}><a href="https://www.instagram.com/rohit4515/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></span>
                            <span style={{margin:"10px"}}><a href="https://www.linkedin.com/in/rohitupadhyay15/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></span>
                            <span style={{margin:"10px"}}><a href="https://github.com/urhit45" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></span>
                        </div>
                    </div>
                    <br></br>
                    <hr/>
                    <br/>
                    <Form onSubmit={this.handleSubmit}>
                        <h3 style={{color:"#2c98f0"}}>
                            I would love to hear from you
                        </h3>
                        <Form.Group>
                            <span>
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={this.state.name} name="full_name" onChange={(event) => this.handleUserInput(event)} style={{color:"black",borderRadius:"25px"}} as="input" type="name" />
                            </span>
                            <span>
                                <Form.Label>Email id</Form.Label>
                                <Form.Control value={this.state.name} name="email" onChange={(event) => this.handleUserInput(event)} style={{color:"black",borderRadius:"25px"}} as="input" type="email"/>
                            </span>
                            <span>
                                <Form.Label>Subject</Form.Label>
                                <Form.Control value={this.state.name} name="subject" onChange={(event) => this.handleUserInput(event)} style={{color:"black",borderRadius:"25px"}} as="input" type="text"/>
                            </span>
                            <span>
                                <Form.Label>Message</Form.Label>
                                <Form.Control value={this.state.name} name="message" onChange={(event) => this.handleUserInput(event)} style={{color:"black",borderRadius:"25px"}} as="textarea" rows={4} type="text"/>
                            </span>
                        </Form.Group>
                        <Button disabled={!this.state.full_name || !this.state.email || !this.state.message} style={{float:"right", borderRadius:"25px"}} variant="primary" type="submit">
                            Submit
                        </Button>
                            
                    </Form>
    
                </Menu>
                
    
            </div>
        )
    }
}
