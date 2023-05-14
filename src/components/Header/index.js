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
    history.replace('/')
  }

  render() {
    return (
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <div className="navbar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
                alt="website logo"
                className="logo"
              />
              <button type="button" className="bt" onClick={this.clicked}>
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
              >
                <IoMdClose className="close-icon" />
              </button>
              <div className="ct">
                <Link to="/" className="f" onClick={this.homeChange}>
                  <div className="hm-container">
                    <AiFillHome className="hm-pic" />
                    <p className="h-h">Home</p>
                  </div>
                </Link>
                <Link to="/about" className="f">
                  <div className="hm-container">
                    <BsInfoCircleFill className="hm-pic" />
                    <p className="h-h">About</p>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default withRouter(Header)
