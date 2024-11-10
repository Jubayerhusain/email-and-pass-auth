
import { Outlet } from 'react-router-dom';
import Navber from './../Navber/Navber';
function Layout() {
    return (
        <div className='w-10/12 mx-auto'>
            <Navber></Navber>
            <Outlet />
        </div>
    )
}

export default Layout
