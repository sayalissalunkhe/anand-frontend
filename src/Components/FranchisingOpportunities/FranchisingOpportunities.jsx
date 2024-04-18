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
                  Neuberg Anand Reference Laboratory is on the lookout for partners eager to join us and assist in widening our network to provide top-tier diagnostic solutions throughout Karnataka. Currently, as a prominent diagnostic entity, we boast more than 200 collection centers across Karnataka. We are excited to offer franchise opportunities right here in Karnataka, inviting you to become a part of our ongoing success story.

                </p>
                <p>
                  Partnering with us means stepping into a conducive environment tailored for growth within the booming healthcare sector of Karnataka. We present remarkable opportunities for driven individuals who possess keen business insight and a passion for implementing the Neuberg Anand Diagnostic Laboratory business model successfully in their local areas.
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
