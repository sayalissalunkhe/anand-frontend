import { useEffect } from 'react'
import Banners from './Sections/Banners'
import BookedTestSliders from './Sections/BookedTestSliders'
import CheckupsSliders from './Sections/CheckupsSliders'
import PackagesSliders from './Sections/PackagesSliders'
import ConditionsSliders from './Sections/ConditionsSliders'
import HowItsWorks from './Sections/HowItsWorks'
import AboutUs from './Sections/AboutUs'
import FindLocation from './Sections/FindLocation'
import LegacyNutshell from './Sections/LegacyNutshell'
import LatestBlogs from './Sections/LatestBlogs'
import Accretions from './Sections/Accretions' 
import Helmet from "react-helmet";
// import Modal from 'react-bootstrap/Modal';
// import { useState } from 'react'
// import { FaRegWindowClose } from "react-icons/fa";

export default function Home() {
  // const [openModal,setOpenModal] = useState(true)
  useEffect(() => {
    window.scroll(0,0);
    document.title = "Anand Diagnostic Laboratory - Your Trusted Diagnostic Centre";
  }, []);
  return (
    <>
     {/* <Modal
     show={openModal}
     onHide={()=>setOpenModal(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='homeModal'>
        <Modal.Title id="contained-modal-title-vcenter" className='w-100 text-center'>
         Important Notice 
       <span className='float-right'>
        <FaRegWindowClose  onClick={()=>setOpenModal(false)} className='popupClose'/>
        </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h5 className='text-center mb-3 text-decoration-underline'>Greetings from Neuberg Anand Laboratory</h5>
        <p>
        Due to technical difficulties your reports will be sent to your email ID.<br />The facility to download your report is not active currently.
        </p>
        <p>
        In case you want to update your email id, 
        please call us on 1800 425 1974 or 
        mail helpdesk@anandlab.com or 
        walk into your nearest centre.
        </p>
        <p>
        We are working on bringing back the online download option.
        We sincerely thank you for your trust in us.
        </p>
        <p className='mb-0'>Regards,</p>
        <p>Neuberg Anand Team</p>
      </Modal.Body>
    </Modal> */}
    <Helmet> 
      <title>Anand Diagnostic Laboratory - Your Trusted Diagnostic Centre</title> 
      <meta name="description" content="Get fast and affordable diagnostic services at Anand Lab. Our state-of-the-art facilities and experienced staff provide reliable results for patient care."></meta>
    </Helmet>
      <Banners/>
      <BookedTestSliders title="TOP BOOKED" subTitle="DIAGNOSTIC TESTS"/>
      <CheckupsSliders />
      <PackagesSliders  title="CHOOSE YOUR" subTitle="HEALTH Package"/>
      <ConditionsSliders />
      <HowItsWorks />
      <AboutUs />
      <FindLocation />
      <LegacyNutshell />
      <LatestBlogs />
      <Accretions />
    </>
  )
}