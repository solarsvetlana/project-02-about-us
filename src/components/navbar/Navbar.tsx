import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <nav>
      <ul>
        <li><Link to="/">About us</Link></li>
        <li><Link to="/contact">Contacts</Link></li>
        <li><Link to="/dashboard">Personal account</Link></li>
      </ul>
   </nav>
  )
}
