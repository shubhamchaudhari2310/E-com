import Navbar from "./components/Navbar";
import Dashboard from "./pages/admin/Dashboard";
import Signup from "./pages/Signup";
import { BrowserRouter, Route } from "react-router-dom";
import AddProduct from "./pages/admin/AddProduct";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      {/* <Signup/> */}
      <Navbar />
      {/* <Route path="/" component={}/> */}
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/add-product" component={AddProduct} />
      <Route path="/product-details/:id" component={ProductDetails} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      {/* <Dashboard/> */}
    </BrowserRouter>
  );
}

export default App;
