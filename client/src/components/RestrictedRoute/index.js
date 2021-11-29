import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import axios from "axios";

function RestrictedRoute  ({ component: Component, match, ...allProps }) {

    const token = localStorage.getItem("token");
    console.log(token)
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
            setIsAuth(!!token);
            console.log(!!token)
        /*
        axios.get(`http://localhost:5000/browse/places/${match.params.id}`).then(res=>{
            setState(res.data)

            if(new Date(res.data.endTime) < new Date()) history.push('/')
        }).catch(err=>{
            history.push('/')
        })
         */
    }, [token]);

    return (
    <Route { ...allProps }
      render={ props => {
        return (
            isAuth
            ? (<div>
                <div className="page-container">
                  <Component { ...allProps } />
                </div>
            </div>)
                : <div>You have to login to preview this page.</div>
        )
        ;
      } }
    />
  );
}

RestrictedRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
  match: PropTypes.object,
};

export default RestrictedRoute;
