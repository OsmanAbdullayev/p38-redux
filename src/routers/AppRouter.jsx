import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard'
import Home from '../pages/Home'
import RecipeDetails from '../pages/RecipeDetails'
import Recipes from '../pages/Recipes'
import AddRecipe from '../pages/update/AddRecipe'
import EditRecipe from '../pages/update/EditRecipe'

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/recipes" component={Recipes} exact />
        <Route path="/recipes/:id" component={RecipeDetails} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/add" component={AddRecipe} />
        <Route path="/edit/:id" component={EditRecipe} />
      </Switch>
    </div>)
}

export default AppRouter