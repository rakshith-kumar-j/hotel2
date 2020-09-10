import React,{Component} from 'react';
import {Button,Modal,ModalHeader,ModalBody,Row,Label,Col} from 'reactstrap';
import {LocalForm,Control,Errors} from 'react-redux-form';

const maxLength=(len) => (val) => !(val) || (val.length<=len);
const minLength=(len) => (val) => !(val) || (val.length>=len);

class CommentComponent extends Component {

    constructor(props) {
        super(props);
        this.state={isModalOpen:false};
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({isModalOpen:!this.state.isModalOpen});
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId,values.ratings,values.fname,values.feedback);
    }

    render() {
        return (
            <div className="col-12">
                <Button className="btn btn-secondary" onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg">
                        Submit Comment
                    </span>
                </Button>  
            
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit = {(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={{size:3}}>
                                    <Label htmlFor="ratings">Ratings</Label>
                                    <Control.select className="form-control" model=".ratings" name="ratings">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                            <Col md={10}>
                                <Label htmlFor="fname">Name</Label>   
                                <Control.text model=".fname" className="form-control" id="fname" name="fname" placeholder="Name" validators={{minLength:minLength(3),maxLength:maxLength(15)}}></Control.text>
                                <Errors className="text-danger" model=".fname" show="touched" messages={{minLength:"Minimum 2 Characters",maxLength:"Maximum 15 Characters"}}></Errors>
                            </Col>
                            </Row>

                            <Row className="form-group">
                            <Col md={10}>
                                <Label htmlFor="feedback">Comment</Label>   
                                <Control.textarea model=".feedback" className="form-control" id="feedback" name="feedback" placeholder="Feedback" rows="6"></Control.textarea>
                            </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentComponent;