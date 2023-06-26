import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import ProblemSolved from './ProblemComponent';
import Physics from './Subject-Pages/Physics';
import Math from './Subject-Pages/Math';

import Biology_p_1 from './Biology_Problems/Biology_p_1';
import Biology_p_2 from './Biology_Problems/Biology_p_2';
import Biology_p_3 from './Biology_Problems/Biology_p_3';
import Biology_p_4 from './Biology_Problems/Biology_p_4';

import Phy_p_1 from './Physics_Problems/Phy_p_1';
import Phy_p_2 from './Physics_Problems/Phy_p_2';
import Phy_p_3 from './Physics_Problems/Phy_p_3';
import Phy_p_4 from './Physics_Problems/Phy_p_4';

import Chem_p_1 from './Chemistry_Problems/Chem_p_1';
import Chem_p_2 from './Chemistry_Problems/Chem_p_2';
import Chem_p_3 from './Chemistry_Problems/Chem_p_3';
import Chem_p_4 from './Chemistry_Problems/Chem_p_4';

import Math_p_1 from './Math_Problems/Math_p_1';
import Math_p_2 from './Math_Problems/Math_p_2';
import Math_p_3 from './Math_Problems/Math_p_3';
import Math_p_4 from './Math_Problems/Math_p_4';

import Math_S_3 from './Math_Solutions/Math_S_3';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COURSES } from '../shared/courses';
import { PROBLEMS } from '../shared/problems';

import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';




class Main extends Component 
{

  constructor(props) 
  {
    super(props);

    this.state = 
    {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
        courses: COURSES,
        problems: PROBLEMS
   
    };
  }

  render() 
  {

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }


    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
          <div>
            <Header/>

            <Switch>
              <Route path='/home' component={HomePage} />

              <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} />

              <Route exact path='/menu' component={() => <Menu courses={this.state.courses} />} />
              
              <Route path='/menu/:dishId' component={DishWithId} />

              <Route path="/ProblemSolved" component={ProblemSolved}/>

              <Route path='/Subject-Pages/Physics' component={Physics}/>

              <Route path='/Subject-Pages/Math' component={Math}/>

              /* */

              <Route path='/Biology_Problems/Biology_p_1' component={Biology_p_1} />

              <Route path='/Biology_Problems/Biology_p_2' component={Biology_p_2} />

              <Route path='/Biology_Problems/Biology_p_3' component={Biology_p_3} />

              <Route path='/Biology_Problems/Biology_p_4' component={Biology_p_4} />

              /* */

              /* */

              <Route path='/Math_Problems/Math_p_1' component={Math_p_1}/>

              <Route path='/Math_Problems/Math_p_2' component={Math_p_2}/>

              <Route path='/Math_Problems/Math_p_3' component={Math_p_3}/>

              <Route path='/Math_Problems/Math_p_4' component={Math_p_4}/>

              /* */

              /* */

              <Route path='/Chemistry_Problems/Chem_p_1' component={Chem_p_1}/>

              <Route path='/Chemistry_Problems/Chem_p_2' component={Chem_p_2}/>

              <Route path='/Chemistry_Problems/Chem_p_3' component={Chem_p_3}/>

              <Route path='/Chemistry_Problems/Chem_p_4' component={Chem_p_4}/>

              /* */

              /* */

              <Route path='/Physics_Problems/Phy_p_1' component={Phy_p_1}/>

              <Route path='/Physics_Problems/Phy_p_2' component={Phy_p_2}/>
              
              <Route path='/Physics_Problems/Phy_p_3' component={Phy_p_3}/>

              <Route path='/Physics_Problems/Phy_p_4' component={Phy_p_4}/>

              /* */

              /* */

              <Route path='/Math_Solutions/Math_S_3' component={Math_S_3}/>

              /* */

              <Route exact path='/contactus' component={Contact} />

              <Redirect to="/home" />
            
            </Switch>

            <Footer/>
          </div>
        
    );
  }
  
}

export default Main;