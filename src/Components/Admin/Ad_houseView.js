import React from 'react'
import Nav from './Admin_main'

function Ad_houseView() {
    return ( 
        <>
        <Nav/>
      <div class="container bg-primary my-5 p-5">
        <div class="card mb-3" >
            <div class="row no-gutters">
              <div class="col-md-4 ">
                  <img src="https://www.bing.com/th?id=OIP.p3GWq9o6cGrlzg8DrxS_EAHaK3&w=206&h=302&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" class="card-img" alt="..."></img>
              </div>
            <div class="col-md-8">
              <div class="card-body">
                  <h1 class="card-title">Housekeeper View</h1>
                  <hr/>
                 
                  <ul >
                  <div>
                     <li className='d-flex flex-row justify-content-between ms-2'>
                       <h5> Name:</h5>
                       <input disabled="true" type="text" className="form-control ms-2" id="hkName" placeholder="Anamika Roy"/>
                    </li>                
                    </div>
                    <hr/>
                    
                  <div class="my-4">
                    <li className='d-flex flex-row justify-content-between  ms-3'>
                       <h5>Salary:</h5>
                       <input disabled="true" type="text"  className="form-control m-2" id="salary" placeholder="12,000"/>

                    </li>
                    <li className='d-flex flex-row justify-content-between  m-3'>
                       <h5>Address:</h5>
                       <input disabled="true" type="text"  className="form-control m-2" id="address" placeholder="abc road,713123"/>
                    </li>
                    <li className='d-flex flex-row m-3'>
                       <h5>Ratings:</h5>
                       <div>
                       <i class="bi star bi-star-fill ms-2"></i>
                       <i class="bi star bi-star-fill "></i>
                       <i class="bi star bi-star-fill "></i>
                       <i class="bi star bi-star-fill "></i>
                       <i class="bi star bi-star-half"></i>
                       
                       </div>
                       
                     
                    </li>
                  </div>
                <hr/>
                  <div class="my-4">
                    <h2>Verified:  <i className=" verify bi bi-patch-check-fill"></i></h2>
                    
                  </div>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
     );
}

export default Ad_houseView;