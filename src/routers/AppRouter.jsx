import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import RecipeDetails from '../pages/RecipeDetails'
import Recipes from '../pages/Recipes'

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/recipes" component={Recipes} exact />
        <Route path="/recipes/:id" component={RecipeDetails} />
      </Switch>
    </div>)
}

export default AppRouter