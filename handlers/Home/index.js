require('./styles.css');

import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import React from 'react';
import {apiGet} from 'requestLib' ;
import {Resolver} from 'react-resolver';
import Button from 'Button';
import SideBox from 'SideBox';
import TopBar from 'TopBar';
import RouteBox from 'RouteBox';
import {Link} from 'react-router';

class Home extends React.Component {

 constructor(){
   super();
   this.state = {
     user: UserStore.getState().user,
     users: []
   };

   this.handleLogout = this.handleLogout.bind(this);
   this.handleLogin = this.handleLogin.bind(this);
   this.userRoutes = this.userRoutes.bind(this);

 }

 componentDidMount(){
   if (!this.state.user) {
     this.context.router.transitionTo('login');
   }

   UserStore.listen((state) => {
     this.setState({ user: state.user });
   });
 }

 handleLogout(){
   UserActions.deleteUser();
 }

 userRoutes() {
   var {routes} = this.state.user;
   var routesListItems = routes.map((route) => {
     return (
       <li>
         <Link to={`/employeeroute/${route.route_id}`}>
           {route.address}
         </Link>
       </li>
     );
   });

   return (
     <ol>
       {routesListItems}
     </ol>
   );
 }

 handleLogin() {
   this.context.router.transitionTo('login');
 }

 render(): ?ReactElement {
   let routeBox = '';
   if (this.state.user) {
     let {user} = this.state;
     routeBox = (
       <div className="RouteBox">
         <div className="current_user">
           Hello {user.full_name}
         </div>
         <div className="current_routes">
           You have {user.routes.length} route{user.routes.length>1 ? 's' : ''} today
         </div>
         {this.userRoutes()}
         <div className="bottom_logo" />
       </div>
     );
   }

   return (
     <div>
       <div className="TopBar"></div>
       <div className="SideBox">

         <div className="link_item">
           <i className="fa fa-cog"></i>
           <div className="caption">Admin</div>
         </div>

         <div className="current_link link_item">
           <i className="fa fa-user"></i>
           <div className="caption">User</div>
         </div>

         <div className="link_item">
           <i className="fa fa-map"></i>
           <div className="caption">Routes</div>
         </div>

         <div className="link_item" onClick={this.handleLogin}>
           <i className="fa fa-power-off"></i>
           <div className="caption">Log Out </div>
         </div>

       </div>

       { this.state.user ? routeBox : '' }
        
     </div>
   );
 }
}

Home.propTypes = {
 // id: React.PropTypes.any.isRequired,
};

Home.contextTypes = {
 router: React.PropTypes.func.isRequired
};

Home.displayName = 'Home';

export default Home;