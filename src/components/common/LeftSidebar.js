import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { doLogout } from '../../store/actions/auth.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LeftSidebar = () => {
  return (
    <ul className="menu-list">
      <li className="app-logo-alt"></li>
      <li><Link to=""><FontAwesomeIcon icon={faHome} /> Home</Link></li>
      <li><Button variant="link" type="button" onClick={doLogout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Button></li>
    </ul>
  )
}

export default LeftSidebar;
