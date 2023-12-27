import React from 'react'

function Brands() {
    const brandImage = [
        "https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp","https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp","https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp","https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp","https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp","https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp",
    ]
  return (
    <div class="container mx-auto p-8 my-20">
  <h6 class="text-center decoration">BRANDS WE WORK WITH</h6>
        <h1 className=' text-5xl  font-semibold text-center my-5 '>Trusted by Thousands of Businesses</h1>


  <div class="grid grid-cols-1 md:grid-cols-3 gap-[0.15rem] mt-5">
    {
        brandImage.map((item,index)=>{
            return (
                <div class="brand-card bg-gray-100 p-8 rounded-md flex flex-col items-center" key={index}>
     <img src={item} alt="brand-logo" width={"150px"} height={"150px"} />
    </div>
            )
        })
    }
    
   
  </div>
</div> 
  )
}

export default Brands