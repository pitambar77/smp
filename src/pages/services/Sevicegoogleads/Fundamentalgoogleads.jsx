import React, { useEffect, useState } from "react";
import RequestForm from "../../../components/RequestForm";

const features = [
  {
    icon: (
      <svg
        fill="#ff5254"
        width="60px"
        height="60px"
        viewBox="0 0 256 208"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52.362,31.178c0-15.658,12.526-28.286,28.285-28.286c15.658,0,28.285,12.627,28.285,28.286 
    c-0.101,15.759-12.728,28.285-28.285,28.285C64.99,59.463,52.362,46.836,52.362,31.178z 
    M208.384,152.493h-51.323V106.63c0-22.343-19.525-40.403-41.495-40.403H46.771
    c-24.12,0-44.782,20.9-44.771,41.495v84.082C1.972,201.123,8.553,205.988,15.104,206 
    c6.567,0.012,13.104-4.854,13.104-14.196v-81.898h8.736v96.002h85.174v-96.002h8.736
    l0.089,55.002c-0.058,9.531,5.833,13.591,11.923,13.792h65.519C226.251,178.701,
    226.251,152.493,208.384,152.493z 
    M214.542,31.821c21.792,0,39.458,17.666,39.458,39.458s-17.666,39.458-39.458,
    39.458s-39.458-17.666-39.458-39.458S192.75,31.821,214.542,31.821z 
    M239.423,108.474c-1.759,1.131-3.644,2.262-5.529,3.142c-5.906,2.765-12.44,
    4.398-19.352,4.398c-24.755,0-44.735-20.106-44.735-44.735c0-10.304,
    3.519-19.855,9.425-27.394l4.272-4.775l-2.388-3.016l-6.157-7.54l-4.901,
    4.021l6.66,8.294c-6.66,8.294-10.681,18.849-10.681,30.41c0,25.384,19.603,
    46.243,44.484,48.38v14.074h-15.959v8.042h41.217v-8.042h-16.462v-14.074
    c6.032-0.628,11.812-2.262,17.09-4.901l8.042,9.927l4.901-4.021l-7.414-9.173L239.423,108.474z"
        />
      </svg>
    ),
    title: "We reach out",
    description:
      "We would do a free analysis of your African Safari Tour Website and all the strategies that you are using to grow online. And if you already have any campaigns, where you have room to grow.",
  },
  {
    icon: (
      <svg
        height="60px"
        width="60px"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ff5254"
        stroke="#ff5254"
        strokeWidth="2.56"
      >
        <g>
          <g>
            <path
              fill="none"
              d="M121.1,101.1c-2.9,0-5.2-2.3-5.2-5.2c0-2.8,2.3-5.1,5.2-5.1c2.8,0,5.1,2.3,5.1,5.1 C126.2,98.8,123.9,101.1,121.1,101.1z"
            />
            <path
              fill="none"
              d="M79.5,95.9c-24.9,0-23.1,21.1-23.1,21.1c-6.2-7-10.1-16.3-10.1-26.4c0-22,17.8-39.7,39.7-39.7 c11.5,0,21.7,4.8,29,12.5C115,63.4,115.4,95.1,79.5,95.9z"
            />
            <path
              fill="none"
              d="M130.5,78.1c0.9,3.8,1.9,13.8,1.9,13.8l9.5,24.1c0.2,0.4,0.3,0.8,0.3,1.4 c0,2.1-1.6,3.6-3.7,3.6H132v13.1c0,10-7.7,17.9-17.7,17.9H107v8H58v-32.7c-11-8.4-17.5-21.4-17.5-36.1c0-25.4,20.6-46,45.9-46 C107.3,45.2,126.5,60.9,130.5,78.1z"
            />
            <circle cx="212.6" cy="53.4" r="12.9" />
          </g>
          <g>
            <circle cx="131.7" cy="219.3" r="15.7" />
            <circle cx="206.4" cy="219.3" r="15.7" />
            <circle cx="58.1" cy="219.3" r="15.7" />
            <path d="M149.9,237h-18h-18c-8.6,0-14,6-16,14h69C164.5,243,158.3,237,149.9,237z" />
            <path d="M224.6,237h-18h-18c-8.6,0-13.8,6-15.7,14h69C239.4,243,233,237,224.6,237z" />
            <path d="M76.2,237h-18h-18c-8.5,0-14.2,6-16.3,14h68.1C90.1,243,84.7,237,76.2,237z" />
            <g>
              <path d="M107,160v-8h7.3c10,0,17.7-7.9,17.7-17.9V121h6.5c2.1,0,3.7-1.5,3.7-3.6c0-0.5-0.1-0.9-0.3-1.3l-9.6-24.2 c0,0-1-10-1.9-13.8c-4-17.2-23.2-32.9-44.1-32.9c-25.3,0-45.9,20.5-45.9,46c0,14.7,6.5,27.7,17.5,36.1V160H107z M121.1,90.8 c2.8,0,5.1,2.3,5.1,5.1c0,2.8-2.3,5.2-5.1,5.2c-2.9,0-5.2-2.3-5.2-5.2C115.9,93.1,118.2,90.8,121.1,90.8z M56.4,117 c-6.2-7-10.1-16.3-10.1-26.4c0-22,17.8-39.7,39.7-39.7c11.5,0,21.7,4.8,29,12.5c0,0,0.5,31.7-35.5,32.5 C54.6,95.9,56.4,117,56.4,117z" />
              <polygon points="11,4 11,23 19,23 19,182 177,182 177,103 170,103 170,174 26,174 26,23 170,23 170,83 173.8,82.9 177,79.7 177,23 186,23 186,4" />
            </g>
            <path d="M228.6,69h-29c-4.1,0-8.4,1.5-11.6,4.6c0,0.1-9.7,9.5-13.7,13.4h-23c-1.1,0-2.1,0.5-2.9,1.1l-14.4-19.7 c-0.5-0.6-1.3-0.8-1.9-0.3c-0.6,0.5-0.7,1.3-0.3,1.9l14.7,20.4c-0.4,0.8-0.7,1.8-0.7,2.8c0,3.1,2.5,5.8,5.6,5.8H169h1h7v0 c2-0.1,2.8-0.8,3.7-1.6l11.5-11.5c0.3-0.3,0.8-0.5,1.2-0.5c0.9,0,1.6,0.7,1.6,1.6V186c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8v-55.9 c0-0.9,0.6-1.6,1.5-1.6c0.9,0,1.5,0.7,1.5,1.6v56c0,4.4,3.6,8,8,8s8-3.6,8-8V88.5c0-0.9,0.6-1.6,1.5-1.6s1.5,0.7,1.5,1.6v36 c0,3.1,2.8,5.6,6,5.6c3.1,0,5-2.6,6-5.7V85.3C245,76.4,237.4,69,228.6,69z" />
          </g>
        </g>
      </svg>
    ),
    title: "Understand your goals",
    description:
      "Before doing a precise analysis for the ad campaign that would work best for you, we first go deep into knowing what you are offering to your African Safari Customers.",
  },
  {
    icon: (
      <svg
        fill="#ff5254"
        width="60px"
        height="60px"
        viewBox="0 0 512 512"
        stroke="#ff5254"
        strokeWidth="5.632"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M281.167,409.359c-3.74,0-6.774,3.033-6.774,6.773v10.201H52.458V135.988h10.938c3.742,0,6.774-3.032,6.774-6.774 c0-3.741-3.033-6.773-6.774-6.773H45.684c-3.742,0-6.774,3.032-6.774,6.773v303.895c0,3.74,3.033,6.774,6.774,6.774h235.483 c3.74,0,6.774-3.034,6.774-6.774v-16.976C287.941,412.393,284.907,409.359,281.167,409.359z" />
          <path d="M326.975,337.393c-3.741,0-6.774,3.032-6.774,6.773v37.652H98.265V91.473h106.182c3.742,0,6.774-3.033,6.774-6.774 s-3.033-6.774-6.774-6.774H91.49c-3.741,0-6.774,3.033-6.774,6.774v303.894c0,3.742,3.033,6.774,6.774,6.774h235.484 c3.74,0,6.773-3.032,6.773-6.774v-44.426C333.748,340.425,330.715,337.393,326.975,337.393z" />
          <path d="M326.975,145.359c-3.741,0-6.774,3.033-6.774,6.774v89.826c0,3.741,3.033,6.774,6.774,6.774 c3.74,0,6.773-3.033,6.773-6.774v-89.826C333.748,148.393,330.715,145.359,326.975,145.359z" />
          <path d="M128.828,357.518h31.519c3.741,0,6.774-3.033,6.774-6.774v-69.582c0-3.741-3.033-6.774-6.774-6.774h-31.519 c-3.742,0-6.774,3.033-6.774,6.774v69.582C122.054,354.484,125.086,357.518,128.828,357.518z M135.602,287.936h17.97v56.033h-17.97 V287.936z" />
          <path d="M196.65,297.088c-3.742,0-6.774,3.032-6.774,6.773v46.882c0,3.741,3.033,6.774,6.774,6.774h31.519 c3.741,0,6.774-3.033,6.774-6.774v-23.201c0-3.741-3.033-6.774-6.774-6.774c-3.742,0-6.774,3.033-6.774,6.774v16.427h-17.97 v-40.107C203.424,300.12,200.392,297.088,196.65,297.088z" />
          <path d="M264.472,332.805c-3.74,0-6.774,3.033-6.774,6.774v11.164c0,3.741,3.034,6.774,6.774,6.774h31.52 c3.74,0,6.774-3.033,6.774-6.774v-11.164c0-3.741-3.034-6.774-6.774-6.774c-3.741,0-6.774,3.033-6.774,6.774v4.39h-17.971v-4.39 C271.246,335.838,268.212,332.805,264.472,332.805z" />
          <path d="M285.234,147.596c-2.646-2.645-6.933-2.646-9.579,0.001l-45.845,45.845c-2.646,2.646-2.646,6.934,0.001,9.58 c2.644,2.645,6.934,2.646,9.58-0.001l41.054-41.054l7.945,7.945l-50.506,50.506c-2.646,2.646-2.646,6.936,0,9.581 c1.323,1.322,3.057,1.984,4.791,1.984c1.733,0,3.467-0.662,4.79-1.984l55.297-55.296c1.271-1.271,1.984-2.994,1.984-4.791 c0-1.796-0.714-3.52-1.984-4.79L285.234,147.596z" />
          <path d="M133.228,241.125c1.323,1.321,3.057,1.983,4.791,1.983s3.468-0.662,4.791-1.983l17.884-17.885 c2.646-2.646,2.646-6.935,0-9.581c-2.646-2.645-6.935-2.645-9.581,0l-13.094,13.095l-7.946-7.946l30.621-30.62 c2.646-2.646,2.646-6.935,0-9.58c-2.646-2.645-6.935-2.645-9.581,0l-35.41,35.41c-2.646,2.646-2.646,6.935,0,9.581L133.228,241.125 z" />
          <path d="M465.489,330.97l-39.484-39.484c-2.646-2.645-6.933-2.645-9.579,0c-2.646,2.646-2.646,6.935,0,9.581l39.484,39.484 c2.35,2.351,3.645,5.476,3.645,8.8c0,3.323-1.295,6.448-3.645,8.8c-4.854,4.854-12.746,4.854-17.601,0l-62.422-62.422 c28.195-23.148,46.216-58.255,46.216-97.497c0-69.54-56.573-126.114-126.112-126.114c-69.54,0-126.114,56.574-126.114,126.114 s56.574,126.113,126.114,126.113c25.385,0,49.023-7.564,68.831-20.521l63.908,63.906c4.909,4.909,11.438,7.613,18.38,7.613 s13.471-2.704,18.379-7.613C475.625,357.596,475.625,341.104,465.489,330.97z M295.991,310.797 c-62.069,0-112.565-50.497-112.565-112.565c0-62.069,50.497-112.565,112.565-112.565c62.067,0,112.564,50.496,112.564,112.565 C408.556,260.3,358.059,310.797,295.991,310.797z" />
          <path d="M295.991,105.72c-51.012,0-92.512,41.501-92.512,92.512s41.5,92.511,92.512,92.511c51.011,0,92.51-41.5,92.51-92.511 S347.002,105.72,295.991,105.72z M295.991,277.193c-43.541,0-78.964-35.422-78.964-78.962s35.423-78.963,78.964-78.963 c43.539,0,78.962,35.423,78.962,78.963S339.53,277.193,295.991,277.193z" />
          <path d="M125.331,135.604v-9.918c0-3.741-3.033-6.774-6.774-6.774c-3.742,0-6.774,3.033-6.774,6.774v9.918 c0,3.742,3.033,6.774,6.774,6.774C122.298,142.379,125.331,139.347,125.331,135.604z" />
          <path d="M147.423,135.604v-21.235c0-3.741-3.033-6.774-6.774-6.774c-3.741,0-6.774,3.033-6.774,6.774v21.235 c0,3.742,3.033,6.774,6.774,6.774C144.39,142.379,147.423,139.347,147.423,135.604z" />
          <path d="M169.516,135.604v-3.455c0-3.741-3.033-6.774-6.774-6.774c-3.741,0-6.774,3.033-6.774,6.774v3.455 c0,3.742,3.033,6.774,6.774,6.774C166.483,142.379,169.516,139.347,169.516,135.604z" />
        </g>
      </svg>
    ),
    title: "Detailed analysis",
    description:
      "We will do a comprehensive analysis of what changes you can make today to grow profit. If we are able to convince you, then together we can achieve your goals.",
  },
  {
    icon: (
      <svg
        width="64px"
        height="64px"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ff5254"
        stroke="#ff5254"
        strokeWidth="0.00048"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path d="M0 0h48v48H0z" fill="none" />
          <g id="Shopicon">
            <path
              d="M35.23,18.781C37.491,17.367,39,14.863,39,12c0-4.418-3.582-8-8-8s-8,3.582-8,8c0,2.863,1.509,5.367,3.77,6.781 
        c-1.423,0.537-2.714,1.334-3.821,2.337C22.51,17.115,19.12,14,15,14c-4.418,0-8,3.582-8,8c0,2.863,1.509,5.367,3.77,6.781 
        C6.232,30.492,3,34.862,3,40h24c0-4.177-2.134-7.851-5.37-10H43C43,24.862,39.768,20.492,35.23,18.781z M31,20 
        c1.18,0,2.296-0.262,3.304-0.72L31,24l-3.304-4.72C28.704,19.738,29.82,20,31,20z M15,30c1.18,0,2.296-0.262,3.304-0.72L15,34 
        l-3.304-4.72C12.704,29.738,13.82,30,15,30z"
            />
          </g>
        </g>
      </svg>
    ),
    title: "Partner with us",
    description:
      "Partnering with you would give you an advantage of walking into the path that only leads to generating leads which in turn gives profits.",
  },
  {
    icon: (
      <svg
        fill="#ff5254"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="60px"
        height="60px"
        viewBox="0 0 256 256"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M98.6,32.6c24,0,43.4,19.4,43.4,43.4s-19.4,43.6-43.4,43.6s-43.4-19.4-43.4-43.4S74.6,32.6,98.6,32.6z 
        M221.8,215.6h-54.4l25.4-43.8c5.2-9.2,2-20.8-7-26s-20.6-2-25.8,7l-25.4,43.8l-37.8-64.8C93.2,125,86,121.6,77,121.6
        c-1.2,0-3.8,0.4-5.2,0.8c-1.2,0.2-3,0.8-4.4,1.2C31,135.6,2.2,193.8,2.2,254c1,0,87.4,0,109.4,0c-0.8-1.2-1.6-2.2-2.4-3.4
        L65.4,175c-1.4-2.6-0.4-6,2-7.4c2.6-1.4,6-0.4,7.4,2l43.4,75c3.2,5.6,9.2,9.4,16.2,9.4h87.4c10.6,0,19-8.6,19-19
        C241,224,232.2,215.6,221.8,215.6z M197.759,121H254v-11.406h-56.241V121z 
        M206.139,105.822h39.387l3.725-12.617c-9.824-10.801-16.062-16.9-16.062-31.24c0-2.933,0.186-3.352,0.466-6.146h7.961V44.926
        h-5.913c0,0,7.403-14.293,7.403-16.016c0-4.749-3.864-8.567-8.567-8.567c-2.421,0-4.563,0.978-6.146,2.607V12.475h5.168V7.587
        h-5.168V2h-4.889v5.587h-5.168v4.888h5.168v10.522c-1.583-1.629-3.771-2.654-6.192-2.654c-4.749,0-8.567,3.864-8.567,8.567
        c0,1.676,7.589,16.016,7.589,16.016h-6.239V55.82h8.147c0.326,2.793,0.466,3.212,0.466,6.146c0,14.34-6.332,20.578-16.202,31.38
        L206.139,105.822z"
          />
        </g>
      </svg>
    ),
    title: "Strategic Implementation",
    description:
      "We apply our Google Ad Marketing Strategies for African Safari Operators across the campaigns by which you would be achieving results before a set timeline..",
  },
  {
    icon: (
      <svg
        fill="#ff5254"
        width="64px"
        height="64px"
        viewBox="0 0 463 463"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M191.5,47c1.97,0,3.91-0.8,5.3-2.2c1.4-1.39,2.2-3.33,2.2-5.3c0-1.97-0.8-3.91-2.2-5.3c-1.39-1.4-3.33-2.2-5.3-2.2 
             c-1.97,0-3.91,0.8-5.3,2.2c-1.4,1.39-2.2,3.32-2.2,5.3c0,1.97,0.8,3.91,2.2,5.3C187.59,46.2,189.53,47,191.5,47z"
        />
        <path d="M159.5,143h104c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-104c-4.142,0-7.5,3.358-7.5,7.5S155.358,143,159.5,143z" />
        {/* You can truncate or optimize the rest for brevity if this is too verbose */}
        <path
          d="M192,375.5c0,30.603,24.897,55.5,55.5,55.5s55.5-24.897,55.5-55.5c0-6.342-1.063-12.566-3.16-18.499 
             c-1.38-3.906-5.667-5.955-9.57-4.572c-3.905,1.38-5.953,5.665-4.572,9.57c1.528,4.323,2.302,8.865,2.302,13.5 
             c0,22.332-18.168,40.5-40.5,40.5S207,397.832,207,375.5s18.168-40.5,40.5-40.5c7.106,0,14.094,1.864,20.207,5.392 
             c3.586,2.068,8.174,0.84,10.245-2.748c2.07-3.588,0.84-8.174-2.748-10.245C266.814,322.559,257.234,320,247.5,320 
             C216.897,320,192,344.897,192,375.5z"
        />
      </svg>
    ),
    title: "Results that speak",
    description:
      "We will keep optimizing your campaigns continuously as you watch the results grow..",
  },
];

function Fundamentalgoogleads() {
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
      <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center px-4 ">
        <div className="max-w-6xl mx-auto text-center  mt-15">
          <h2 className="font-[Montserrat] font-bold text-[48px] text-center capitalize text-[#3467d8] leading-[1.4] m-0 px-0 pb-[15px]">
            Why should you consider Google Ad Safari Campaigns?
          </h2>

          <h6 className="font-[Montserrat] font-normal text-[22px] text-center capitalize text-[#787878] leading-[1.4] mb-7">
            Boost Your Brand Recognition and Scale Up Quickly
          </h6>

          <p className="font-[Montserrat] font-normal text-[17px] text-center text-[#787878] leading-[inherit] capitalize m-0 pt-0 pb-[15px] px-[6%] min-h-[120px]">
            Starting our understanding of your needs from a marketing campaign
            to delivering revenue-generating results, we would be there with you
            in every step of running a successful ad. Here are some of the
            reasons you should consider us in your ad journey.
          </p>

          <section className="py-12 px-6">
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

            <div className="mt-10 text-center mb-8">
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

export default Fundamentalgoogleads;
