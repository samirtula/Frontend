import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "../router";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                {routes.map(
                    route =>
                        <Route
                            exact={route.exact}
                            path={route.path}
                            element={route.element}/>
                )}
            </Routes>
        </div>
    );
};

export default AppRouter;