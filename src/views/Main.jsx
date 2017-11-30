import { Switch, Route } from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import NoMatch from "/components/NoMatch"

const Main = () => (
	<Switch>
	  <Route exact path='/' component={Home}/>
	  <Route path='/About' component={About}/>
	  <Route component={NoMatch}/>
	</Switch>
)

export default Main
