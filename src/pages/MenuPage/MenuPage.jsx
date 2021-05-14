import React from "react";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import MenuComponentsSwitcher from "./../../components/MenuComponents/MenuComponentsSwitcher";

import "./Menu.scss";
import instagram from "../../content/imgs/instagram.svg";
import vk from "../../content/imgs/vk.svg";
import facebook from "../../content/imgs/facebook.svg";

const Menu = () => {
    let { path, url } = useRouteMatch();
    
    return (
      <div className="wrapper">
        <nav>
        <NavLink to="/"> <p className="navBack">Вернуться в главное меню</p> </NavLink>
          <ul className="menuNavLinks">
            <NavLink to={`${url}/coffeeAndTea`} className="menuLink" activeClassName="_activeLink">
              Кофе и чай
            </NavLink>
            <NavLink to={`${url}/breakfasts`} className="menuLink" activeClassName="_activeLink">
              Завтраки
            </NavLink>
            <NavLink to={`${url}/desserts`} className="menuLink" activeClassName="_activeLink">
              Десерты
            </NavLink>
            <NavLink to={`${url}/otherDrinks`} className="menuLink" activeClassName="_activeLink">
              Другие напитки
            </NavLink>
            
          </ul>
        </nav>
        

        <Switch>
          <Route exact path={path}>
            <Redirect from={path} to={`${url}/coffeeAndTea`} />
          </Route>
          <Route path={`${path}/:menuItem`}>
            <MenuComponentsSwitcher />
          </Route>
        </Switch>
        <footer className="menu_footer">
        <div className="social">
            <div className="inst">
              <a href="">
                <img className="social_icon" src={instagram} alt="inst" />{" "}
              </a>
            </div>
            <div className="vk">
              <a href="">
                <img className="social_icon" src={vk} alt="vk" />{" "}
              </a>
            </div>
            <div className="fb">
              <a href="">
                <img className="social_icon" src={facebook} alt="facebook" />{" "}
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
 
}

export default Menu;
