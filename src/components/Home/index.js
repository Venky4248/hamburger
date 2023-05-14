import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <Link to="/">
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      alt="home"
      className="h-pic"
    />
  </Link>
)
export default Home
