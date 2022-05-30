import React from 'react'
import Admin_cus from './Admin_cus'

export default function Admin_main() {
  return (
    <div>
        <nav class="navbar bg-topbar text-light">
  <div class="container-fluid container-fluid-sm">
  <ul class="flex-row navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav mx-3">
          <button className='bi bi-justify border-none' type="button"   data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></button>
       </li>
        <li class="nav mx-3">
        <img src="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?w=183&h=180&c=7&r=0&o=5&pid=1.7" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
        </li>
        <li className='nav  mx-3'>
        <h4>Manage My House</h4>
        </li>
        
    </ul>
    <span class="navbar-text">
        Hello Admin
        
      </span> 
    
      
  </div>
</nav>


<div class="offcanvas  offcanvas-sm offcanvas-start bg-sidebar text-light" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Manage My House</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body my-5">
    
  <ul class="nav flex-column text-light hover gap-3">
  <li class="nav-item nav-item-hover">
    <a class="nav-link text-light"  href="#"><h4>Dashboard</h4></a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light"  href="#"><h4>Customers</h4></a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light"  href="#"><h4>Housekeepers</h4></a>
  </li>

</ul>
<ul class="nav my-4  flex-column text-light hover gap-3">
  <li class="nav-item">
    <a class="nav-link text-light"  href="#"><h4>Profile</h4></a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light"  href="#"><h4>Logout</h4></a>
  </li>
  
</ul>
  </div>
</div>
<Admin_cus/>
    </div>
  )

  }