import React, {useState} from 'react'

const Header = () =>{
    const [toggle, setToggle] = useState(false)
    return(
        <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
        <ul id="menu">
          <li><a >Home</a></li>
          <li><a >About</a></li>
          <li><a >Info</a></li>
          <li><a >Contact</a></li>
        </ul>
       </div>
       </nav>
    )
}

export default Header