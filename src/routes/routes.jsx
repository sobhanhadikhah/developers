import { Route } from "react-router-dom";
import { CreatePost, Home, NotFound } from "../pages"
import { RootLayout } from "../components/layOut";
import ProtectedRoute from "./protectedRoute";


const routeVarient = (
    <Route element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path="post" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
    </Route>
)
export default routeVarient;