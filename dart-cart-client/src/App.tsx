import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./features/authentication/Login";
import Home from "./features/Home";
import UserRegister from "./features/user-register/UserRegister";
import Display from "./features/display/Display";
import PreviousOrders from "./features/previous-orders/previous-orders";
import SellerRegister from "./features/seller-register/SellerRegister";
import Error404Page from "./components/Error";
import { Provider } from "react-redux";
import ShopProductDisplay from "./features/product-details/ShopProductDisplay";
import store from "./common/store";
import Header from "./features/layout/Header";
import Footer from "./features/layout/Footer";
import Cart from "./features/cart/Cart";
import "./App.css";
import Checkout from "./features/checkout/CheckoutDisplay";
import ListItem from "./features/list-item/ListItem";
import ShopPage from "./features/shop-page/ShopPage";
import SellerHomepage from "./features/seller-homepage/SellerHomepage";

function App() {
  useEffect(() => {
    document.title = "DartCart";
    //
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Display />}></Route>
            <Route
              path="/sellers/:seller_homepage"
              element={<SellerHomepage />}
            ></Route>
            <Route path="/shops/:shop_id" element={<ShopPage />}></Route>
            <Route path="/shops/:shop_id/list" element={<ListItem />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/register" element={<UserRegister />}></Route>
            <Route path="/signup" element={<SellerRegister />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/orders" element={<PreviousOrders />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/display" element={<Display />}></Route>
            <Route
              path="/shop-product/:shop_product_id"
              element={<ShopProductDisplay />}
            ></Route>
            <Route path="/*" element={<Error404Page />}></Route>
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
