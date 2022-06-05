import Nav from './Admin_main'
function Admin_book() {
    return ( 
        <>
        <Nav/>
        
        <nav class="navbar navbar-light" style={{backgroundColor: '#ff9933' }}>
             <div class="container-fluid ">
                <h1 class="ms-5">Bookings</h1>
            
                 <form class="d-flex">
                     <input class="form-control me-2" type="text" />
                    <button class="btn btn-outline-primary bg-secondary" type="submit"><i class="bi bi-search"></i></button>
                </form>
            </div>
        </nav>

        <div className='container-fluid  my-4 p-4'>
      
      <table class="table bg-table table-responsive table-hover col-sm-12">
        <thead style={{ backgroundColor: '#ff8533' }}>
          <tr >
            <th scope="col">Booking ID</th>
            <th scope="col">Customer</th>
            <th scope="col">Housekeeper</th>
            <th scope="col">Date</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">101</th>

            <td>Pallabi Roy</td>
            <td>Latika Roy</td>
            <td>8/06/2022</td>
            <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
          </tr>
          <tr>
            <th scope="row">102</th>

            <td>Payel Sarkar</td>
            <td>Latika Roy</td>
            <td>9/06/2022</td>
            <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
          </tr>
          
          <tr>
            <th scope="row">103</th>

            <td>Riya Let</td>
            <td>Latika Roy</td>
            <td>10/06/2022</td>
            <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
          </tr>
          <tr>
            <th scope="row">104</th>

            <td>Apurba Ganguly</td>
            <td>Bishakha Ghosh</td>
            <td>8/06/2022</td>
            <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
          </tr>
          <tr>
            <th scope="row">105</th>

            <td>Debashree Sarkar</td>
            <td>Bishakha Ghosh</td>
            <td>18/06/2022</td>
            <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
          </tr>
          <tr>
            <th scope="row">106</th>

            <td>Aditi Ghosh</td>
            <td>Bela Das</td>
            <td>8/06/2022</td>
            <td><button type="button" class="w-100 btn bg-topbar text-light">View</button></td>
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
     );
}

export default Admin_book;