import React from 'react'
import Nav from './Admin_main'
export default function Admin_tickets() {
  return (
    <>
    <Nav/>
    <div className='container  my-4 p-4'>
      
      <table class="table bg-table   table-responsive table-hover ">
        <thead style={{ backgroundColor: '#ff8533' }}>
          <tr >
            <th scope="col">Ticket ID</th>
            <th scope="col">Issuer Name</th>
            <th scope="col">Issue Date</th>
            <th scope="col">Status</th>
            <th scope="col">Click to Solve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>21/4/22</td>
            <td>Solved</td>
            <td><button type="button" class="w-50 btn btn-green bg-green text-light">Resolved</button></td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>21/4/22</td>
            <td>Pending</td>
            <td><button type="button" class="w-50 btn btn-danger bg-danger text-light">Solve</button></td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>21/4/22</td>
            <td>Solved</td>
            <td><button type="button" class="w-50 btn btn-greenlcs
             bg-green text-light">Resolved</button></td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>21/4/22</td>
            <td>Pending</td>
            <td><button type="button" class="w-50 btn btn-danger bg-danger text-light">Solved</button></td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>21/4/22</td>
            <td>Solved</td>
            <td><button type="button" class="w-50 btn btn-danger bg-danger text-light">Resolved</button></td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>21/4/22</td>
            <td>Solved</td>
            <td><button type="button" class="w-50 btn btn-danger bg-danger text-light">Resolved</button></td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>21/4/22</td>
            <td>Solved</td>
            <td><button type="button" class="w-50 btn btn-danger bg-danger text-light">Resolved</button></td>
          </tr>
          <tr>
            <th scope="row">1234</th>

            <td>Apurba Ganguly</td>
            <td>21/4/22</td>
            <td>Solved</td>
            <td><button type="button" class="w-50 btn btn-danger bg-danger text-light">Resolved</button></td>
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
