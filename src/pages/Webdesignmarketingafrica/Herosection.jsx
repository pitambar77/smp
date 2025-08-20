import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BASE_URL } from "../../api/config";
import FormComponent from "../../components/FormComponent";

export default function Herosection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("I need more traffic to my website");
  const [showForm, setShowForm] = useState(false);
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/banner`)
      .then((res) => {
        setBanner(res.data);
      })
      .catch((err) => {
        console.error("Error fetching banner:", err);
      });
  }, []);

  if (!banner) return <div className="mt-10 text-center">Loading...</div>;

  const options = [
    "Want more qualified leads?",
    "I need more customers",
    "I need more leads",
    "I need more sales",
    "I need help with brand awareness",
    "All of the above",
  ];

  return (
    <>
      <div className=" hidden sm:block bg-[rgba(61,114,194,0.95)] relative w-full overflow-hidden md:pt-[200px]   lg:pt-[120px] ">
        <div className=" max-w-[1140px] mx-auto   ">
          <div className=" lg:max-w-[60%] md:max-w-[58%] sm:pr-[10px] pb-[38px]">
            <div className=" pb-[35px] md:px-4 xl:px-0 ">
              {!showForm ? (
                <>
                  <h1 className=" font-[700]  xl:text-[50px] lg:text-[48px] md:text-[32px] text-[#fff] leading-[1.1] pb-[20px] text-start">
                    Bring More Travelers to Africa with Us

                  </h1>
                  <p className=" lg:text-[20px] md:text-[16px] text-[#fff] leading-[28px] pb-[20px] md:pr-12 lg:pr-0 text-start">
                  From boutique safari lodges to top tour operators across Africa - we create world class websites that turn visitors into adventurers. Trusted by top operators across Tanzania, Kenya, South Africa, and beyond.


                  </p>

                  <div className="flex  shadow-[0_12px_18px_0_rgb(0_0_0_/_15%)] mt-1.5 ">
                    <div
                      className="relative bg-white w-[100%] "
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      <button
                        onClick={() => setOpen(!open)}
                        className=" h-[70px] lg:px-5 md:px-2 text-left text-[#787878] lg:text-[20px] md:text-[18px] font-semibold leading-inherit absolute  rounded-l-[4px]"
                      >
                        {selected}
                      </button>

                      {open && (
                        <div className="absolute left-0 z-30 w-full mt-1 bg-white border rounded shadow-md top-full">
                          {options.map((option) => (
                            <div
                              key={option}
                              onClick={() => {
                                setSelected(option);
                                setOpen(false);
                              }}
                              className="px-5 py-1 hover:bg-gray-300 text-[#787878] text-[18px] font-[500] cursor-pointer"
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div
                      onClick={() => setOpen(!open)}
                      className="w-[50px] bg-white flex items-center justify-center cursor-pointer"
                    >
                      <FaChevronDown className=" w-[30px] lg:pr-[10px] md:pr-0 text-[#787878]  text-[22px] font-[700] text-center" />
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowForm(true)}
                      className="bg-[#FF4F4F] border-[#ff5254] cursor-pointer border  hover:bg-[#011833] hover:border-[#011833] duration-500 ease-in-out hover:text-[#ff5254] w-[60%] h-[70px] py-[5px] lg:px-[8px] px-2 text-white tracking-[1px] text-[17px] font-semibold rounded-r-[4px]"
                    >
                      GET A CUSTOM QUOTE
                    </button>
                  </div>
                </>
              ) : (
                <FormComponent />
              )}
            </div>

            <div className=" grid grid-cols-4 lg:gap-5 md:gap-2 xl:gap-[30px]  md:px-4 lg:px-4 lg:pb-10 xl:px-0 md:pr-14 lg:pr-5 mt-2">
              <img src={`${BASE_URL}/uploads/${banner.logo1}`} alt="logo1" />
              <img src={`${BASE_URL}/uploads/${banner.logo2}`} alt="logo2" />
              <img src={`${BASE_URL}/uploads/${banner.logo3}`} alt="logo3" />
              <img src={`${BASE_URL}/uploads/${banner.logo4}`} alt="logo4" />
            </div>
          </div>
        </div>

        <div className="absolute md:-right-50.5 lg:-right-50.5 xl:-right-15.5 top-[10.9%] md:pt-2 md:pr-10 lg:pr-0  lg:pt-0 2xl:right-[calc((100vw-1440px)/2-87px)]">
          <img
            src={`${BASE_URL}/uploads/${banner.image}`}
            alt=""
            className="object-contain lg:max-w-none md:max-w-129 "
          />
        </div>
        {/* <div className="absolute md:-right-50.5 lg:-right-42.5 xl:-right-9.5 top-[23.5%] md:pt-2 md:pr-10 lg:pr-0 xl:pt-0 lg:pt-2 2xl:right-[calc((100vw-1440px)/2-87px)]">
          <img
            src={`${BASE_URL}/uploads/${banner.image}`}
            alt=""
            className="object-contain xl:max-w-none md:max-w-129 lg:max-w-150 "
          />
        </div> */}
      </div>

      {/* ✅ Mobile Section */}
      <div className="block sm:hidden bg-[rgba(61,114,194,0.95)] relative w-full overflow-hidden pt-[150px]  px-4">
        <div className="">
          

          {!showForm ? (
            <>
            <h1 className="  font-[700] text-[30px] leading-[1.2] pb-[16px] text-center text-white">
            {banner.heading}
          </h1>
          <p className="text-[16px] leading-[26px] pb-[24px] text-center text-white">
            {banner.subheading}
          </p>
              {/* Dropdown + chevron row */}
              <div className="flex shadow-[0_12px_18px_0_rgb(0_0_0_/_15%)] mt-1.5">
                <div
                  className="relative w-full bg-white"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <button
                    onClick={() => setOpen(!open)}
                    className=" px-2  py-3.5  text-left text-[#787878] text-[16px] font-semibold md:px-[2px] md:py-[5px] rounded-l-[4px] w-full md:w-[50px]"
                  >
                    {selected}
                  </button>
                  {open && (
                    <div className="absolute top-full left-0 mt-1 w-full bg-white border shadow-md rounded z-30 max-h-[200px] overflow-y-auto">
                      {options.map((option) => (
                        <div
                          key={option}
                          onClick={() => {
                            setSelected(option);
                            setOpen(false);
                          }}
                          className="px-5 py-2 hover:bg-gray-200 text-[#787878] text-[18px] font-[500] cursor-pointer"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  onClick={() => setOpen(!open)}
                  className="w-[50px] bg-white flex items-center justify-center cursor-pointer"
                >
                  <FaChevronDown className="w-[30px] pr-[10px] text-[#787878] text-[22px] font-[700]" />
                </div>
              </div>

              {/* Quote button */}
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#FF4F4F] border-[#ff5254] text-white
    border cursor-pointer rounded w-full
    md:px-[2px] md:py-[5px] p-3.5 tracking-[1px] text-[14px] font-semibold mt-4
 
    hover:bg-[#011833] hover:border-[#011833] hover:text-[#ff5254]
    active:bg-[#011833] active:border-[#011833] active:text-[#ff5254]
 
    duration-500 ease-in-out"
              >
                GET A FREE QUOTE
              </button>
            </>
          ) : (
            <FormComponent />
          )}

          {/* Logos grid */}
          <div className="grid grid-cols-4 gap-2 mt-8">
            {[banner.logo1, banner.logo2, banner.logo3, banner.logo4].map(
              (logo, i) => (
                <img
                  key={i}
                  src={`${BASE_URL}/uploads/${logo}`}
                  alt={`logo${i + 1}`}
                  className="object-contain "
                />
              )
            )}
          </div>

          <div className="flex justify-center mt-8 ">
            <img
              src={`${BASE_URL}/uploads/${banner.image}`}
              alt="Mobile Banner"
              className=" w-[420px]  object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
