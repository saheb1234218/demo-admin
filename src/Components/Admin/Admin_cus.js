import React from 'react'
import Admin_main from './Admin_main'
import "./admin.css";
import Nav from './Admin_main'
export default function Admin_cus() {
  return (
    <>
    <Nav/>
    <nav class="navbar navbar-light" style={{backgroundColor: '#ff9933' }}>
             <div class="container-fluid ">
                <h2 class="ms-5">All Customers</h2>
            
                 <form class="d-flex">
                     <input class="form-control me-2" type="text" />
                    <button class="btn btn-outline-primary bg-secondary" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
        </nav>
    <div className='container-fluid  my-4 p-4'>
      
      <table class="table bg-table  table-responsive table-hover ">
        <thead style={{ backgroundColor: '#ff8533' }}>
          <tr >
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Housekeeper Booked</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>xyz@gmail.com</td>
            <td>1234567890</td>
            <td>Abdul Siddique</td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>xyz@gmail.com</td>
            <td>1234567890</td>
            <td>Abdul Siddique</td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>xyz@gmail.com</td>
            <td>1234567890</td>
            <td>Abdul Siddique</td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>xyz@gmail.com</td>
            <td>1234567890</td>
            <td>Abdul Siddique</td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>xyz@gmail.com</td>
            <td>1234567890</td>
            <td>Abdul Siddique</td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>xyz@gmail.com</td>
            <td>1234567890</td>
            <td>Abdul Siddique</td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>xyz@gmail.com</td>
            <td>1234567890</td>
            <td>Abdul Siddique</td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>xyz@gmail.com</td>
            <td>1234567890</td>
            <td>Abdul Siddique</td>
          </tr>
        </tbody>
      </table>

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
    </>
    
  )
}
