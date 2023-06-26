import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMenuItem ({course, onClick}) {
return (
        <Card>
        <Link to={`/menu/${course.id}`} >
                <CardImg width="100%" src={course.image} alt={course.name} />
                <CardImgOverlay>
                <CardTitle>{course.name}</CardTitle>
                </CardImgOverlay>
        </Link>
        </Card>
);
}

const Menu = (props) => 
{
        const Menu = props.courses.map ( (course) =>
        { 
        return (
                <div key ={course.id} className="col-12 col-md-5 m-1"> 
                    <RenderMenuItem course={course}  />
                </div>  
                ); 
        }    
                                        );

        return (
                <div className="container">
                        <div className="row">
                        <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Courses</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                                <h3>Menu</h3>
                                <hr />
                        </div>                
                        </div>
                        <div className="row">
                                 {Menu}
                        </div>
                </div>
                );
                                            
}




export default Menu;