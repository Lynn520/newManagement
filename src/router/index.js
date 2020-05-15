import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from 'components/PrivateRoute'

import Index from '../page/Index';
import Login from '../page/Login';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { routes } = this.props;
        console.log('routes', routes)
        return (
            // 循环3套子路由，最后一套没有子路由的重定向
            <Switch>
                <Route path='/login' component={Login} />
                <Index>
                    {
                        routes.map(route => {
                            return (
                                <Route key={route.key} component={route.component} path={`${route.path}`}>
                                    {
                                        route.routes ? route.routes.map(subRoute => {
                                            const { path, component, ...rest } = subRoute;
                                            return (
                                                <Route path={`${subRoute.path}`}  key={subRoute.key} 
                                                    render={() =>
                                                        
                                                            <Switch>
                                                                <Route path={path} component={component} {...rest} />
                                                            </Switch>
                                                       
                                                    }
                                                >
                                                </Route>
                                            )
                                        }) : ''
                                    }
                                </Route>
                            )
                        })
                    }
                </Index>
                <Route component={() => <div>not found</div>} />
            </Switch>
        )
    }
}
// Routes.propTypes = {
//     routes: PropTypes.array.isRequired,
// };

export default Routes;
