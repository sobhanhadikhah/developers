import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';

import routeVarient from "./routes"

function AllRoute() {
    const router = createBrowserRouter(
        createRoutesFromElements(routeVarient));

    return <RouterProvider router={router} />
}

export default AllRoute;
