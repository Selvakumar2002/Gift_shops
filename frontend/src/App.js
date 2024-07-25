
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/dev/Header";
import Index from "./component/dev/Index";
import Container from "react-bootstrap/esm/Container";
import WhyShop from "./component/dev/WhyShop";
import SectionTestimonial from "./component/dev/SeactionTestimonial";
import SeactionContact from "./component/dev/SeactionContact";
import Cart from "./redux/Cart";
import Products from "./redux/Products";
import Register from "./adminpanel/Register";
import Login from "./adminpanel/Login";
import PrivateRoute from "./redux/PrivateRoute";
import DashBoard from "./adminpanel/DashBoard";
import AdminformData from "./adminpanel/AdminformData";
import Dtaformvgm from "./adminpanel/Dtaformvgm";
import Adminpage from "./adminpanel/Adminpage";
import AdminLayout from "./adminpanel/AdminLayout";
import WoWpage from "./adminpanel/WoWpage";
import Courtnkm from "./adminpanel/Courtnkm";
import Datatable from "./redux/Datatable";


function app() {
  return (
    <>
      <Container fluid style={{ backgroundColor: '#E6E6FA' }}>


        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/whyus' element={<WhyShop />} />
            <Route path='/testimonial' element={<SectionTestimonial />} />
            <Route path='/contactus' element={<SeactionContact />} />
            <Route path='/cart' element={<Cart />} />

            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />


            {/* <Route path='/adminform' element={<AdminformData />} /> */}

            <Route path='/adminform' element={<AdminformData />} />

            <Route path='/admin' element={<AdminLayout />} >

            <Route path='dashboard' element={<WoWpage />} />
            <Route path='productlist' element={<Datatable/>} />
            <Route path='vgm' element={<Dtaformvgm />} />
            <Route path='courtnkm' element={<Courtnkm />} />

            </Route>
            {/* <Route path='/products' element={
              <Products />}
            /> */}
            <Route path='/productlist' element={<Datatable/>} />

            <Route
              path="/products"
              element={
                // <PrivateRoute>
                  <Products />
                // </PrivateRoute>
                }
             /> 
            </Routes>
            <Datatable/>
        </BrowserRouter>



      </Container>
    </>
  );
}

export default app;