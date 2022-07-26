import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link className='nav-link' data-widget='pushmenu' to='#' role='button'>
            <i className='fas fa-bars'></i>
          </Link>
        </li>
        {/* <li className="nav-item d-none d-sm-inline-block">
          <Link onClick={() => openTab('https://github.com/samsularifin05/admin-lte-react')} to="#" className="nav-link">
            Download Project
          </Link>
        </li> */}
      </ul>

      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className='nav-link' data-widget='fullscreen' to='#' role='button'>
            <i className='fas fa-expand-arrows-alt'></i>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
