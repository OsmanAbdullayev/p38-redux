import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <div className="px-4 py-5 text-center">
  <img className="d-block mx-auto mb-4" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3be1eb73925345.5c1a2a4978f09.gif" alt="err" height={285} />
  <h1 className="display-5 fw-bold">BOOM! Burger & Fries</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">The tasties food you can find in the internet! Check our recipes and enjoy delightful tastes!</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-success btn-lg px-4 gap-3"><Link to="/recipes" className="nav-link">Recipes</Link></button>
      <button type="button" className="btn btn-outline-success btn-lg px-4">About</button>
    </div>
  </div>
</div>

  )
}

export default Home