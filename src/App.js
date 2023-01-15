import React, { useState } from "react";
import Layout from "./Pages/Layout";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FormView from "form-create-builder";
import { getApi, postApi } from "./webservice";
import Farmer from "./Components/Farmer/Farmer";
import Po from "./Components/Po/po";
import Product from "./Components/Product/Product";
import Truck from "./Components/Truck/Truck";
import Warehouse from "./Components/Warehouse/Warehouse";
import Collection_Center from "./Components/Collection_Center/Collection_Center";
import Customer from "./Components/Customer/Customer";

const App = () => {
  const farmerFields = "/Service/farmer.json";
  const farmerList = "/Details/listFarmer.json";
  const farmerSearch = "/Service/farmersearch.json";
  const poFields = "/Service/po.json";
  const poList = "/Details/listPo.json";
  const poSearch = "/Service/posearch.json";
  const productFields = "/Service/MasterData/product.json";
  const productList = "/Details/productlist.json";
  const productSearch = "/Service/prodsearch.json";
  const truckFields = "/Service/MasterData/truck.json";
  const truckList = "/Details/listTruck.json";
  const trucksearch = "/Service/truckSearch.json";
  const centerFields = "/Service/MasterData/Collection_Center.json";
  const centerList = "/Details/listCenter.json";
  const centersearch = "/Service/centerSearch.json";
  const warehouseFields = "/Service/MasterData/Warehouse.json";
  const warehouseList = "/Details/listWarehouse.json";
  const warehousesearch = "/Service/warehouseSearch.json";
  const customerFields = "/Service/customer.json";
  const customerList = "/Details/listcustomer.json";
  const customersearch = "/Service/customerSearch.json";

  const navigate = useNavigate();
  useEffect(() => {
    // nav("/test/list")
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/farmer" element={<Farmer />} />
          <Route
            path="/farmerList"
            element={
              <FormView
                aev={"list"}
                fields={farmerFields}
                list={farmerList}
                search={farmerSearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/create"
            element={
              <FormView
                aev={"add"}
                fields={farmerFields}
                list={farmerList}
                search={farmerSearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/view"
            element={
              <FormView
                aev={"view"}
                fields={farmerFields}
                list={farmerList}
                navigate={navigate}
                search={farmerSearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/edit"
            element={
              <FormView
                aev={"edit"}
                fields={farmerFields}
                list={farmerList}
                getApi={getApi}
                search={farmerSearch}
                postApi={postApi}
              />
            }
          />
        </Route>
      </Routes>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/po" element={<Po />} />

          <Route
            path="/poList"
            element={
              <FormView
                aev={"list"}
                fields={poFields}
                list={poList}
                search={poSearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/create"
            element={
              <FormView
                aev={"add"}
                fields={poFields}
                list={poList}
                search={poSearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/view"
            element={
              <FormView
                aev={"view"}
                fields={poFields}
                list={poList}
                navigate={navigate}
                search={poSearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/edit"
            element={
              <FormView
                aev={"edit"}
                fields={poFields}
                list={poList}
                getApi={getApi}
                search={poSearch}
                postApi={postApi}
              />
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Product" element={<Product />} />

          <Route
            path="/productList"
            element={
              <FormView
                aev={"list"}
                fields={productFields}
                list={productList}
                search={productSearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/create"
            element={
              <FormView
                aev={"add"}
                fields={productFields}
                list={productList}
                search={productSearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/view"
            element={
              <FormView
                aev={"view"}
                fields={productFields}
                list={productList}
                navigate={navigate}
                search={productSearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/edit"
            element={
              <FormView
                aev={"edit"}
                fields={productFields}
                list={productList}
                getApi={getApi}
                search={productSearch}
                postApi={postApi}
              />
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/truck" element={<Truck />} />

          <Route
            path="/truckList"
            element={
              <FormView
                aev={"list"}
                fields={truckFields}
                list={truckList}
                search={trucksearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/create"
            element={
              <FormView
                aev={"add"}
                fields={truckFields}
                list={truckList}
                search={trucksearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/view"
            element={
              <FormView
                aev={"view"}
                fields={truckFields}
                list={truckList}
                navigate={navigate}
                search={trucksearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/edit"
            element={
              <FormView
                aev={"edit"}
                fields={truckFields}
                list={truckList}
                getApi={getApi}
                search={trucksearch}
                postApi={postApi}
              />
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Collection_Center" element={<Collection_Center />} />

          <Route
            path="/centerList"
            element={
              <FormView
                aev={"list"}
                fields={centerFields}
                list={centerList}
                search={centersearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/create"
            element={
              <FormView
                aev={"add"}
                fields={centerFields}
                list={centerList}
                search={centersearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/view"
            element={
              <FormView
                aev={"view"}
                fields={centerFields}
                list={centerList}
                navigate={navigate}
                search={centersearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/edit"
            element={
              <FormView
                aev={"edit"}
                fields={centerFields}
                list={centerList}
                getApi={getApi}
                search={centersearch}
                postApi={postApi}
              />
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Warehouse" element={<Warehouse />} />

          <Route
            path="/warehouseList"
            element={
              <FormView
                aev={"list"}
                fields={warehouseFields}
                list={warehouseList}
                search={warehousesearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/create"
            element={
              <FormView
                aev={"add"}
                fields={warehouseFields}
                list={warehouseList}
                search={warehousesearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/view"
            element={
              <FormView
                aev={"view"}
                fields={warehouseFields}
                list={warehouseList}
                navigate={navigate}
                search={warehousesearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/edit"
            element={
              <FormView
                aev={"edit"}
                fields={warehouseFields}
                list={warehouseList}
                getApi={getApi}
                search={warehousesearch}
                postApi={postApi}
              />
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Customer" element={<Customer />} />

          <Route
            path="/customerList"
            element={
              <FormView
                aev={"list"}
                fields={customerFields}
                list={customerList}
                search={customersearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/create"
            element={
              <FormView
                aev={"add"}
                fields={customerFields}
                list={customerList}
                search={customersearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/view"
            element={
              <FormView
                aev={"view"}
                fields={customerFields}
                list={customerList}
                navigate={navigate}
                search={customersearch}
                getApi={getApi}
                postApi={postApi}
              />
            }
          />
          <Route
            path="/test/edit"
            element={
              <FormView
                aev={"edit"}
                fields={customerFields}
                list={customerList}
                getApi={getApi}
                search={customersearch}
                postApi={postApi}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
