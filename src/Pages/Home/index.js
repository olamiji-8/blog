import React, { useState } from 'react'
import EmptyList from '../../Components/Common/EmptyList'
import Header from '../../Components/Home/Header'
import BlogList from '../../Components/Home/Header/BlogList'
import SearchBar from '../../Components/Home/Header/SearchBar'
import { blogList } from '../../config/data'

const Home = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setsearchKey] = useState('')
    // Search Submit

    const handleSearchSubmit=event=>{
        event.preventDefault();
        handleSearchResults()
    }
    const handleSearchResults=()=>{
        const allBlogs=blogList;
        const filteredBlogs=allBlogs.filter(blog=>blog.category.toLowerCase().includes(searchKey.toLocaleLowerCase().trim()));
        setBlogs(filteredBlogs)
    }
    const handleClearSearch=() =>{
        setBlogs(blogList);
        setsearchKey('');
    }
  return (
    <div>
    {/* Page Header */}
    <Header/>

    {/* Search Bar */}
    <SearchBar value={searchKey}
    clearSearch={handleClearSearch}
     formSubmit={handleSearchSubmit} handleSearchkey ={e=>setsearchKey(e.target.value)}/>


    {/* Blog List & Empty List */}
    {!blogs.length ? <EmptyList/> :<BlogList blogs={blogs}/>}
    </div>
  )
}

export default Home