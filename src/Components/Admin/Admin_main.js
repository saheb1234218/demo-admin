import React from 'react'
import Admin_cus from './Admin_tickets'
import App_icon from "../../images/App_logo.jpeg";
import {Link} from "react-router-dom"
import './admin.css'
export default function Admin_main() {
  return (
    <div>
      <nav class="navbar bg-topbar text-light">
        <div class="container-fluid container-fluid-sm">
          <ul class="flex-row navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav mx-2">
              <i className='bi-justify' style={{ fontSize: '30px' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"></i>

            </li>
            <li class="nav mx-1">
              <img src={App_icon} alt="" width="60" height="40" class="d-inline-block align-text-top" />
            </li>
            <li className='nav  text-center my-1  mx-0'>
              <h4 className="app_text">Manage My House</h4>
            </li>

          </ul>
          <span className="navbar-text mx-2 ">
            Hello Admin

          </span>
          <img className="admin_image" src="https://www.bing.com/th?id=OIP.p3GWq9o6cGrlzg8DrxS_EAHaK3&w=206&h=302&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"></img>

        </div>
      </nav>


      <div class="offcanvas offcanvas-start bg-sidebar" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-light" id="offcanvasWithBackdropLabel">Manage My House</h5>
          <img src={App_icon} alt="" width="60" height="40" class="d-inline-block align-text-top" />
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body my-1">
          <ul class="nav flex-column text-light hover gap-3 text-center">
            <li class="nav-item nav-item-hover">
              <a class="nav-link text-light" href="/"><h4>Dashboard</h4></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/customers"><h4>Customers</h4></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/housekeepers"><h4>Housekeepers</h4></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/bookings"><h4>Bookings</h4></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="/tickets"><h4>Tickets</h4></a>
            </li>

          </ul>
          <ul class="nav my-4 text-center  flex-column text-light hover gap-3">
            <li class="nav-item">
              <a class="nav-link text-light" href="#"><h4>Profile</h4></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#"><h4>Logout</h4></a>
            </li>

          </ul>
        </div>
      </div>
      
    </div>
  )

}