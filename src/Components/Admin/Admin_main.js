import React from 'react'
import Admin_cus from './Admin_cus'
export default function Admin_main() {
  return (
    <div>
        <nav class="navbar bg-secondary text-light">
  <div class="container-fluid">
  <ul class="flex-row navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-3">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable</button>
        </li>
        <li class="nav-item mx-3">
        <img src="https://th.bing.com/th/id/OIP.vR3c8gJDtTZuFFJLa3nHcwHaHC?w=183&h=180&c=7&r=0&o=5&pid=1.7" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
        </li>
        <li className='nav-item mx-3'>
        <h4>Manage My House</h4>
        </li>
        
    </ul>
    <span class="navbar-text">
        Hello Admin
        
      </span> 
    
      
  </div>
</nav>


<div class="offcanvas offcanvas-sm offcanvas-start bg-secondary text-light" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
<Admin_cus/>
    </div>
  )

  }