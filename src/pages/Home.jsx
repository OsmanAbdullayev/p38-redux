import React from 'react'

const Home = () => {
  return (
   <div className="px-4 py-5 text-center">
  <img className="d-block mx-auto mb-4" src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23110934/4-1.png" alt width={360} height={285} />
  <h1 className="display-5 fw-bold">John Deere Food</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">The tasties food you can find in the internet! Join our community and enjoy delightful tastes.</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-success btn-lg px-4 gap-3">Join</button>
      <button type="button" className="btn btn-outline-success btn-lg px-4">About</button>
    </div>
  </div>
</div>

  )
}

export default Home