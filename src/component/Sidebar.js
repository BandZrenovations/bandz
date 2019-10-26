import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'




const Sidebar = class extends React.Component {
  render() {
    return (
      <section className="col s2 has-text-white-ter" style={{position:"fixed", zIndex:99, paddingLeft:'0em'}}>
        <div className="content has-text-centered has-text-white-ter" style={{ height: '100vh', backgroundColor:"rgba(0, 0, 0, 0.84)" }}>
          <div className="line1"style={{ fontSize: '2em', color: "white", marginBottom: "0em", width:'100%'}}>
            <img src={logo} alt="B and Z Renovations" />
          </div>
        {/* <div className="content has-text-centered has-background-#2929aaaf has-text-white-ter"> */}
          {/* <div className="container has-background-black has-text-white-ter"> */}
            {/* <div className="columns"> */}
              {/* <div className="column is-4"> */}
                {/* <section className="menu"> */}
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/products">
                        Projects
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                {/* </section> */}
              {/* </div> */}
              {/* <div className="column is-4">
                <section> */}
                  <ul className="menu-list">
                    {/* <li>
                      <Link className="navbar-item" to="/blog">
                        Current Projects
                      </Link>
                    </li> */}
                    <li>
                      <button style={{color:"#01040a", backgroundColor:"#ffffff",position: 'fixed',bottom: '1em'  }} >
                        <a href="mailto:bandzrenovations@gmail.com"style={{color:"#01040a"}}>
                        Contact
                        </a>
                      </button>
                    </li>
                  </ul>
                {/* </section>
              </div>
              */}
                
              
            {/* </div> */}
          {/* </div> */}
        {/* // </div> */}
        </div>
      </section>
    )
  }
}

export default Sidebar
