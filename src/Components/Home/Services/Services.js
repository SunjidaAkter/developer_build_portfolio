import React, { Fragment, useEffect, useState } from "react";

import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Fragment>
      <div id="services" className="bg-[#F8FBFE] py-9">
        <div data-aos="fade-up" className="servies-aria custom_container ">
          <div>
            <div className="conent-aria text-center">
              <h1 className="text-[#124265] pt-5 font-bold text-3xl mt-4 uppercase">
                Services
              </h1>
              <p className="mt-4 w-[90%] mx-auto text-[#919191]">
                {" "}
                We strive to provide all kinds of development-related services.
              </p>
            </div>
          </div>
          <section
            data-aos="zoom-in"
            data-aos-delay="100"
            className="grid px-5 lg:grid-cols-3 md:grid-cols-2  py-10 services gap-6"
          >
            {services.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                key={service?._id}
                className="lg:w-[360px]  mx-auto cursor-pointer "
              >
                <div className={`icon-box ${service?.color}`}>
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                      ></path>
                    </svg>
                    <i className={`fa-solid text-primary ${service?.icon}`}></i>
                  </div>
                  <h4>
                    <a href="!#">{service?.title}</a>
                  </h4>
                  <p className="text-gray-500">{service?.des}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
