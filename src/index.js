import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cus from "./Components/Admin/Admin_cus";
import Dashboard from "./Components/Admin/Admin_dashboard";
import Tickets from "./Components/Admin/Admin_tickets";
import Booking from "./Components/Admin/Admin_book";
import Views from "./Components/Admin/Admin_bookView";
import TicketView from "./Components/Admin/Ad_TicketView";
import Adminprofile from './Components/Admin/Admin_profile';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './main.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/admin/customers" element={<Cus />}/>
        <Route path="/admin/tickets" element={<Tickets />}/>
        <Route path="/admin/bookings" element={<Booking />}/>
        <Route path="/admin/profile" element={<Adminprofile />}/>
        <Route path="/admin/views" element={<Views />}/>
        <Route path="/admin/ticketViews" element={<TicketView />}/>

      </Routes>
    </BrowserRouter>    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

