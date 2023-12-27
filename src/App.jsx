
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header/Header'
import Blog from './Components/Section/Blog/Blog'
import Brands from './Components/Section/Brands/Brands'
import Customers from './Components/Section/Customers/Customers'
import ImageInfoSection from './Components/Section/ImageInfoSection'
import InfoSection from './Components/Section/InfoSection'
import ProdcutsInfo from './Components/Section/Products/ProdcutsInfo'
import TitleSection from './Components/Section/TitleSection'

function App() {
    let imageInfoItems = [
      {
        id: 1,
        image: "https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp",
        contents: {
          title: "AI INFRASTRUCTURE INSPECTION",
          heading: "Enhances Efficiency, Safety, and Cost-Effectiveness",
          infos: [
            {
              heading: "Cutting-Edge Solution",
              content: "Ombrulla leverages AI, drones, and IoT technologies to transform infrastructure inspection."
            },
            {
              heading: "Real-Time Insights",
              content: "Real-time insights enhance inspection efficiency, safety, and reduce conventional challenges."
            },
            {
              heading: "Longevity and Cost-Effectiveness",
              content: "Ombrulla ensures the longevity and safety of critical infrastructure while offering a cost-effective solution."
            },
            {
              heading: "Responsive Maintenance",
              content: "Enhances infrastructure management, increasing reliability and responsiveness, and reducing risks."
            }
          ]
        }
      },
      {
        "id": 2,
        "image": "https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp",
        "contents": {
          "title": "AI VISUAL INSPECTION",
          "heading": "Improving Quality with Greater Precision",
          "infos": [
            {
              "heading": "AI Defect Detection",
              "content": "Utilizes computer vision and machine learning to identify and recognize defects during visual inspections autonomously."
            },
            {
              "heading": "Eagle-Eyed Vision",
              "content": "AI algorithms can identify even the most subtle defects, including microscopic cracks, color variations, and misalignments."
            },
            {
              "heading": "Informed Decision-Making",
              "content": "Valuable data is extracted from images and videos, empowering users to make informed, data-driven decisions."
            },
            {
              "heading": "Real-Time Insights",
              "content": "AI defect detection provides immediate feedback, enabling proactive interventions and adjustments to production processes."
            }
          ],
          
        }
      }
      ,
      {
        "id": 3,
        "image": "https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp",
        "contents": {
          "title": "AI DATA ANALYTICS",
          "heading": "Empowers Businesses to Make Insightful Decisions",
          "infos": [
            {
              "heading": "Actionable Insights",
              "content": "AI data analysis enhances decisions, personalizes customer experiences, and improves operations."
            },
            {
              "heading": "Increased Customer Loyalty",
              "content": "AI predictive analytics for personalized recommendations & increased customer loyalty."
            },
            {
              "heading": "Quality Assurance",
              "content": "AI analytics identifies and mitigates potential issues, ensuring the quality and reliability of products and services."
            },
            {
              "heading": "Efficiency and Responsiveness",
              "content": "Customers benefit from increased efficiency, improved product quality, and more responsive interactions with businesses."
            }
          ]
        }
      }
      ,
      {
        "id": 4,
        "image": "https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp",
        "contents": {
          "title": "Petran",
          "acronym": "PErformance - TRacking - ANalytics",
          "description": "AI & IoT Enabled\nAsset Performance Management",
          "additionalDetails": "Petran offers an Asset Performance Management (APM) system that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable proactive maintenance strategies.",
          
        }
      }
      
    ]
  return (
    <>
      <Header/>
      <TitleSection/>
      <InfoSection/>
      <ImageInfoSection details = {imageInfoItems} id= {1} infoFirst= {true}/>
      <ImageInfoSection details = {imageInfoItems} id= {2} infoFirst= {false}/>
      <ImageInfoSection details = {imageInfoItems} id= {3} infoFirst= {true}/>
      <ImageInfoSection details = {imageInfoItems} id= {4} infoFirst= {true}/>
      <ProdcutsInfo/>
      <Customers/>
      <Brands/>
      <Blog/>
      <Footer/>


    </>
  )
}

export default App
