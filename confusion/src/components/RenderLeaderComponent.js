import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, CardHeader,Media } from 'reactstrap';
import {baseUrl} from '../shared/baseUrl';

function RenderLeader(props) {

    const leaders = props.leaders.leaders.map((leader) => {
        return (
            <div className="media">
                <img className="d-flex mr-3 img-thumbnail align-self-center" src={baseUrl+leader.image} alt={leader.name}></img>
                <div className="media-body">
                <h5 class="mt-2">{leader.name}</h5>
                <h6 class="mt-2">{leader.designation}</h6>
                    {leader.description}
                </div>
            </div>
        );
    });

    return (
        <div className="col-12">
            {leaders}
        </div>
    );
}

export default RenderLeader;

