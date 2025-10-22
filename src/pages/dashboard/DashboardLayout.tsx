import { Link } from 'react-router-dom'

export default function DashboardLayout() {
  return (
      <div>
      <h2>Personal account</h2>
      <nav>
        <ul>
          <li><Link to="settings">Settings</Link></li>
          <li><Link to="userinfo">Information about user</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}
