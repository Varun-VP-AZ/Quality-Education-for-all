import Header from './header'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default layout