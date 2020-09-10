import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentComponent from './CommentFormComponent';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform,Fade,Stagger} from 'react-animation-components';

class DishDetails extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading></Loading>
                    </div>
                </div>
            );
        }

        else if(this.props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }

        else if(this.props.dishDetail!=null) {
            const comments=this.props.dishComments.map((comment) => {
                return (
                    <div key={comment.id}>
                        
                        <Fade in>
                            <Card>
                                <CardTitle className="ml-1">{comment.comment}</CardTitle>
                                 <CardBody>
                                    <CardText className="ml-1">
                                         --{comment.author}, {new Intl.DateTimeFormat('en-us', {year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Fade>
                        
                    </div>                
                    );
            });

            return (
                <div className="container">
                    <div className="row">
                
                <div className="col-12 col-md-6">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to = "/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to = "/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dishDetail.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dishDetail.name}</h3>
                    </div>
                
                
                <FadeTransform in 
                            transformProps = {{
                                exitTransform:'scale(0.5) translateY(-50%)'
                            }}
                            >
                <Card className="col-12 col-md-5">
                    <CardImg width="100%" src={baseUrl+this.props.dishDetail.image} alt={this.props.dishDetail.name}></CardImg>
                    <CardBody>
                        <CardTitle>{this.props.dishDetail.name}</CardTitle>
                        <CardText>{this.props.dishDetail.description}</CardText>
                    </CardBody>
                </Card>
                </FadeTransform>
                </div>

                <div className="col-12 col-md-6">
                <h2>Comments</h2>
                    {comments}
                    <CommentComponent dishId={this.props.dishDetail.id} postComment={this.props.postComment}></CommentComponent>
                </div>
                </div> 
                </div>
                
            );
        }

        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetails;