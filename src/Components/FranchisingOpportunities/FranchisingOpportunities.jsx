import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../assets/images/inner-banner-8.webp";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import { useDispatch } from "react-redux";

export default function FranchisingOpportunities() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const dispatch = useDispatch()


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
          'send_to': 'AW-10841898141/3fWKCNPbr6kZEJ356LEo',
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
      'send_to': 'AW-10841898141/3fWKCNPbr6kZEJ356LEo',
      'event_callback': callback
    });
  };

  const onSubmit = (data) => {
    dispatch(setLoading(true))

    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("page_url", window.location.href);
    formdata.append("city", data.city);
    formdata.append("email", data.email);
    formdata.append("mobile", data.mobile);
    formdata.append("message", data.message);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    // Call the gtag_report_conversion function passing the desired URL
    gtag_report_conversion('https://www.anandlab.com/anand-at-home-thank-you');

    fetch(API_URL.FRANCHISING_OPPORTUNITIES, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.Errors === false) {
          dispatch(setLoading(false))
          reset()
          FormResponse()
        }
      })
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    document.title = "Franchising Opportunities";
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <section className="inner-banner">
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="caption-details bnr-txt">
                  <ul>
                    <li>
                      <Link to="/"> Home </Link>
                    </li>
                    <li> / </li>
                    <li> Doctors </li>
                    <li> / </li>
                    <li> Franchising Opportunities </li>
                  </ul>
                  <h1>
                    Become a Partner<br></br> with us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="abt-secton forumn-frm">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="common-heading">
                <h2>
                  {" "}
                  <span className="inlne">Franchising </span> Opportunities
                </h2>
                <p>
                  We are looking for partners who can grow with us and help us expand our reach to offer state-of-the-art diagnostic services across the country. Today Anand Diagnostic Laboratory is a leading diagnostic player with over 100+ clinical laboratories and 1500+ collection centres across India. We invite you to be a franchisee and be part of this growth story.
                </p>
                <p>
                  An association with us offers an ideal environment and
                  platform for a partner to be part of the growing Indian
                  healthcare industry. We offer exciting opportunities to
                  enthusiastic individuals with a strong business acumen and
                  interest in replicating the Anand Diagnostic Laboratory
                  business model successfully in their locality.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="green-bg ps-rel animated fadeInRight">
                <h4 className="mb-3 text-center text-white">Partner with us</h4>
                <form onSubmit={handleSubmit(onSubmit)} >
                  <div className="formdata">
                    <small className="text-light">Name</small>
                    <ErrorMessage
                      errors={errors}
                      name="name"
                      render={({ message }) => (
                        <small className="text-danger ml-2">
                          * {message}
                        </small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="text"
                      name="name"
                      {...register("name", {
                        required: "This is required.",
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Email</small>
                    <ErrorMessage
                      errors={errors}
                      name="email"
                      render={({ message }) => (
                        <small className="text-danger ml-2">
                          * {message}
                        </small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="email"
                      name="email"
                      {...register("email", {
                        required: "This is required.",
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: 'Invalid email address!'
                        }
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Mobile</small>
                    <ErrorMessage
                      errors={errors}
                      name="mobile"
                      render={({ message }) => (
                        <small className="text-danger ml-2">
                          * {message}
                        </small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="tel"
                      name="mobile"
                      {...register("mobile", {
                        required: "This is required.",
                        pattern: {
                          value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                          message: 'Not a valid Phone Number'
                        }
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">City</small>
                    <ErrorMessage
                      errors={errors}
                      name="city"
                      render={({ message }) => (
                        <small className="text-danger ml-2">
                          * {message}
                        </small>
                      )}
                    />
                    <input
                      className="form-control jsrequired"
                      type="text"
                      name="city"
                      {...register("city", {
                        required: "This is required.",
                      })}
                    />
                  </div>
                  <div className="formdata">
                    <small className="text-light">Message</small>
                    <ErrorMessage
                      errors={errors}
                      name="message"
                      render={({ message }) => (
                        <small className="text-danger ml-2">
                          * {message}
                        </small>
                      )}
                    />
                    <textarea
                      className="form-control"
                      name="msg"
                      id="msg"
                      {...register("message", {
                        required: "This is required.",
                      })}
                    ></textarea>
                  </div>
                  <div className="formdata">
                    <input
                      type="submit"
                      name="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
