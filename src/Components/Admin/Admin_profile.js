import React from 'react'
import Nav from "./Admin_main";
import "./admin.css"
export default function Admin_profile() {
  return (
    <>
    <Nav/>
    <div className="container my-5">
    <form>
  <div class="form-group d-flex flex-row justify-content-evenly">
  <img className="adminimage" width="180px" height="190px" src="https://www.bing.com/th?id=OIP.p3GWq9o6cGrlzg8DrxS_EAHaK3&w=206&h=302&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"></img>
    <ul>
        <li className='d-flex flex-row justify-content-between'>
            <h3>Name:</h3>
            <h4>Admin User</h4>
        </li>
    </ul>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-check d-flex flex-row gap-5 mt-5 mb-4">
  <label for="exampleInputPassword1">Address</label>
    <input disabled="true" type="password" style={{boxShadow:'1px 1px 4px 1px orange'}}  class="form-control" id="exampleInputPassword1" placeholder="ramanath Sarani Sb Gorai Road"/>
  </div>
  <div class="form-check d-flex flex-row gap-5 my-4">
  <label for="exampleInputPassword1">Phone</label>
    <input disabled="true" type="password" style={{boxShadow:'1px 1px 4px 1px orange'}}  class="form-control" id="exampleInputPassword1" placeholder="7001365857"/>
  </div>
  <div class="form-check  d-flex flex-row gap-5 my-4">
  <label for="exampleInputPassword1" class='font-weight-bold' >Email</label>
    <input disabled="true" type="password" style={{boxShadow:'1px 1px 4px 1px orange'}}  className="form-control" id="exampleInputPassword1" placeholder="sahbeganguly1234@gmail.com"/>
  </div>
  <div class="form-check  d-flex flex-row gap-5 my-4">
  <label for="exampleInputPassword1" class='font-weight-bold' >Gender</label>
    <input disabled="true" type="password" style={{boxShadow:'1px 1px 4px 1px orange'}}  className="form-control" id="exampleInputPassword1" placeholder="Male"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
}
