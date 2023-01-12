import React, { useState } from "react";
import Layout from "./Pages/Layout";
import { Routes, Route, useNavigate } from "react-router-dom";
// import RegForm from "./Pages/Form";
// import TableView from "./Components/Table";
// import FormView from "./Components/CreateForm";
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
  const poList = "/Details/listPo";
  const poSearch = "/Service/posearch.json";
  // const fieldss = "/Service/truck.json";
  // const prodlist = "/Details/productlist.json";
  // const prodserch = "/Service/prodsearch.json";
  // const customr = "/Service/customer.json";

  const navigate = useNavigate();
  useEffect(() => {
    // nav("/test/list")
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/farmer" element={<Farmer />} />
          {/* <Route path="/po" element={<Po />} />
        <Route path="/truck" element={<Truck />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Warehouse" element={<Warehouse />} />
        <Route path="/Collection_Center" element={<Collection_Center />} />
        <Route path="/Customer" element={<Customer />} /> */}
          <Route
            path="/list"
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
            path="/list"
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
          {/* <Route path="/test/:aev" element={<FormView fields={fields} list={list} />} />
        <Route path="/test/:aev" element={<FormView fields={fields} list={list} />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
