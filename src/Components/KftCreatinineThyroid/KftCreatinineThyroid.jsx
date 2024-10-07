import React, { useEffect, useState } from "react";
import Sliders from "react-slick";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import whyAnand1 from "../../assets/images/why-anand-1.png";
import whyAnand2 from "../../assets/images/why-anand-2.png";
import whyAnand3 from "../../assets/images/why-anand-3.png";
import whyAnand4 from "../../assets/images/why-anand-4.png";
import howItWorks1 from "../../assets/images/how-it-works-1.png";
import howItWorks2 from "../../assets/images/how-it-works-2.png";
import howItWorks3 from "../../assets/images/how-it-works-3.png";
import howItWorks4 from "../../assets/images/how-it-works-4.png";
import allergyTest1 from "../../assets/images/allergy-test-1.png";
import allergyTest2 from "../../assets/images/allergy-test-2.png";
import allergyTest3 from "../../assets/images/allergy-test-3.png";
import allergyTest4 from "../../assets/images/allergy-test-4.png";
import allergyBanner from "../../assets/images/allergy_banner.png";
import commitmentIcon1 from "../../assets/images/commitment-icon-1.png";
import commitmentIcon2 from "../../assets/images/commitment-icon-2.png";
import commitmentIcon3 from "../../assets/images/commitment-icon-3.png";
import dhoniBannerImg from "../../assets/images/dhoni-img.png";
import taticon from "../../assets/images/tat_icon.png";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ReCAPTCHA from 'react-google-recaptcha';

