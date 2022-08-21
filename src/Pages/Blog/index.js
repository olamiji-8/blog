import React, { useEffect, useState } from 'react'
import { blogList } from '../../config/data';
import {Link} from 'react-router-dom'

const Blog = () => {
    // const {id}=useParams();
    const {blog, setBlog} = useState(null)
    useEffect(() =>{
        let blog=blogList.find((blog) =>blog.id ===parseInt(id));
        if(blog){
            setBlog(blog);
        }
    }, []);
  return (
    <div>
     <Link to={'/'}>
        <span> &#8592;</span>GO Back
     </Link>
    </div>
  )
}

export default Blog