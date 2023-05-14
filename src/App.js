import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
      <Route exact path="/" component={Home} />
    </Switch>
  </>
)

export default App
