import React, { useEffect, useState } from "react";
import RequestForm from "../../../components/RequestForm";

const features = [
  {
    icon: (
       <svg
        width="62px"
        height="58px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ff5254"
      >
        <g fill="#ff5254" fillRule="nonzero">
          <path d="M15.75,2 C16.9926407,2 18,3.00735931 18,4.25 L18,19.75 C18,20.9926407 16.9926407,22 15.75,22 L8.25,22 C7.00735931,22 6,20.9926407 6,19.75 L6,4.25 C6,3.00735931 7.00735931,2 8.25,2 L15.75,2 Z M15.75,3.5 L8.25,3.5 C7.83578644,3.5 7.5,3.83578644 7.5,4.25 L7.5,19.75 C7.5,20.1642136 7.83578644,20.5 8.25,20.5 L15.75,20.5 C16.1642136,20.5 16.5,20.1642136 16.5,19.75 L16.5,4.25 C16.5,3.83578644 16.1642136,3.5 15.75,3.5 Z M13.2488709,17.4999983 C13.663084,17.4993773 13.9993756,17.8346579 13.9999983,18.2488709 C14.0006227,18.663084 13.6653421,18.9993756 13.2511291,18.9999983 L10.7511291,19.0037653 C10.336916,19.0043862 10.0006244,18.6691057 9.99999829,18.2548926 C9.99937729,17.8406795 10.3346579,17.5043879 10.7488709,17.5037644 L13.2488709,17.4999983 Z M14.5,8.99862083 C14.7454599,8.99862083 14.9496084,9.175496 14.9919443,9.4087452 L15,9.49862083 L15,15.5012805 C15,15.7467404 14.8231248,15.9508889 14.5898756,15.9932248 L14.5,16.0012805 L9.5,16.0012805 C9.25454011,16.0012805 9.05039163,15.8244053 9.00805567,15.5911561 L9,15.5012805 L9,9.49862083 C9,9.25316095 9.17687516,9.04901246 9.41012437,9.0066765 L9.5,8.99862083 L14.5,8.99862083 Z M14.5,5 C14.7454599,5 14.9496084,5.17687516 14.9919443,5.41012437 L15,5.5 L15,7.50459198 C15,7.75005187 14.8231248,7.95420035 14.5898756,7.99653631 L14.5,8.00459198 L9.5,8.00459198 C9.25454011,8.00459198 9.05039163,7.82771682 9.00805567,7.59446761 L9,7.50459198 L9,5.5 C9,5.25454011 9.17687516,5.05039163 9.41012437,5.00805567 L9.5,5 L14.5,5 Z" />
        </g>
      </svg>
     
    ),
    title: "Device Optimized Website",
    description:
    <>Nowadays, the scope of your target audience is everywhere. With the growth in technology, your <span className=" font-semibold"> African Safari Website </span> also needs to compatible to every device so don’t miss out on an enquiry.</>,
  },
  {
    icon: (
      <svg
        fill="#ff5254"
        width="62px"
        height="58px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
      >
        <g>
          <path d="M27,3c0,-0.552 -0.448,-1 -1,-1l-20,-0c-0.552,0 -1,0.448 -1,1l-0,26c0,0.552 0.448,1 1,1l20,-0c0.552,0 1,-0.448 1,-1l0,-26Zm-2,1l0,24c-0,-0 -18,-0 -18,-0c-0,-0 -0,-24 -0,-24l18,0Zm-14,23l10,-0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-10,-0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Zm2,-3l6,0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-6,0c-0.552,-0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Zm0,-7.672l0,2.116c-0,0.678 0.269,1.328 0.749,1.807c0.479,0.48 1.129,0.749 1.807,0.749c0.292,0 0.596,0 0.888,0c0.678,0 1.328,-0.269 1.807,-0.749c0.48,-0.479 0.749,-1.129 0.749,-1.807l-0,-2.116c1.209,-1.484 2,-3.759 2,-5.328c0,-2.76 -2.24,-5 -5,-5c-2.76,0 -5,2.24 -5,5c0,1.569 0.791,3.844 2,5.328Zm4.503,-1.328c0.902,-1.126 1.497,-2.823 1.497,-4c0,-1.656 -1.344,-3 -3,-3c-1.656,0 -3,1.344 -3,3c0,1.177 0.595,2.874 1.497,4l0.503,0l-0,-1.955c0,0 -1.324,-2 0.001,-2c0,0 0,0 0,0c0.348,0 0.675,0.089 0.96,0.245c0.302,-0.184 0.658,-0.29 1.038,-0.29c-0,-0 -0,-0 -0,-0c1.325,0 0.001,2 0.001,2l0,2l0.503,0Z" />
        </g>
      </svg>
    ),
    title: "Content That Converts",
    description:
     <>Having a great knowledge about your <span className=" font-semibold"> African Safari Destinations </span> and presenting them with even greater  <span className=" font-semibold"> African Safari Itineraries </span> is one of the most important. When the content reflects quality, the conversion also increases.</>,
  },
  {
    icon: (
      <svg
        width="62px"
        height="58px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ff5254"
      >
        <path
          fill="#ff5254"
          fillRule="evenodd"
          d="M11,16 C12.1045695,16 13,16.8954305 13,18 C13,19.1045695 12.1045695,20 11,20 C9.8954305,20 9,19.1045695 9,18 C9,16.8954305 9.8954305,16 11,16 Z M4.74123945,13 C6.12195133,13 7.24123945,14.1192881 7.24123945,15.5 C7.24123945,16.8807119 6.12195133,18 4.74123945,18 C3.36052758,18 2.24123945,16.8807119 2.24123945,15.5 C2.24123945,14.1192881 3.36052758,13 4.74123945,13 Z M16.3193286,13.5 C17.4238981,13.5 18.3193286,14.3954305 18.3193286,15.5 C18.3193286,16.6045695 17.4238981,17.5 16.3193286,17.5 C15.2147591,17.5 14.3193286,16.6045695 14.3193286,15.5 C14.3193286,14.3954305 15.2147591,13.5 16.3193286,13.5 Z M18.5,9.31854099 C19.3284271,9.31854099 20,9.99011387 20,10.818541 C20,11.6469681 19.3284271,12.318541 18.5,12.318541 C17.6715729,12.318541 17,11.6469681 17,10.818541 C17,9.99011387 17.6715729,9.31854099 18.5,9.31854099 Z M2.5,6 C3.88071187,6 5,7.11928813 5,8.5 C5,9.88071187 3.88071187,11 2.5,11 C1.11928813,11 0,9.88071187 0,8.5 C0,7.11928813 1.11928813,6 2.5,6 Z M17.7857894,5.20724734 C18.3380741,5.20724734 18.7857894,5.65496259 18.7857894,6.20724734 C18.7857894,6.75953209 18.3380741,7.20724734 17.7857894,7.20724734 C17.2335046,7.20724734 16.7857894,6.75953209 16.7857894,6.20724734 C16.7857894,5.65496259 17.2335046,5.20724734 17.7857894,5.20724734 Z M8,0 C9.65685425,0 11,1.34314575 11,3 C11,4.65685425 9.65685425,6 8,6 C6.34314575,6 5,4.65685425 5,3 C5,1.34314575 6.34314575,0 8,0 Z M15.5,3 C15.7761424,3 16,3.22385763 16,3.5 C16,3.77614237 15.7761424,4 15.5,4 C15.2238576,4 15,3.77614237 15,3.5 C15,3.22385763 15.2238576,3 15.5,3 Z"
        />
      </svg>
    ),
    title: "Quick Loading Time",
    description:
    <>With a quick loading time, the bounce rate decreases, which means customers can spend more time on your website to learn about your services.</>,
  },
  {
    icon: (
      <svg
        width="62px"
        height="58px"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ff5254"
      >
        <path d="M0 0h48v48H0z" fill="none" />
        <g id="Shopicon">
          <path d="M44,22V4H26L4,26l18,18L44,22z M32,14c1.105,0,2,0.895,2,2c0,1.105-0.895,2-2,2c-1.105,0-2-0.895-2-2 C30,14.895,30.895,14,32,14z" />
        </g>
      </svg>
    ),
    title: "Brand Recognition",
    description:
    <>Your <span className=" font-semibold"> Web Design for African Safari Business </span> should go hand-in-hand with your customer journey and the kind of services you provide. This increases the brand visibility & awareness.</>,
  },
  {
    icon: (
      <svg
        height="62px"
        width="58px"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <circle
          style={{ fill: "#FFDC64" }}
          cx="255.998"
          cy="88.826"
          r="88.826"
        />
        <circle
          style={{ fill: "#FFF082" }}
          cx="255.998"
          cy="88.826"
          r="71.061"
        />
        <path
          style={{ fill: "#ff5254" }}
          d="M264.883,82.61V54.843c5.455,1.992,8.883,5.608,8.883,9.001c0,4.905,3.973,8.883,8.883,8.883
         s8.883-3.977,8.883-8.883c0-13.411-11.184-24.27-26.648-27.352v-0.962c0-4.905-3.973-8.883-8.883-8.883
         s-8.883,3.977-8.883,8.883v0.962c-15.464,3.082-26.648,13.941-26.648,27.352c0,18.74,14.732,26.638,26.648,31.199v27.767
         c-5.455-1.992-8.883-5.608-8.883-9.001c0-4.905-3.973-8.883-8.883-8.883c-4.91,0-8.883,3.977-8.883,8.883
         c0,13.411,11.184,24.27,26.648,27.352v0.962c0,4.905,3.973,8.883,8.883,8.883s8.883-3.977,8.883-8.883v-0.962
         c15.464-3.082,26.648-13.941,26.648-27.352C291.53,95.069,276.799,87.171,264.883,82.61z M238.235,63.844
         c0-3.393,3.428-7.01,8.883-9.001v20.727C239.858,71.816,238.235,68.476,238.235,63.844z M264.883,122.81v-20.727
         c7.259,3.752,8.883,7.093,8.883,11.725C273.765,117.202,270.338,120.818,264.883,122.81z"
        />
        <path
          style={{ fill: "#ff5254" }}
          d="M60.582,159.888v91.336c0,4.12,1.432,8.113,4.052,11.293l120.305,146.085v94.509
         c0,5.992,5.813,10.266,11.532,8.478l124.357-38.862c3.709-1.159,6.233-4.593,6.233-8.478v-55.648l120.305-146.085
         c2.619-3.181,4.052-7.173,4.052-11.293v-91.336c0-4.905-3.977-8.883-8.883-8.883H69.464
         C64.559,151.005,60.582,154.982,60.582,159.888z"
        />
        <path
          style={{ fill: "#ff5254" }}
          d="M450.202,257.597H61.798c0.68,1.767,1.616,3.438,2.836,4.92l120.305,146.085h142.122
         l120.307-146.085C448.588,261.034,449.523,259.363,450.202,257.597z"
        />
      </svg>
    ),
    title: "Customized Lead Generation Forms",
    description:
      "If a lead generation form is made in accordance with what your customer looks for, it can result in being a faster way to connect with your potential customers.",
  },
  {
    icon: (
      <svg
        width="62px"
        height="58px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        stroke="#000000"
        strokeWidth="0.00032"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h32v32H0z" />
          <path
            d="M27 0c2.7614237 0 5 2.23857625 5 5v22c0 2.7614237-2.2385763 5-5 5H6c-3.23839694 0-5.87757176-2.5655749-5.99586153-5.7750617L0 26v-8c0-3.2383969 2.56557489-5.8775718 5.77506174-5.9958615L6 12h6V5c0-2.76142375 2.2385763-5 5-5zm-15 14H6c-2.14219539 0-3.89107888 1.6839685-3.99510469 3.8003597L2 18v8c0 2.1421954 1.68396847 3.8910789 3.80035966 3.9951047L6 30h7.0005351c-.6282342-.835866-1.0005351-1.875055-1.0005351-3.0011995zM17.0856015 2.00070296 17 2c-1.5976809 0-2.9036609 1.24891996-2.9949073 2.82372721L14 5v22c0 1.5976809 1.24892 2.9036609 2.8237272 2.9949073L17 30h10c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272L30 27V5c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731L27 2l-.0856015.00070296c-.2061166.58222896-.7615518.99929704-1.4143985.99929704h-7c-.6528467 0-1.2082819-.41706808-1.4143985-.99929704zM26 15c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-8c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1zm-3-5c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-5c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1z"
            fill="#ff5254"
            fillRule="nonzero"
          />
        </g>
      </svg>
    ),
    title: "Easy User Experience",
    description:
      "Your African Safari Website needs to be built in such a way that whatever a visitor looks for can be navigated in an easy way and the valuable content should be found easily.",
  },
];

