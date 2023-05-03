import { Outlet } from 'react-router-dom'
import Controlbar from '../Controlbar'

import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <div className="nav-bar">
        <Controlbar />
      </div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
