import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderLeader({leader})
{
        return(

            <div key = {leader.id}>

                    <Media left tag='a' >



                    </Media>

                    <Media body>

                        <Media heading>
                            {leader.name}
                        </Media>

                        <p>{leader.designation}</p>
                        <p>{leader.description}</p>

                    </Media>
            </div>
                )
}

function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <RenderLeader leader = {leader}/>
            
        );
    });



    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Who we are</h2>
                    <p>Started in 2010, Bazzi Academic Center quickly established itself as a culinary icon per excellence in Lebanon. With its unique services of education that can be found nowhere else, it helped a lot of students acheiving their goals in Lebanon.  Featuring the best studying strategies in the world, with the best teachers.</p>
                </div>
                <div className="col-12 col-md-5">
              
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>

                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Just beleive in yourself. Even if you don't, pretend that you do and, at some point, you will</p>
                                <footer className="blockquote-footer">
                                <cite title="Source Title">Venus Williams</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    