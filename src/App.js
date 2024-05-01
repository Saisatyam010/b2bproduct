import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addproduct from "./components/Seller/Addproduct";
import CustomizeStore from "./components/Seller/CustomizeStore";
import MyStore from "./components/Seller/MyStore";
import SelectProduct from "./components/Seller/SelectProduct";
import Homepage from "./pages/Homepage";
import Productcategory from "./pages/Productcategory";
import SellerAddProduct from "./pages/SellerAddproduct";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} exact={true} />
        <Route path="/product" element={<SingleProduct />} exact={true} />
        <Route
          path="/searchresult"
          element={<Productcategory />}
          exact={true}
        />
        <Route path="/seller" element={<SellerAddProduct />} exact={true}>
          <Route
            path="selectcategory"
            element={<SelectProduct />}
            exact={true}
          />
          <Route path="mystore" element={<MyStore />} exact={true} />
          <Route path="addproduct" element={<Addproduct />} exact={true} />
          <Route path="customizestore" element={<CustomizeStore />} exact={true} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
