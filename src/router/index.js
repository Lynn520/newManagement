import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from 'components/PrivateRoute'

import Index from '../page/Index';
import Login from '../page/Login';

class Routes extends React.Component {
    constructor(props) {
        super(props);
        console.log('this.props', this.props);
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
                        routes.map((route, key) => {

                            if (route.exact) {

                                return <Route key={key} exact path={route.path}
                                    render={props => (
                                        // pass the sub-routes down to keep nesting
                                        <route.component {...props} routes={route.routes} />
                                    )}

                                />
                            } else {
                                return <Route key={key} path={route.path}
                                    render={props => (
                                        // pass the sub-routes down to keep nesting
                                        <route.component {...props} routes={route.routes} />
                                    )}
                                />

                            }
                        })
                    }
                </Index>
                {/* {
                        routes.map(route => {
                            return (
                                <Route component={route.component} path={`${subRoute.path}`>
                                    {
                                        route.routes ? route.routes.map(subRoute => {
                                            const { path, component, ...rest } = subRoute;
                                            return (
                                                <Route path={`${subRoute.path}`}
                                                    render={() =>
                                                        <div>
                                                            <Switch>
                                                                <Route path={path} component={component} {...rest} />
                                                            </Switch>
                                                        </div>
                                                    }
                                                >
                                                </Route>
                                            )
                                        }) : ''
                                    }
                                </Route>
                            )
                        })
                    } */}
                <Route component={() => <div>not found</div>} />
            </Switch>
        )
    }
}
// Routes.propTypes = {
//     routes: PropTypes.array.isRequired,
// };

export default Routes;
