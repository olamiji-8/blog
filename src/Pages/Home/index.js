import React from 'react'
import Header from '../../Components/Home/Header'
// import BlogList from '../../Components/Home/Header/BlogList'
import SearchBar from '../../Components/Home/Header/SearchBar'

const Home = () => {
  return (
    <div>
    {/* Page Header */}
    <Header/>

    {/* Search Bar */}
    <SearchBar/>


    {/* Blog List & Empty List */}
    {/* <BlogList/> */}
    </div>
  )
}

export default Home