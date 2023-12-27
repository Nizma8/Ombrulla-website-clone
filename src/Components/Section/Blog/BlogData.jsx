import React from 'react'

function BlogData({blogData}) {
    console.log(blogData);
  return (
  <>
        {blogData.map((blog) => (
            <div key={blog.id} className="bg-white p-4 mb-4" >
            <img src={blog.image} alt={blog.title} className="w-full h-1/2 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-bold mb-2 h-[10%]">{blog.title}</h2>
            <div className="h-1/4 mt-2 ">
              <p className="text-gray-500">{blog.description}</p>
            </div>
            <div className="flex items-center mt-2">
              <div className='mr-1'>
                <img src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g" alt="profile-pic" width="50px" height="50px" className='rounded-full' />
              </div>
              <div className='mr-1'>
                <p className="text-sm font-semibold text-gray-500">By {blog.author}</p>
                <p className="text-sm font-semibold text-gray-500">{blog.date}.{blog.readTime}</p>
              </div>
            </div>
          </div>
          
          ))}
  </>
  )
}

export default BlogData