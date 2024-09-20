import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HowItWorks from "../HowItWorks/HowItWorks";
import css from "./HealthCheck.module.css";
import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import dhoni_img from '../../assets/images/landing_pages/dhoni-img.png';
import capt_left from '../../assets/images/landing_pages/Shield.png';
import capt_right from '../../assets/images/landing_pages/doc-character.png';
import basic_left from '../../assets/images/landing_pages/orange-plus.png';
import basic_right from '../../assets/images/landing_pages/doc-female.png';
import general_left from '../../assets/images/landing_pages/orange-plus.png';
import general_right from '../../assets/images/landing_pages/light-purple-plus.png';
import adv_left from '../../assets/images/landing_pages/orange-plus.png';
import adv_right from '../../assets/images/landing_pages/light-purple-plus.png';
import form_banner from '../../assets/images/mens-health/captain-img.png';
import ReCAPTCHA from 'react-google-recaptcha';


function HealthCheck() {
  const [open, setOpen] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setRecaptchaValue(value);
  };

  const gtmScript1 = document.createElement("script");
  gtmScript1.async = true;
  gtmScript1.src = "https://www.googletagmanager.com/gtag/js?id=AW-10841898141";

  const gtmScript2 = document.createElement("script");
  gtmScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10841898141');
    `;

  const gtmScript3 = document.createElement("script");
  gtmScript3.innerHTML = `
      gtag('config', 'AW-10841898141/8FEGCJn-otAZEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
  `;

  const gtmScript5 = document.createElement("script");
  gtmScript5.innerHTML = `
      gtag('config', 'AW-10841898141/GDwECMeVpv0YEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
  `;

  const gtmScript8 = document.createElement("script");
  gtmScript8.innerHTML = `
       gtag('config', 'AW-10841898141/QgvjCPu13tMZEJ356LEo', {
    'phone_conversion_number': '+918035287579'
      });
  `;

const gtmScript4 = document.createElement("script");
  gtmScript4.innerHTML = `
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = 'https://www.anandlab.com/anand-at-home-thank-you';
        }
      };
      gtag('event', 'conversion', {
          'send_to': 'AW-10841898141/Qa7oCKKE9ZoZEJ356LEo',
          'event_callback': callback
      });
      return false;
    }`;

  // Append the script tags to the head of the document
  document.head.appendChild(gtmScript1);
  document.head.appendChild(gtmScript2);
  document.head.appendChild(gtmScript3);
  document.head.appendChild(gtmScript4);
 document.head.appendChild(gtmScript5);
  document.head.appendChild(gtmScript8);

  // Define the gtag_report_conversion function
  const gtag_report_conversion = (url) => {
    const callback = () => {
      if (typeof (url) !== 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
      'send_to': 'AW-10841898141/Qa7oCKKE9ZoZEJ356LEo',
      'event_callback': callback
    });
  };


  const extractParamsFromURL = (url) => {
    const params = new URLSearchParams(url.split('?')[1]);
    const extractedParams = {};

    for (const [key, value] of params.entries()) {
      extractedParams[key] = value;
    }

    return extractedParams;
  };

  const currentURL = window.location.href;
  const extractedParams = extractParamsFromURL(currentURL);

  const notesValue = Object.entries(extractedParams).map(([key, value]) => `${key}=${value}`).join('&');

  // Convert JavaScript object to JSON string
  const notesDataString = JSON.stringify(notesValue);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required(),
        mobile: Yup.string()
          .matches(/^[6-9]\d{9}$/)
          .required(),
        // message: Yup.string().required(),
      })
    ),
  });
  const contactUsFrom = (data) => {
    if (recaptchaValue) {
    setLoading(true);
    data.page = "HEALTH CHECK";
    data.page_url = window.location.href;
    data.notes = notesDataString;

    gtag_report_conversion('https://www.anandlab.com/anand-at-home-thank-you');

    axios.post(API_URL.LANDING_PAGES_FORM, data).then((res) => {
      // FormResponse()
      navigate("/anand-at-home-thank-you");
      setLoading(false);
      reset();
      setOpen(!open);
    });
    } else {
      // Handle the case where reCAPTCHA validation failed
      console.log('Please complete the reCAPTCHA');
      alert('Please check reCAPTCHA');
    }
  };
  useEffect(() => {
    document.title = "Book Our Health Check in Bengaluru";
    window.scroll(0, 0);
    if (window.location.pathname.includes('Bengaluru')) {
      document.head.appendChild(gtmScript4);
 document.head.appendChild(gtmScript5);
  document.head.appendChild(gtmScript8);
    }
  }, []);

  const handleClick = (event, url) => {
    event.preventDefault();
    const gtag_report_conversion = (url) => {
      const callback = () => {
        if (typeof (url) !== 'undefined') {
          window.location = url;
        }
      };
      window.gtag('event', 'conversion', {
        'send_to': 'AW-10841898141/Qa7oCKKE9ZoZEJ356LEo',
        'event_callback': callback
      });
    };

    gtag_report_conversion(url);
  }

  return (
    <>
      <div className={`${[css['page-banner-section']]} page-banner-section container pb-0 pt-5`}>
        <div className="row">
          <div className="col-sm-8">
            <div className={`${[css['banner-text']]}`}>
              <h3>BOOK YOUR <span>HEALTH CHECK</span></h3>

              <h5 className="mt-3 text-left">Book Your Comprehensive Health Checkup Today!</h5>

              <p className={`${[css['page-content']]} text-left`}>Embark on a journey to holistic well-being with our Health Checks. Comprehensive and thorough, our checkups cover every aspect of your health, providing invaluable insights into your overall wellness. </p>
            </div>
          </div>
          <div className="col-sm-4 d-flex justify-content-center align-items-end">
            <img src={dhoni_img} alt="banner-img" className="img-fluid" />
          </div>
        </div>
      </div> 

      <div className="container pt-4">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-5 m-auto">
            {/* <p className={`${[css['page-content']]} text-center`}>Embark on a journey to holistic well-being with our Health Check. Comprehensive and thorough, this checkup covers every aspect of your health, providing invaluable insights into your overall wellness. </p> */}           

            <div className={`${[css['banner-links1']]} d-flex justify-content-center`}>
                {/* <a href="#getin_touch" className={` ${css.get_touch}`}>Get in Touch</a> */}
                <a href={`tel:+918035287579 `} className={` ${css.sent_enquiry} m-auto`}>CAll US <i className="fa fa-phone"></i> +918035287579 </a>
              </div>
          </div>
        </div>
      </div>

      <div className={`container ${css.pkg_section} ${css['light-pink-bg']} ${css['energy-pkg-section']}`}>
        <div className="row">
          <div className="col-12">
            <h4 className={`d-block text-center ${[css['section-heading']]}`}><span>HEALTH PACKAGE</span></h4>
          </div>
        </div>

        <div className="row justify-content-center mx-auto">
          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['purple-bg']} ${css['price-btn']} mx-auto mt-3`}>
              <label>ACTUAL PRICE</label>
              <span><strike>₹5500</strike></span>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['yellow-bg']} ${css['price-btn']} mx-auto mt-3`}>
              <label>OFFER PRICE</label>
              <span>₹1599</span>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['price-btn']} mx-auto my-3 ${css['book-now-btn']}`}>
              {/* <label>&nbsp;</label> */}
              <a onClick={(event) => handleClick(event, '/package/captains-health-checkup')}><span>Book Now</span></a>
            </div>
          </div>
        </div>

        <div className="row mt-3 mt-md-1">
          <div className={`${css['test-list']} ${css['yellow-bg']} ${css['capt-health-module']} position-reltive`}>
            <img src={capt_left} alt="section icon" className={`${css['left-icon-img']}`} />
            <ul>
              <li>CBC</li>
              <li>Lipid Profile</li>
              <li>Diabetes Profile (HbA1c, FBS)</li>
              <li>TSH Function Test (Free T3, Free T4 &amp; TSH)</li>
              <li>Kidney Function</li>
              <li>Liver</li>
              <li>Function Test Urine Routine</li>
              <li>Vitamin D</li>
              <li>Calcium</li>
            </ul>
            <img src={capt_right} alt="section icon" className={`${css['right-icon-img']}`} />
          </div>
        </div>
      </div>

      <div className={`container ${css.pkg_section} ${css['light-blue-bg']} ${css['gym-pkg-section']} position-relative`}>
        <div className="row">
          <div className="col-12">
            <h4 className={`d-block text-center ${[css['section-heading']]}`}>Neu Basic <span>HEALTH PACKAGE</span></h4>
          </div>
        </div>

        <div className="row justify-content-center mx-auto">
          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['yellow-bg']} ${css['price-btn']} mx-auto mt-2 mb-5`}>
              <label>PRICE</label>
              <span>₹999</span>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['price-btn']} mx-auto mt-2 mb-5 ${css['book-now-btn']}`}>
              {/* <label>&nbsp;</label> */}
              <a onClick={(event) => handleClick(event, '/package/neuberg-full-body-health-checkup-basic')}><span>Book Now</span></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={`${css['test-list']} ${css['purple-bg']} ${css['basic-module']}`}>
            <img src={basic_left} alt="section icon" className={`${css['left-icon-img']}`} />
            <ul>
              <li>Complete Blood Count (Automated Blood Cell Count)</li>
              <li>Fasting Glucose ( Serum / Plasma )</li>
              <li>Free Thyroid Profile</li>
              <li>Lipid Profile Standard</li>
              <li>Blood Urea ( Urease )</li>
              <li>Creatinine ( Serum )</li>
              <li>Uric Acid </li>
              <li>Urine Complete Examination   </li>
            </ul>
            <img src={basic_right} alt="section icon" className={`${css['right-icon-img']}`} />
          </div>
        </div>
      </div>

      <div className={`container ${css.pkg_section} ${css['light-pink-bg']} ${css['gym-pkg-section']} position-relative`}>
        <div className="row">
          <div className="col-12">
            <h4 className={`d-block text-center ${[css['section-heading']]}`}>NEU Express <span>HEALTH PACKAGE</span></h4>
          </div>
        </div>

        <div className="row justify-content-center mx-auto">
          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['yellow-bg']} ${css['price-btn']} mx-auto mt-2 mb-5`}>
              <label>PRICE</label>
              <span>₹1350</span>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['price-btn']} mx-auto mt-2 mb-5 ${css['book-now-btn']}`}>
              {/* <label>&nbsp;</label> */}
              <a onClick={(event) => handleClick(event, '/package/neuberg-full-body-health-checkup-express')}><span>Book Now</span></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={`${css['test-list']} ${css['yellow-bg']} ${css['general-module']}`}>
            <img src={general_left} alt="section icon" className={`${css['left-icon-img']}`} />
            <ul>
              <li>Fasting Glucose ( Serum / Plasma )</li>
              <li>Hba1c</li>
              <li>Liver Function Test  (Standard)   </li>
              <li>Free Thyroid Profile</li>
              <li>Lipid Profile Standard</li>
              <li>Blood Urea ( Urease )</li>
              <li>Creatinine ( Serum )</li>
              <li>Uric Acid </li>
              <li>Urine Complete Examination   </li>
              <li>Complete Blood Count (Automated Blood Cell Count)</li>
            </ul>
            <img src={general_right} alt="section icon" className={`${css['right-icon-img']}`} />
          </div>
        </div>
      </div>

      <div className={`container ${css.pkg_section} ${css['light-blue-bg']} ${css['gym-pkg-section']} position-relative`}>
        <div className="row">
          <div className="col-12">
            <h4 className={`d-block text-center ${[css['section-heading']]}`}>NEU Vita Plus <span>HEALTH PACKAGE</span></h4>
          </div>
        </div>

        <div className="row justify-content-center mx-auto">
          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['yellow-bg']} ${css['price-btn']} mx-auto mt-2 mb-5`}>
              <label>PRICE</label>
              <span>₹2500</span>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <div className={`${css['price-btn']} mx-auto mt-2 mb-5 ${css['book-now-btn']}`}>
              {/* <label>&nbsp;</label> */}
              <a onClick={(event) => handleClick(event, '/package/neuberg-full-body-health-checkup-vita-plus')}><span>Book Now</span></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={`${css['test-list']} ${css['purple-bg']} ${css['express-module']}`}>
            <img src={adv_left} alt="section icon" className={`${css['left-icon-img']}`} />
            <ul>
              <li>Total Calcium :</li>
              <li>Iron Studies (Iron + Uibc)</li>
              <li>Vitamin D (25-Oh)</li>
              <li>Blood Urea ( Urease )</li>
              <li>Creatinine ( Serum )</li>
              <li>Uric Acid </li>
              <li>Urine Complete Examination   </li>
              <li>Vitamin B12 Assay</li>
              <li>Complete Haemogram  (Automated Blood Cell Counter)</li>
              <li>Fasting Glucose ( Serum / Plasma )</li>
              <li>Free Thyroid Profile</li>
              <li>Lipid Profile Standard</li>
              <li>Hba1c</li>
              <li>Liver Function Test  (Standard)   </li>
            </ul>
            <img src={adv_right} alt="section icon" className={`${css['right-icon-img']}`} />
          </div>
        </div>
      </div>

      <div id={`${'getin_touch'}`}>
        <div className={`container mt-5 pt-5 px-0 ${css.form_section} w-100`}>
          <div className="row">
            <div className="col-sm-7 d-flex align-items-end">
              <img
                src={form_banner}
                alt="captain-banner"
                className={`img-fluid ${css.page_banner}`}
              />
            </div>
            <div className={`col-sm-5`}>
              {/* <div className={`${css.form_module}`}>
                                <form onSubmit={handleSubmit}>
                                    <label className={`d-block text-center`}>Our partners in health are at your service.</label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        autoComplete="off"
                                        className={`form-control ${css.input_css}`}
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        autoComplete="off"
                                        className={`form-control ${css.input_css}`}
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <button
                                        disabled={isPropertyEmpty}
                                        type="submit"
                                        className={` ${css.sent_enquiry}`}
                                    >
                                        Request A Call
                                        {isLoading && (
                                            <div
                                                className="spinner-border"
                                                css={{ width: "20px", height: "20px" }}
                                                role="status"
                                            >
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        )}
                                    </button>
                                </form>
                            </div> */}
              <div className={`${css.form_module}`}>
                <form onSubmit={handleSubmit(contactUsFrom)}>
                  <div className="form-container p-0">
                    <h5 className="get-callback-heading">Our partners in health are at your service.</h5>
                    {errors?.name ? (
                      <small className="text-danger">
                        {errors?.name?.message}
                      </small>
                    ) : (
                      ""
                    )}
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Name"
                      className="name-number-inp"
                    />
                    {errors?.mobile ? (
                      <small className="text-danger">
                        {"Mobile is a invalid field"}
                      </small>
                    ) : (
                      ""
                    )}
                    <input
                      {...register("mobile")}
                      type="tel"
                      placeholder="Mobile Number"
                      className="name-number-inp"
                    />
                    <div className={[css['radio-inputs-container']]}>
                      <p>
                        Please enter your details and we will reach out to you as
                        soon as we can.
                      </p>
                      {errors?.message ? (
                        <div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <ReCAPTCHA
                      sitekey="6Lf_BRIqAAAAAOD6XxxBdBiNnV0EuYM0Hsg1wp_M" // Replace with your actual site key
                      onChange={handleRecaptchaChange}
                    />

                    {Loading === true ? (
                      <button
                        type="submit"
                        disabled
                        className="btn-primary btn-flx-full mt-2"
                      >
                        <CgSpinner className="fa-spin mr-2" />
                        Loading ...
                      </button>
                    ) : (
                      <button type="submit" className="submit-connect-form mt-2">
                        Request A Call
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className={`${css.how_it_work_heading} text-center mt-5`}><span>BOOK A LAB TEST</span> FROM THE COMFORT OF YOUR HOME</h3>
      <HowItWorks />
    </>
  );
}

export default HealthCheck;
