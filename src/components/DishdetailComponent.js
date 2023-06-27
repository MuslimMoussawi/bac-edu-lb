import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderComments({comments})
{
    const cmnts = comments.map
    (
        (comment)=>
        {
            return(
                <div class="conatainer"> 
                        <li key={comment.id}>
                            <p>{comment.comment}</p>                     
                        </li>
                </div>
                )
        }
    )
    
    return(
                <div className='col-12 col-md-12 m-1'>
                    <h4>Courses</h4>
                    <ul className='list-unstyled'>
                        {cmnts}
                    </ul>
                </div>
            )
}


function RenderDish({dish})
{
        return(
                <div className='col-12 col-md-12 m-1'>
                    <Card>
                        <CardImg width="100%" src ={dish.image} alt ={dish.name} /> 
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                )
}


const DishDetail = (props) => 
{
        if ( props.dish != null)
        {
           
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Courses</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
        }
}






export default DishDetail;