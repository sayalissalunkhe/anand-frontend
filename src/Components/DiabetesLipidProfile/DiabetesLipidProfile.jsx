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
import taticon from "../../assets/images/tat_icon.png";
import dhoniBannerImg from "../../assets/images/dhoni-img.png";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function DiabetesLipidProfile() {
  const [open, setOpen] = useState(true);
  const [Loading, setLoading] = useState(false);

  
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
      gtag('config', 'AW-10841898141/GDwECMeVpv0YEJ356LEo', {
        'phone_conversion_number': '+91 8951869839'
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
    setLoading(true);
    data.page = "DIABESTES LIPID PROFILE";
    data.page_url = window.location.href;
    data.notes = notesDataString;
    axios.post(API_URL.REACH_US, data).then((res) => {
      // FormResponse()
      navigate("/anand-at-home-thank-you");
      setLoading(false);
      reset();
      setOpen(!open);
    });
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
          <span class="health-check-heading"> DIABETES AND LIPID</span>
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
                <p>
                  Please enter your details and we will reach out to you as
                  soon as we can.
                </p>
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
          Know your numbers, safeguard your health with our Diabetes and Lipid
          Tests
        </h4>
        <p>
          Discover the importance of testing for your well-being with our
          Diabetes and Lipid Profile. Ensure your body's optimal functioning by
          understanding blood sugar levels and cholesterol. Explore different
          tests, learn their procedures, and unlock the benefits of proactive
          health monitoring. Book your tests today for a step towards informed
          well-being.
        </p>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Diabetes Tests </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Glucose - Fasting - ₹80</li>
              <li>Glucose - Post Prandial - ₹80 </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Glucose -  Random - ₹80</li>
              <li>Glyco Hemoglobin (HbA1C) - ₹775</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Insulin Fasting - ₹1089</li>
              <li>C-Peptide level - ₹1276</li>
            </ul>
          </div>
        </div>

        {/* <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹500 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div> */}
      </div>
      {/* <div class="individual-test-section">
        <div class="individual-pricing-main-container">
          <div class="individual-price-container">
            <div class="individual-price-tests-name">
              <ul class="m-left-set">
                <li>
                  <div>Glucose – Fasting</div>
                  <div>₹80</div>
                </li>
                <li>
                  <div>Glucose – Post Prandial</div>
                  <div>₹75</div>
                </li>
                <li>
                  <div>Glucose – Random</div>
                  <div>₹80</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="individual-price-container">
            <div class="individual-price-tests-name">
              <ul class="ul-margin-set m-left-set">
                <li>
                  <div>Glyco Hemoglobin (HbA1C)</div>
                  <div>₹500</div>
                </li>
                <li>
                  <div>Insulin Fasting</div>
                  <div>₹900</div>
                </li>
                <li>
                  <div>C-Peptide level</div>
                  <div>₹800</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Lipid Profile Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Cholesterol</li>
              <li>HDL Cholesterol </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Triglyceride</li>
              <li>VLDL</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Chol/HDL</li>
              <li>LDL Cholesterol (Direct)</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹700 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">
            Lipid Profile Comprehensive Package{" "}
          </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Cholesterol</li>
              <li>HDL Cholesterol </li>
              <li>Non-HDL Cholesterol labcore</li>
              <li>Triglyceride</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>VLDL</li>
              <li>LDL Cholesterol (Direct)</li>
              <li>LDL Cholesterol</li>
              <li>Chol/HDL</li>
              <li> APO A & B</li>
            </ul>
          </div>
          {/* <div>
            <ul>
              <li>Apolipoprotein A - 1</li>
              <li>Apolipoprotein B</li>
              <li>Apolipoprotein (B / A1 Ratio)</li>
            </ul>
          </div> */}
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹1250 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      {/* <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Diabetes Tests </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Glucose – Fasting - ₹80</li>
              <li>Glucose – Post Prandial - ₹75</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Glucose – Random - ₹80</li>
              <li>Glyco Hemoglobin (HbA1C) - ₹500</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Insulin Fasting - ₹900</li>
              <li>C-Peptide level - ₹800</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Lipid Profile Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Cholesterol</li>
              <li>HDL Cholesterol </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Triglyceride</li>
              <li>VLDL</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Chol/HDL</li>
              <li>LDL Cholesterol (Direct)</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹500 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">
            Lipid Profile Comprehensive Package{" "}
          </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Cholesterol</li>
              <li>HDL Cholesterol </li>
              <li>Non-HDL Cholesterol labcore</li>
              <li>Triglyceride</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>VLDL</li>
              <li>LDL Cholesterol (Direct)</li>
              <li>LDL Cholesterol</li>
              <li>Chol/HDL</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Apolipoprotein A - 1</li>
              <li>Apolipoprotein B</li>
              <li>Apolipoprotein (B / A1 Ratio)</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹780 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Diabetes Tests </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Glucose – Fasting - ₹80</li>
              <li>Glucose – Post Prandial - ₹75</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Glucose – Random - ₹80</li>
              <li>Glyco Hemoglobin (HbA1C) - ₹500</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Insulin Fasting - ₹900</li>
              <li>C-Peptide level - ₹800</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Lipid Profile Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Cholesterol</li>
              <li>HDL Cholesterol </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Triglyceride</li>
              <li>VLDL</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Chol/HDL</li>
              <li>LDL Cholesterol (Direct)</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹500 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">
            Lipid Profile Comprehensive Package{" "}
          </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Cholesterol</li>
              <li>HDL Cholesterol </li>
              <li>Non-HDL Cholesterol labcore</li>
              <li>Triglyceride</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>VLDL</li>
              <li>LDL Cholesterol (Direct)</li>
              <li>LDL Cholesterol</li>
              <li>Chol/HDL</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Apolipoprotein A - 1</li>
              <li>Apolipoprotein B</li>
              <li>Apolipoprotein (B / A1 Ratio)</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹780 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Diabetes Tests </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Glucose – Fasting - ₹80</li>
              <li>Glucose – Post Prandial - ₹75</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Glucose – Random - ₹80</li>
              <li>Glyco Hemoglobin (HbA1C) - ₹500</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Insulin Fasting - ₹900</li>
              <li>C-Peptide level - ₹800</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">Lipid Profile Package </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Cholesterol</li>
              <li>HDL Cholesterol </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Triglyceride</li>
              <li>VLDL</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Chol/HDL</li>
              <li>LDL Cholesterol (Direct)</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹500 </button>
          </div>
          <div class="price-section-dummy-box"></div>
        </div>
      </div>

      <div class="book-captain-health-container">
        <div class="check-health-heading-container">
          <span class="health-check-heading">
            Lipid Profile Comprehensive Package{" "}
          </span>
        </div>
      </div>
      <div class="tax-saver-parent-container">
        <div class="tax-saver-check-container">
          <div>
            <ul>
              <li>Cholesterol</li>
              <li>HDL Cholesterol </li>
              <li>Non-HDL Cholesterol labcore</li>
              <li>Triglyceride</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>VLDL</li>
              <li>LDL Cholesterol (Direct)</li>
              <li>LDL Cholesterol</li>
              <li>Chol/HDL</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Apolipoprotein A - 1</li>
              <li>Apolipoprotein B</li>
              <li>Apolipoprotein (B / A1 Ratio)</li>
            </ul>
          </div>
        </div>

        <div class="price-section-container">
          <div class="price-section-dummy-box"></div>
          <div class="price-section-button">
            <button>Price ₹780 </button>
          </div>
          <div class="price-section-dummy-box"></div>
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
    </div>
  );
}
