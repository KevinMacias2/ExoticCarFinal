import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Navbar";
import NavBar2 from "./Navbar2";
import Home from "./Home";
import TableBrands from "./TableBrands";
import InsertBrand from "./InsertBrand";
import UpdateBrand from "./UpdateBrand";
import TableBrand from "./TableBrand";
import TableCars from "./TableCars";
import InsertCar from "./InsertCar";
import UpdateCar from "./UpdateCar";
import InsertLaborData from "./InsertLaborData";
import TableLaborDatas from "./TableLaborDatas";
import UpdateLaborData from "./UpdateLaborData";
import InsertCustomer from "./InsertCustomer";
import TableCustomers from "./TableCustomers";
import UpdateCustomer from "./UpdateCustomer";
import TableCategories from "./TableCategories";
import InsertCategory from "./InsertCategory";
import UpdateCategory from "./UpdateCategory";
import TableSellers from "./TableSellers";
import InsertSeller from "./InsertSellers";
import UpdateSeller from "./UpdateSeller";
import TableSales from "./TableSales";
import InsertSale from "./InsertSale";
import UpdateSale from "./UpdateSale";
import Footer from "./Footer";
import Login from "./Login";
import Registration from "./Registration";


export default function App() {
    return (
        <div>

            <BrowserRouter>
                <Routes>

                 
                        <Route path="/proyectCar/public/" element={<NavBar2 />}>

                            <Route index element={<Login/>}/>
                        </Route>
                        <Route path="/proyectCar/public/" element={<NavBar/>}>
                            <Route path="home" element={<Home />}/>
                            <Route path="register" element={<Registration />}></Route>
                            <Route path="brandss" element={<TableBrand />} />
                            <Route path="brand" element={<InsertBrand />} />
                            <Route path="brand/update/:id" element={<UpdateBrand/>} />
                            <Route path="brands" element={<TableBrands/>} />
                            <Route path="cars" element={<TableCars />} />
                            <Route path="car" element={<InsertCar />} />
                            <Route path="car/update/:id" element={<UpdateCar/>} />
                            <Route path="category" element={<InsertCategory />} />
                            <Route path="categories" element={<TableCategories />} />
                            <Route path="category/update/:id" element={<UpdateCategory />} />
                            <Route path="laborData" element={<InsertLaborData />} />
                            <Route path="laborDatas" element={<TableLaborDatas />} />
                            <Route path="laborData/update/:id" element={<UpdateLaborData />} />
                            <Route path="customer" element={<InsertCustomer />} />
                            <Route path="customers" element={<TableCustomers />} />
                            <Route path="customer/update/:id" element={<UpdateCustomer />} />
                            <Route path="sellers" element={<TableSellers />} />
                            <Route path="seller" element={<InsertSeller />} />
                            <Route path="seller/update/:id" element={<UpdateSeller />} />
                            <Route path="sales" element={<TableSales />} />
                            <Route path="sale" element={<InsertSale />} />
                            <Route path="sale/update/:id" element={<UpdateSale />} />
                            
                        

                        </Route>


                </Routes>

            </BrowserRouter>
            <Footer>

            </Footer>
        </div>
    );
}