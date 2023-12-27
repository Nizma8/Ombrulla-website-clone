import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white  flex flex-col justify-between ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 w-[80%] pt-16 pb-40">
        {/* About Us */}
        <section className="col-span-1">
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <p className="text-sm text-gray-400 leading-[2]">
            Ombrulla is an AI-driven company specializing in extracting insights from diverse data sources, including photos, videos, and data lakes. Our tailored solutions help businesses make data-driven decisions and improve their bottom line through automation and AI-powered analysis.
          </p>
        </section>

        {/* Our Services */}
        <section className="col-span-1">
          <h4 className="text-xl font-bold mb-4">Our Services</h4>
          <ul className="text-gray-400 pl-4">
            <li>AI Infrastructure Inspection</li>
            <li>AI Visual Inspection</li>
            <li>AI Data Analytics</li>
            <li>AI People Tracking</li>
          </ul>
        </section>

        {/* Our Solutions */}
        <section className="col-span-1">
          <h4 className="text-xl font-bold mb-4">Our Solutions</h4>
          <ul className=" pl-4 text-gray-400">
            <li>Asset Performance Management</li>
            <li>Job Grading & Evaluation</li>
            <li>Compensation Management</li>
          </ul>
        </section>

        {/* Contact Us */}
        <section className="col-span-1">
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <div className="text-sm text-gray-400 ">
            <p >United Kingdom, 53 Denton Close</p>
            <p>Redhill, Surrey, RH1 5LB</p>
            <p className='mb-5'>+44 787 999 3892</p>

            <p>Germany, Schützenstraße 51A</p>
            <p>Lübeck, 23558</p>
            <p className='mb-5'>+49 179 512 5812</p>

            <p>India, No. 154/20, Royal Space</p>
            <p>Third Floor TI, HSR Layout,</p>
            <p>Bangalore, Karnataka 560102</p>
            <p className='mb-5'>+91 85900 56435</p>
          </div>
        </section>
      </div>

      {/* Copyright */}
     
        <p className="text-sm text-gray-400">&copy; 2020 Ombrulla, Inc. All rights reserved.</p>
     
    </footer>
  )
}

export default Footer