export default function KftCreatinineThyroid() {
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
      data.page = "KFT CREATININE THYROID";
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

  // const dispatch = useDispatch();

  // const onSubmit = (data) => {
  //   dispatch(setLoading(true));

  //   var formdata = new FormData();
  //   formdata.append("name", data.name);
  //   formdata.append("page_url", window.location.href);
  //   formdata.append("email", data.email);
  //   formdata.append("mobile", data.mobile);
  //   formdata.append("company_name", data.company_name);
  //   formdata.append("designation", data.designation);
  //   formdata.append("address", data.address);
  //   formdata.append("message", data.message);

  //   var requestOptions = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   fetch(API_URL.HEALTHCHECKUP_FOR_EMPLOYEES, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.Errors === false) {
  //         reset();
  //         dispatch(setLoading(false));
  //         FormResponse();
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  // };
  useEffect(() => {
    document.title = "Home collection for Allergy tests";
    window.scroll(0, 0);

    if (window.location.pathname.includes('Bengaluru')) {
      document.head.appendChild(gtmScript4);
 document.head.appendChild(gtmScript5);
  document.head.appendChild(gtmScript8);
    }
  }, []);

  var consumeing = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 3,
    focusOnSelect: true,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="book-our-heading">BOOK OUR</span>
          <span class="health-check-heading"> KFT CREATININE, THYROID</span>
        </div>
      </div>

      <div class="book-health-form-container">
        <div class="left-form h-100">
          <form onSubmit={handleSubmit(contactUsFrom)}>
            <div className="form-container">
              <h5 className="get-callback-heading">GET A CALLBACK</h5>
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
                placeholder="Enter Your Name"
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
                placeholder="Enter Your Mobile Number"
                className="name-number-inp"
              />
              <div className="radio-inputs-container">
                {/* <p>
                  Please enter your details and we will reach out to you as
                  soon as we can.
                </p> */} 
                {errors?.message ? (
                  <div>
                    {/* <small className="text-danger">
                          {"Choose any one!"}
                        </small> */}
                  </div>
                ) : (
                  ""
                )}
                {/* <label>
                    <input
                      type="radio"
                      id="test1"
                      value="Contact me by home visit"
                      name="radio-group"
                      {...register("message")}
                    />
                    Home Visit
                  </label>

                  <label>
                    <input
                      type="radio"
                      id="test2"
                      value="Contact me at lab test"
                      name="radio-group"
                      {...register("message")}
                    />
                    Lab Test
                  </label>

                  <label>
                    <input
                      type="radio"
                      id="test3"
                      value="Contact me by callback"
                      name="radio-group"
                      {...register("message")}
                    />
                    <span>Request Callback</span>
                  </label> */}
              </div>
              <ReCAPTCHA
                sitekey="6Lf_BRIqAAAAAOD6XxxBdBiNnV0EuYM0Hsg1wp_M" // Replace with your actual site key
                onChange={handleRecaptchaChange}
              />

              {Loading === true ? (
                <button
                  type="submit"
                  disabled
                  className="btn-primary btn-flx-full"
                >
                  <CgSpinner className="fa-spin mr-2" />
                  Loading ...
                </button>
              ) : (
                <button type="submit" className="submit-connect-form">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
        <div class="right-img">
          <img src={dhoniBannerImg} alt="" class="dhoni-img-form" />
        </div>
      </div>

      <div class="discover-allergy">
        <h4 class="section-heading allergic-section-heading">
          Elevate your Health with our Kidney Function and Thyroid Tests
        </h4>
        <p>
          Elevate your health awareness with our Kidney Function and Thyroid
          Tests, featuring tests for creatinine and thyroid levels. Gain
          valuable insights into your kidney health and thyroid function.
          Explore the tests, understand the procedures, and appreciate the
          significance of monitoring these crucial markers. Book your tests
          today to take a proactive step towards maintaining a healthy balance.
        </p>
      </div>
      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">KFT Package</span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Urea Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Creatinine Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Uric Acid Test</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹405 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Renal Function Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Urea Test</li>
              <li>Sodium Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Creatinine Test</li>
              <li>Potassium Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Uric Acid Test</li>
              <li>Chloride Test</li>
            </ul>
          </div>
        </div>
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹600 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Urine Examination Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Colour Urine</li>
              <li>Transparency Urine</li>
              <li>Sp.Gravity Urine</li>
              <li>Ph Urine</li>
              <li>Epithelial Cell</li>
              <li>Bacteria</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Leucocytes (Esterase )</li>
              <li>Protein Urine</li>
              <li>Glucose Urine</li>
              <li>Ketone Bodies Urine</li>
              <li>Red Blood Cell</li>
              <li>Yeast</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Urobilinogen Urine</li>
              <li>Bilirubin Urine</li>
              <li>Blood Urine</li>
              <li>Nitrite</li>
              <li>Leucocyte</li>
              <li>Crystals</li>
            </ul>
          </div>
        </div>
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹150 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Creatinine Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹200 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Thyroid Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹490 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Urine Culture Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹850 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Captain's Health Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>CBC</li>
              <li>Lipid Profile</li>
              <li>Diabetes Profile (HbA1c, FBS)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Thyroid Function Test (Free T3, Free T4 & TSH)</li>
              <li>Kidney Function</li>
              <li>Liver</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Function Test Urine Routine</li>
              <li>Vitamin D</li>
              <li>Calcium</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="actual-price-section-button">
            <span>
              Actual
              <br /> Price
            </span>
            <button class="actual-price-btn">₹5500 </button>
            <p class="empty-div-cut"></p>
          </div>
          <div class="offer-price-section-button">
            <span>
              Offer
              <br /> Price
            </span>
            <button class="offer-price-btn">₹1599 </button>
          </div>
        </div>
      </div>

      {/* <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">KFT Package</span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Urea Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Creatinine Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Uric Acid Test</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹405 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Renal Function Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Urea Test</li>
              <li>Sodium Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Creatinine Test</li>
              <li>Potassium Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Uric Acid Test</li>
              <li>Chloride Test</li>
            </ul>
          </div>
        </div>
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹600 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Urine Examination Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Colour Urine</li>
              <li>Transparency Urine</li>
              <li>Sp.Gravity Urine</li>
              <li>Ph Urine</li>
              <li>Epithelial Cell</li>
              <li>Bacteria</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Leucocytes (Esterase )</li>
              <li>Protein Urine</li>
              <li>Glucose Urine</li>
              <li>Ketone Bodies Urine</li>
              <li>Red Blood Cell</li>
              <li>Yeast</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Urobilinogen Urine</li>
              <li>Bilirubin Urine</li>
              <li>Blood Urine</li>
              <li>Nitrite</li>
              <li>Leucocyte</li>
              <li>Crystals</li>
            </ul>
          </div>
        </div>
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹150 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Creatinine Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹200 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Thyroid Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹490 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Urine Culture Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹850 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Captain's Health Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>CBC</li>
              <li>Lipid Profile</li>
              <li>Diabetes Profile (HbA1c, FBS)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Thyroid Function Test (Free T3, Free T4 & TSH)</li>
              <li>Kidney Function</li>
              <li>Liver</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Function Test Urine Routine</li>
              <li>Vitamin D</li>
              <li>Calcium</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="actual-price-section-button">
            <span>
              Actual
              <br /> Price
            </span>
            <button class="actual-price-btn">₹5500 </button>
            <p class="empty-div-cut"></p>
          </div>
          <div class="offer-price-section-button">
            <span>
              Offer
              <br /> Price
            </span>
            <button class="offer-price-btn">₹1599 </button>
          </div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">KFT Package</span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Urea Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Creatinine Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Uric Acid Test</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹405 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Renal Function Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Urea Test</li>
              <li>Sodium Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Creatinine Test</li>
              <li>Potassium Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Uric Acid Test</li>
              <li>Chloride Test</li>
            </ul>
          </div>
        </div>
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹600 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Urine Examination Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Colour Urine </li>
              <li>Transparency Urine </li>
              <li>Sp.Gravity Urine </li>
              <li>Ph Urine </li>
              <li>Epithelial Cell </li>
              <li>Bacteria </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Leucocytes (Esterase ) </li>
              <li>Protein Urine </li>
              <li>Glucose Urine </li>
              <li>Ketone Bodies Urine</li>
              <li>Red Blood Cell </li>
              <li>Yeast </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Urobilinogen Urine </li>
              <li>Bilirubin Urine </li>
              <li>Blood Urine </li>
              <li>Nitrite </li>
              <li>Leucocyte </li>
              <li>Crystals </li>
            </ul>
          </div>
        </div>
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹150 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Creatinine Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹200 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Thyroid Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹490 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Urine Culture Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹850 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Captain's Health Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>CBC</li>
              <li>Lipid Profile</li>
              <li>Diabetes Profile (HbA1c, FBS)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Thyroid Function Test (Free T3, Free T4 & TSH)</li>
              <li>Kidney Function</li>
              <li>Liver</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Function Test Urine Routine</li>
              <li>Vitamin D</li>
              <li>Calcium</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="actual-price-section-button">
            <span>
              Actual
              <br /> Price
            </span>
            <button class="actual-price-btn">₹5500 </button>
            <p class="empty-div-cut"></p>
          </div>
          <div class="offer-price-section-button">
            <span>
              Offer
              <br /> Price
            </span>
            <button class="offer-price-btn">₹1599 </button>
          </div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">KFT Package</span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Urea Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Creatinine Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Uric Acid Test</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹405 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Renal Function Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Urea Test</li>
              <li>Sodium Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Creatinine Test</li>
              <li>Potassium Test</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Uric Acid Test</li>
              <li>Chloride Test</li>
            </ul>
          </div>
        </div>
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹600 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Urine Examination Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Colour Urine</li>
              <li>Transparency Urine</li>
              <li>Sp.Gravity Urine</li>
              <li>Ph Urine</li>
              <li>Epithelial Cell</li>
              <li>Bacteria</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Leucocytes (Esterase )</li>
              <li>Protein Urine</li>
              <li>Glucose Urine</li>
              <li>Ketone Bodies Urine</li>
              <li>Red Blood Cell</li>
              <li>Yeast</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Urobilinogen Urine</li>
              <li>Bilirubin Urine</li>
              <li>Blood Urine</li>
              <li>Nitrite</li>
              <li>Leucocyte</li>
              <li>Crystals</li>
            </ul>
          </div>
        </div>
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹150 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Creatinine Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹200 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Thyroid Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹490 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Urine Culture Test </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹850 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Captain's Health Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>CBC</li>
              <li>Lipid Profile</li>
              <li>Diabetes Profile (HbA1c, FBS)</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Thyroid Function Test (Free T3, Free T4 & TSH)</li>
              <li>Kidney Function</li>
              <li>Liver</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Function Test Urine Routine</li>
              <li>Vitamin D</li>
              <li>Calcium</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="actual-price-section-button">
            <span>
              Actual
              <br /> Price
            </span>
            <button class="actual-price-btn">₹5500 </button>
            <p class="empty-div-cut"></p>
          </div>
          <div class="offer-price-section-button">
            <span>
              Offer
              <br /> Price
            </span>
            <button class="offer-price-btn">₹1599 </button>
          </div>
        </div>
      </div> */}

      <div class="how-it-works-container">
        <h4>How It Works</h4>
        <div class="howit-works-info-container">
          <div class="how-it-works-box">
            <img src={howItWorks1} alt="" />
            <p>
              Share your <br />
              details with us
            </p>
          </div>
          <div class="how-it-works-box">
            <img src={howItWorks2} alt="" />
            <p>
              Schedule the test <br />
              at your home
            </p>
          </div>
          <div class="how-it-works-box">
            <img src={howItWorks3} alt="" />
            <p>
              Our representative <br />
              would visit your home
            </p>
          </div>
          <div class="how-it-works-box">
            <img src={howItWorks4} alt="" />
            <p>
              Get your <br />
              reports online
            </p>
          </div>
        </div>
      </div>
      <div class="anytime-anywhere-container">
        <h4>Health Check-Ups</h4>
        <h3>ANYTIME. ANYWHERE</h3>
        <p>Book a health check package and receive your online smart report</p>
      </div>

      <div class="our-commitment-container">
        <h4 class="section-heading">Our Commitment</h4>
        <div class="insider-comm-box">
          <div class="commitment-info-container">
            <div class="commitment-info">
              <img src={commitmentIcon2} className="commitment-icon" alt="" />
              <h4>Safety First</h4>
              <p>Ensuring a safe and comfortable testing process.</p>
            </div>
            <div class="commitment-info">
              <img src={commitmentIcon3} className="commitment-icon" alt="" />
              <h4>Quality Care</h4>
              <p>
                Our team is dedicated to providing personalized care and
                support.
              </p>
            </div>
            <div class="commitment-info">
              <img src={taticon} className="commitment-icon" alt="" />
              <h4>Quick Turnaround Time</h4>
              <p>
                Providing comprehensive test reports within a swift 24-hour
                turnaround
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <h4 class="section-heading m-top-set">About Neuberg Diagnostics</h4>

      <div class="about-us-section-container">
        <div class="about-us-section-left">
          <p>
            Neuberg Diagnostics, headquartered in Chennai, is one of India's
            leading diagnostic service providers, with its presence in India,
            UAE, South Africa and USA. The laboratories are accredited by CAP* &
            NABL*. The group has created accessibility to state-of-the art
            diagnostic technologies and has some of the finest Clinical
            Pathologists. Biochemists, Geneticists and several other certified
            clinical lab professionals, with the capability to perform over 6000
            varieties of pathological investigations.
          </p>
          <p>
            The group focuses on prevention, wellness programs and Structured
            Processing Disease Management programs for rare diseases using the
            most advanced technologies assisted by Data science and Al tools.
            Currently. we are processing over 30 million tests every year,
            generating quality and accurate reports with 150+ labs, 10,000+
            touch points in India & other regions.
          </p>
        </div>
        <div class="about-us-section-right">
          <img
            src="images/about-section-banner.jpg"
            alt=""
            class="about-img-banner"
          />
        </div>
      </div> */}

      {/*<div class="footer-section">
        <div class="footer-logo">
          <img src="images/neuberg-footer-logo.png" alt="" />
        </div>

        <div class="neuberg-locations">
          <h6>Neuberg INDIA</h6>

          <p>
            Andhra Pradesh | Bihar | Chhattisgarh | Delhi NCR | Gujarat |
            Haryana | Jammu and Kashmir | Karnataka | Kerala I Madhya Pradesh |
            Maharashtra | Odisha | Punjab | Rajasthan | Tamil Nadu | Telangana |
            Uttar Pradesh | West Bengal
          </p>
        </div>

        <div class="neuberg-abroad-locations">
          <h4>SOUTH AFRICA | UAE | USA</h4>
        </div>

        <div class="contact-section-footer">
          <div class="left-side-contact">
            <div class="icon-call-to-book">
              <img src="images/call-icon.png" alt="" />
              <span>Call now to book</span>
            </div>
            <div>
              <a href="tel:<?= $max_var['phone_no']; ?>"> </a>
            </div>
          </div>
          <div class="right-side-contact">
            <p>
              © Neuberg Diagnostics Pvt. Ltd. <br /> All rights reserved.
            </p>
          </div>
        </div>
      </div>*/}
    </div>
  );
}
