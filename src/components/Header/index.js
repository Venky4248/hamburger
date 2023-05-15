import Popup from 'reactjs-popup'
import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import './index.css'

class Header extends Component {
  state = {isTrue: false}

  homeChange = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    return (
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <div className="navbar">
              <Link to="/">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
                  alt="website logo"
                  className="logo"
                />
              </Link>
              <button
                type="button"
                className="bt"
                onClick={this.homeChange}
                data-testid="hamburgerIconButton"
              >
                <GiHamburgerMenu className="ham" />
              </button>
            </div>
          }
          className="popup-content"
        >
          {close => (
            <div className="ct1">
              <button
                type="button"
                className="close-bt"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose className="close-icon" data-testid="closeButton" />
              </button>
              <ul className="ct">
                <li>
                  <Link
                    to="/"
                    className="f hm-container"
                    onClick={() => close()}
                  >
                    <AiFillHome className="hm-pic" />
                    <p className="h-h">Home</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="f hm-container"
                    onClick={() => close()}
                  >
                    <BsInfoCircleFill className="hm-pic" />
                    <p className="h-h">About</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default withRouter(Header)
