import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addproduct from "./components/Seller/Addproduct";
import CustomizeStore from "./components/Seller/CustomizeStore";
import MyStore from "./components/Seller/MyStore";
import SelectProduct from "./components/Seller/SelectProduct";
import Homepage from "./pages/Homepage";
import OrdersPage from "./pages/OrdersPage";
import Productcategory from "./pages/Productcategory";
import SellerAddProduct from "./pages/SellerAddproduct";
import SellerInventory from "./pages/SellerInventory";
import SellerStore from "./pages/SellerStore";
import SingleProduct from "./pages/SingleProduct";
import TemplatePage from "./pages/TemplatePage";
import OrderTrack from "./pages/OrderTrack";

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
          <Route path="orders" element={<OrdersPage />} exact={true} />
          <Route path="template" element={<TemplatePage />} exact={true} />
          <Route path="addproduct" element={<Addproduct />} exact={true} />
          <Route
            path="customizestore"
            element={<CustomizeStore />}
            exact={true}
          />
          <Route path="inventory" element={<SellerInventory />} exact={true} />
          <Route path="store" element={<SellerStore />} exact={true} />
          <Route path="order-track" element={<OrderTrack />} exact={true} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