function Fundamental() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showForm]);
  return (
    <div>
      <div className="w-full  bg-[#f0f0f0] flex items-center justify-center px-4">
        <div className="max-w-[1140px] mx-auto text-center  py-[80px]">
          <h2 className="font-[Montserrat] font-bold text-[48px] text-center capitalize text-[#3467d8] leading-[1.4] m-0 px-0 pb-[15px]">
            The Fundamentals Of Content Marketing
          </h2>

          <h6 className="font-[Montserrat] font-normal text-[22px] text-center capitalize text-[#787878] leading-[1.4] mb-7">
            The Power of Visuals: Designing Impactful Content{" "}
          </h6>

          <p className=" font-[Montserrat] font-normal text-[17px] text-center text-[#787878] leading-inherit uppercase-normal px-[6%] pb-[20px]  ">
            Amidst the dynamic expanse of digital marketing, content marketing
            proves essential as a cornerstone strategy for shaping the brand
            identity of your safari and tours. This exploration delves into the
            fundamental principles that underscore successful content marketing,
            providing a comprehensive guide for businesses in the safari and
            tours industry keen on harnessing the compelling and strategic
            potential of visual content.\
          </p>

          <section className="mt-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-8">
                  <div className="w-8 h-8 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-[Montserrat] font-semibold text-[22px] text-left text-[#011833] m-0 p-0 pb-[5px] capitalize">
                      {feature.title}
                    </h3>
                    <p className="font-[Montserrat] font-medium text-[16px] text-left text-[#787878] m-0 p-0 min-h-[120px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center ">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#ff4d4d] text-white font-semibold px-[30px] py-3 rounded  cursor-pointer  hover:bg-[#011833] ease-in duration-500 hover:text-red-600 transition"
              >
                SCHEDULE CALL WITH AN EXPERT
              </button>
            </div>

            {showForm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 font-[Montserrat]">
                <div
                  className="  relative w-[90%] max-w-[600px] bg-[#3467d8] bg-gradient-to-t from-[#427fdf] to-[#396bb1] rounded-lg shadow-lg mt-[80px]
                                                                            animate-slide-down-fade"
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute cursor-pointer -top-6 -right-5 bg-red-400 hover:bg-[#396bb1] text-white hover:text-red-400 font-bold text-[32px] w-10 h-10 flex items-center justify-center shadow-md"
                  >
                    ×
                  </button>
                  <div className="text-white text-center py-8 -mt-5 rounded-t-lg">
                    <h3 className="text-[24px] font-medium leading-snug">
                      SCHEDULE CALL WITH AN EXPERT
                    </h3>
                    <div className="border-t border-white w-full mx-auto mt-4 -mb-4" />
                  </div>
                  <RequestForm />
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Fundamental;
