import React from 'react'
import Nav from './Admin_main'

export default function Ad_houseList() {
  return (
    <div>
        <Nav/>

        <nav class="navbar navbar-light" style={{backgroundColor: '#ff9933' }}>
             <div class="container-fluid ">
                <h1 class="ms-5">Housekeeper List</h1>
            
                 <form class="d-flex">
                     <input class="form-control me-2" type="text" />
                    <button class="btn btn-outline-primary bg-secondary" href="/admin/bookings/view" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
        </nav>
        <div className='container-fluid rounded my-1 p-5'>
        <table class="table rounded-circle">
  <thead>
    <tr>
      <th class="h4" scope="col">Housekeeper Id</th>
      <th class="h4" scope="col">Housekeeper Name</th>
      <th class="h4" scope="col">Area</th>
      <th class="h4" scope="col">Date</th>
      <th class="h4" scope="col">Salary</th>
      <th class="h4" scope="col">View</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark Otto</td>
      <td>Kolkata</td>
      <td>2/05/2022</td>
      <td>1,000/-</td>
      <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Mark Otto</td>
      <td>College Street</td>
      <td>11/05/2022</td>
      <td>1,500/-</td>
      <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Mark Otto</td>
      <td>Dumdum</td>
      <td>20/05/2022</td>
      <td>1,200/-</td>
      <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
    </tr>

    <tr>
    <th scope="row">4</th>
      <td>Mark Otto</td>
      <td>Dumdum</td>
      <td>20/05/2022</td>
      <td>1,200/-</td>
      <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
    </tr>
    <tr>
    <th scope="row">5</th>
      <td>Mark Otto</td>
      <td>Dumdum</td>
      <td>20/05/2022</td>
      <td>1,200/-</td>
      <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
    </tr>
    <tr>
    <th scope="row">6</th>
      <td>Mark Otto</td>
      <td>Dumdum</td>
      <td>20/05/2022</td>
      <td>1,200/-</td>
      <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
    </tr>
    <tr>
    <th scope="row">7</th>
      <td>Mark Otto</td>
      <td>Dumdum</td>
      <td>20/05/2022</td>
      <td>1,200/-</td>
      <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
    </tr>
    <tr>
    <th scope="row">8</th>
      <td>Mark Otto</td>
      <td>Dumdum</td>
      <td>20/05/2022</td>
      <td>1,200/-</td>
      <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
    </tr>
    
    
  </tbody>
</table>
        </div>
        <nav aria-label="..." className='my-5 d-flex justify-content-center'>
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
        
        </div>
  )
}