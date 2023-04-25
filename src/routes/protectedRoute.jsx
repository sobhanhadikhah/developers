import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuth = useSelector(state => state.weblog.auth);
    return isAuth ? children : <div>login first</div>
}

export default ProtectedRoute;
