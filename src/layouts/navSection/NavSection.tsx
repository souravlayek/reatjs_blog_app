import React,{useState} from 'react'
import Nav from '../../components/nav/Nav'
import Search from '../../components/search/Search'
import SideNav from '../../components/sideNav/SideNav'

const NavSection = () => {
  const [sideNavOpend, setSideNavOpend] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  return (
    <>
      <Nav openSideMenu={() => setSideNavOpend(true)} openSearch={() => setSearchOpen(prev=>!prev)} />
      <SideNav close={() => setSideNavOpend(false)} openStatus={sideNavOpend} />
      <Search close={() => setSearchOpen(false)} openStatus={searchOpen} />
    </>
  )
}

export default NavSection
