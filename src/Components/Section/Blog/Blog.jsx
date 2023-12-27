import React from 'react'
import BlogData from './BlogData';
import { Link } from 'react-router-dom';

function Blog() {
    const blogData = [
        {
            id: 1,
            title: "AI Revolutionizes Logistics and Supply Chain Management",
            author: "Zara Elizabeth",
            date: "December 21, 2023",
            readTime: "4 min read",
            image: "https://blog.ombrulla.com/wp-content/uploads/2023/12/AI-in-Logisics-and-Supply-chain.webp",
            description: "AI takes huge leaps in areas like Logistics and Supply chain management with AI Visual Inspection, AI Data Analytics, Predictive Maintenance, etc.",
          },
          {
            id: 2,
            title: "Google I/O 2023: A Deeper Look at the Future of AI",
            author: "Zara Elizabeth",
            date: "December 8, 2023",
            readTime: "5 min read",
            image: "https://blog.ombrulla.com/wp-content/uploads/2023/12/Google-io-2023.webp",
            description: "Google I/O 2023 envisions a future where helpful AI integrates seamlessly into our lives, breaking down barriers, empowering individuals, and tackling global challenges. By developing AI responsibly, we can shape a future where everyone benefits.",
          },
          {
            id: 3,
            title: "A Deep Understanding of AI Visual Inspection",
            author: "Zara Elizabeth",
            date: "November 28, 2023",
            readTime: "5 min read",
            image: "https://blog.ombrulla.com/wp-content/uploads/2023/11/Blog-Images.png",
            description: "The primary objective of this blog is to offer a foundational comprehension of automated visual evaluation and elucidate how AI Visual Inspection techniques contribute to significant time and effort savings.",
          },
          {
            id: 4,
            title: "Use of AI in Process Optimization and Quality Control",
            author: "Zara Elizabeth",
            date: "November 21, 2023",
            readTime: "3 min read",
            image: "https://blog.ombrulla.com/wp-content/uploads/2023/11/AI-on-Process-Optimization-and-Quality-Control.webp",
            description: "AI Visual Inspection is increasingly being used in process optimization and quality control across a range of industries, including manufacturing, healthcare, and logistics.",
          },
]
  return (
    <div class="w-[95%] mt-28 mb-20 mx-auto">
  <h6 class="text-center decoration">Blog Updates</h6>
        <h1 className=' text-5xl  font-semibold text-center my-5 border-b-2 pb-12'>Read</h1>


  <div class="grid grid-cols-1 md:grid-cols-3 gap-[0.15rem] mt-5 w-[85%] mx-auto">
    <BlogData blogData={blogData}/>
   
  </div>
</div> 
  )
}

export default Blog 