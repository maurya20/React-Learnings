import React from "react"

import Blog from "./Blog"
import blogData from "./blogData"



function MyApp() {
  const blogComponents = blogData.map(blog=> <Blog category={blog.category
  } heading={blog.heading} date={blog.date} pic={blog.pic} />)
   
   
   
    return (
      <div>
        
        {blogComponents}
       
      </div>
      
    )
  }

  export default MyApp