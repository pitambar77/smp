import React, { useEffect, useState } from "react";
import RequestForm from "../../../components/RequestForm";

const features = [
  {
    icon: (
      <svg
        width="60px"
        height="60px"
        viewBox="0 0 1024 1024"
        className="icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g>
          <path
            d="M687 479.8c-12.7-6.2-25.7-11.8-38.9-16.6 49.8-40.3 81.6-101.8 81.6-170.6 0-12.6-1.1-24.9-3.1-36.9h78.2v-73.1H700.2c-38-65.4-108.9-109.4-189.8-109.4-121 0-219.4 98.4-219.4 219.4 0 68.9 31.9 130.5 81.7 170.7-154.2 56.4-264.6 204.5-264.6 378h73.1c0-181.5 147.7-329.1 329.1-329.1 50.7 0 99.3 11.2 144.5 33.3l32.2-65.7z m-80.3-297.2H414c25.8-22.6 59.5-36.3 96.3-36.3 36.9 0 70.6 13.7 96.4 36.3z m-237.9 73.1H652c3.1 11.8 4.7 24.1 4.7 36.9 0 80.7-65.6 146.3-146.3 146.3s-146.3-65.6-146.3-146.3c0-12.8 1.6-25.1 4.7-36.9zM731.5 548.7c-101 0-182.9 81.9-182.9 182.9s81.9 182.9 182.9 182.9 182.9-81.9 182.9-182.9c-0.1-101-81.9-182.9-182.9-182.9z m0 292.6c-60.5 0-109.7-49.2-109.7-109.7S671 621.9 731.5 621.9s109.7 49.2 109.7 109.7S792 841.3 731.5 841.3z"
            fill="#ff5254"
          />
          <path
            d="M758.9 655.7H704V743l69.4 68.8 38.6-39-53.1-52.7z"
            fill="#ff5254"
          />
        </g>
      </svg>
    ),
    title: "Customer Lifetime Value",
    description:
      "In the process of doing doing SEO, we get involved in so many techniques that come under it. Customer lifetime value is a process through which we can measure which technique is bringing in the greatest number of leads.",
    description2:
      "Once we recognize how we bring more leads, we can strengthen that aspect and change all our SEO Strategies For African Safari Operators according to it.",
  },
  {
    icon: (
      <svg
        fill="#ff5254"
        stroke="#ff5254"
        strokeWidth="0.36"
        width="60px"
        height="60px"
        viewBox="0 -0.08 20 20"
        xmlns="http://www.w3.org/2000/svg"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
      >
        <g>
          <path d="M18.19,10.24a8.17,8.17,0,0,0-3-5.18A8.28,8.28,0,0,0,10,3.32h0A9.14,9.14,0,0,0,5.12,4.85a7.93,7.93,0,0,0-3.41,6.33A7.84,7.84,0,0,0,2.94,16a1.47,1.47,0,0,0,1.18.57,1.63,1.63,0,0,0,.64-.13,1.4,1.4,0,0,0,.76-1.68.3.3,0,0,0,0-.1s-1.6-3-.11-5.57L5.4,9h0s0,0,0,0A5.05,5.05,0,0,1,10,6.32,5.48,5.48,0,0,1,14.61,9a5.09,5.09,0,0,1,.58,3.54l-5-1.88a.38.38,0,1,0-.27.7L15,13.25a5.92,5.92,0,0,1-.37,1,1.63,1.63,0,0,0-.14,1.36,1.38,1.38,0,0,0,.75.8c.65.27,1.55.3,2.2-1.1A8.09,8.09,0,0,0,18.19,10.24ZM4.8,14.92a.64.64,0,0,1-.35.78.74.74,0,0,1-.9-.2,7,7,0,0,1-1.09-4.26,9,9,0,0,1,.8-3.1l1.33.78A6.93,6.93,0,0,0,4.8,14.92ZM5,8.27,3.62,7.49a7.23,7.23,0,0,1,2-2A8.34,8.34,0,0,1,9.69,4.09l0,1.49A5.71,5.71,0,0,0,5,8.27Zm5.44-2.69,0-1.5a7.33,7.33,0,0,1,4.25,1.55,8,8,0,0,1,1.69,1.88L15,8.28A6.25,6.25,0,0,0,10.41,5.58ZM16.78,15c-.48,1-1,.85-1.23.73a.67.67,0,0,1-.34-.36,1,1,0,0,1,.1-.77,5.67,5.67,0,0,0,.41-1l.29.11a.35.35,0,0,0,.14,0,.39.39,0,0,0,.35-.25.38.38,0,0,0-.22-.48l-.38-.14a6,6,0,0,0-.47-3.86l1.32-.75a7.3,7.3,0,0,1,.7,2.19A7.37,7.37,0,0,1,16.78,15Z" />
          <path d="M7.87,7.5a.34.34,0,1,0,.33.33A.34.34,0,0,0,7.87,7.5Z" />
          <circle cx="12.14" cy="7.81" r="0.33" />
          <path d="M14.85,11.62a.34.34,0,1,0-.34.33A.34.34,0,0,0,14.85,11.62Z" />
          <path d="M5.58,11.29a.33.33,0,1,0,.34.33A.33.33,0,0,0,5.58,11.29Z" />
        </g>
      </svg>
    ),
    title: "Content Efficiency",
    description: `It’s a fascinating KPI because you need to produce optimized content not just to rank on search engines but also to achieve the company goals related to it.`,
    description2:
      "As all of the content cannot reach the expected result or the number of leads, your website needs to produce efficient content that creates an impact.",
  },

  {
    icon: (
      <svg
        fill="#ff5254"
        stroke="#ff5254"
        strokeWidth={9.216}
        width="60px"
        height="60px"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
      >
        <g>
          <g>
            <path
              d="M135.955,290.443c-1.418-1.608-3.515-2.471-5.651-2.27c-2.137,0.18-4.062,1.361-5.19,3.185l-52.079,84.139
        c-1.547,2.499-1.306,5.71,0.597,7.95l33.714,39.688L88.89,438.631c-2.991,2.508-7.474,2.125-9.995-0.854l-19.281-22.803
        c-2.479-2.932-2.199-7.253,0.639-9.84l3.395-3.097c2.764-2.521,2.962-6.806,0.44-9.569s-6.808-2.964-9.57-0.44l-3.393,3.095
        c-8.247,7.515-9.063,20.078-1.857,28.599l19.282,22.803c4.075,4.819,9.915,7.304,15.791,7.304c3.68,0,7.369-0.99,10.653-2.975
        l24.256,12.688c3.37,1.814,7.054,2.713,10.726,2.713c4.431,0,8.846-1.311,12.67-3.896l11.14-7.533
        c1.826-1.236,2.938-3.283,2.978-5.487s-0.994-4.291-2.775-5.593l-12.471-9.12c-3.02-2.212-7.258-1.548-9.467,1.469
        c-2.208,3.021-1.551,7.26,1.47,9.468l4.697,3.434l-3.163,2.141c-2.806,1.896-6.403,2.084-9.455,0.438l-19.132-10.008l14.014-11.766
        l92.41-38.564c2.015-0.842,3.501-2.603,3.992-4.73c0.49-2.131-0.076-4.365-1.521-6.002L135.955,290.443z
        M118.879,415.785l-31.729-37.351l44.68-72.184l67.119,76.12L118.879,415.785z"
            />
            <path
              d="M192.172,328.264c1.606,0,3.219-0.569,4.511-1.723l9.674-8.642c2.791-2.493,3.032-6.776,0.54-9.565
        c-2.494-2.79-6.777-3.03-9.565-0.539l-9.674,8.642c-2.791,2.493-3.032,6.776-0.54,9.565
        C188.456,327.5,190.31,328.264,192.172,328.264z"
            />
            <path
              d="M232.138,349.051l-12.69,2.686c-3.66,0.775-6,4.37-5.226,8.029c0.675,3.188,3.488,5.374,6.621,5.374
        c0.464,0,0.937-0.05,1.409-0.149l12.69-2.686c3.66-0.775,5.999-4.371,5.225-8.029
        C239.394,350.613,235.799,348.27,232.138,349.051z"
            />
            <path
              d="M158.807,295.517c0.892,0.396,1.824,0.583,2.74,0.583c2.598,0,5.077-1.504,6.197-4.032l5.255-11.86
        c1.516-3.422-0.028-7.423-3.449-8.938c-3.422-1.517-7.422,0.028-8.938,3.449l-5.255,11.86
        C153.842,290,155.386,294.001,158.807,295.517z"
            />
            <path
              d="M448.713,234.543c-5.912-9.696-13.34-18.296-22.075-25.56c-2.882-2.396-7.149-2-9.54,0.879
        c-2.393,2.876-1.999,7.146,0.877,9.539c6.883,5.722,12.818,12.407,17.695,19.884c-17.314,19.389-37.398,34.184-61.109,44.978
        v-3.239c0-33.218-14.648-64.448-40.189-85.688c-2.879-2.395-7.15-1.999-9.54,0.879c-2.394,2.875-2,7.146,0.877,9.54
        c22.436,18.655,35.304,46.091,35.304,75.269v11.934c0,0.264,0.048,0.512,0.077,0.768c-0.13,1.083-0.03,2.207,0.399,3.293
        c1.055,2.657,3.604,4.277,6.299,4.277c0.832,0,1.678-0.154,2.496-0.48c30.766-12.204,56.113-30.113,77.494-54.749
        c1.422-1.638,1.889-3.758,1.505-5.732C449.942,238.475,449.819,236.356,448.713,234.543z"
            />
            <path
              d="M393.896,85.938c3.303-0.676,6.701-1.019,10.102-1.019c27.623,0,50.094,22.472,50.094,50.094
        c0,27.623-22.471,50.095-50.094,50.095c-10.451,0-20.461-3.184-28.949-9.205c-3.05-2.166-7.279-1.446-9.444,1.604
        s-1.446,7.28,1.604,9.445c10.792,7.656,23.514,11.703,36.789,11.703c35.094,0,63.643-28.55,63.643-63.643
        c0-35.092-28.549-63.642-63.643-63.642c-4.311,0-8.624,0.435-12.819,1.295c-3.665,0.75-6.027,4.33-5.276,7.995
        C386.652,84.326,390.225,86.694,393.896,85.938z"
            />
            <path
              d="M310.12,183.045c37.854,0,68.649-30.796,68.649-68.649s-30.796-68.649-68.649-68.649s-68.649,30.796-68.649,68.649
        S272.267,183.045,310.12,183.045z M310.12,59.295c30.383,0,55.101,24.719,55.101,55.101s-24.718,55.101-55.101,55.101
        s-55.101-24.719-55.101-55.101S279.737,59.295,310.12,59.295z"
            />
            <path
              d="M325.531,299.297c-22.498,2.42-45.268-0.57-66.303-8.629v-9.645c0-29.178,12.867-56.613,35.303-75.269
        c2.877-2.394,3.27-6.665,0.877-9.541c-2.389-2.875-6.662-3.269-9.539-0.878c-25.541,21.239-40.189,52.47-40.189,85.688v3.672
        c-23.064-11.158-43.028-25.775-59.417-43.572c5.08-8.218,11.405-15.523,18.858-21.722c2.877-2.393,3.269-6.665,0.877-9.541
        c-2.393-2.875-6.663-3.267-9.54-0.877c-9.412,7.828-17.28,17.171-23.386,27.771c-1.406,2.439-1.12,5.387,0.488,7.494
        c-0.117,1.77,0.446,3.582,1.732,4.999c19.483,21.475,43.697,38.686,71.966,51.158c19.858,8.761,41.358,13.258,63.006,13.258
        c5.57,0,11.152-0.297,16.717-0.898c3.721-0.4,6.41-3.74,6.01-7.46S329.245,298.904,325.531,299.297z"
            />
            <path
              d="M219.098,198.655c13.276,0,25.998-4.047,36.789-11.703c3.051-2.165,3.77-6.395,1.605-9.445
        c-2.166-3.051-6.393-3.769-9.446-1.604c-8.487,6.021-18.498,9.205-28.949,9.205c-27.623,0-50.094-22.472-50.094-50.095
        c0-27.622,22.471-50.094,50.094-50.094c3.4,0,6.799,0.343,10.102,1.019c3.672,0.759,7.246-1.613,7.995-5.276
        c0.75-3.665-1.612-7.245-5.277-7.995c-4.195-0.86-8.509-1.295-12.819-1.295c-35.094,0-63.643,28.55-63.643,63.642
        C155.455,170.106,184.004,198.655,219.098,198.655z"
            />
            <path
              d="M323.35,261.628c-4.219-4.218-11.065-4.218-15.284,0c-4.22,4.219-4.22,11.065,0,15.284
        c2.146,2.146,4.951,3.171,7.757,3.171c2.805,0,5.612-1.024,7.756-3.17C327.568,272.694,327.568,265.845,323.35,261.628z"
            />
            <path
              d="M282.289,238.515c-2.596,0-5.073,1.503-6.193,4.03c-1.075,2.42-0.484,5.165,1.511,7.04
        c0.927,0.844,2.016,1.267,3.097,1.267c1.632,0,3.254-0.978,3.982-2.717c0.963-2.417-0.083-5.222-2.18-6.509
        C283.867,238.801,283.068,238.515,282.289,238.515z"
            />
            <path
              d="M319.042,215.988c-1.789-1.473-4.271-1.499-6.085-0.066c-1.816,1.434-2.497,4.021-1.459,6.227
        c0.792,1.612,2.463,2.673,4.258,2.673c0.37,0,0.75-0.053,1.122-0.159c1.785-0.557,3.004-2.398,2.937-4.315
        C319.717,217.95,319.506,216.785,319.042,215.988z"
            />
          </g>
        </g>
      </svg>
    ),
    title: "Average Engagement Time",
    description: `One of the most interesting KPIs tells us where on your website a user spends the most duration of time. Usually, this measurement can be achieved through a tool that tells us the average length of time a website was open in the user’s browser.`,
    description2: `This can be helpful in optimizing the content and information provided on that particular page to attract more users`,
  },
  {
    icon: (
      <svg
        fill="#ff5254"
        stroke="#ff5254"
        strokeWidth={0.384}
        width="60px"
        height="60px"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
      >
        <g>
          <polygon points="51 11 62 7 51 3 51 11" />
          <polygon points="48 3 48 22 42 22 42 31 56 31 56 22 50 22 50 3 48 3" />
          <path d="M32.64014,31.76807l6-5a.9996.9996,0,0,0,0-1.53614l-6-5-1.28028,1.53614L35.238,25H28a6,6,0,0,0,0,12H39a9,9,0,0,1,0,18H22v2H39a11,11,0,0,0,0-22H28a4,4,0,0,1,0-8h7.238l-3.87818,3.23193Z" />
          <path d="M5.355,39.22284a3.414,3.414,0,0,1,1-2.41419v24.5h4.5v-14h1v14h4.5v-24.5a6.25124,6.25124,0,0,1,1,3.41425v7.08575h3V37.80487a4.49619,4.49619,0,0,0-4.49622-4.49622h-1.8833a4.00006,4.00006,0,1,0-5.241,0H6.8512A4.49619,4.49619,0,0,0,2.355,37.80487v9.50378h3Z" />
        </g>
      </svg>
    ),
    title: "Conversion Goals By Percent-Based Metrics",
    description: `Conversion can only mean, generating revenue for your company from the leads that you get from Organic Marketing.`,

    description2: `You should always look into the percentage of improvement, like with traffic flowing into your website, your conversion rate should increase too. Or, on the flip side, with traffic decreasing the conversion rate is increasing because you are better at focusing your target audience.`,
  },
  {
    icon: (
      <svg
        fill="#ff5254"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="60px"
        height="60px"
        viewBox="0 0 71.682 71.682"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path d="M15.681,35.617c0,0,9.185,8.959,20.384,8.959s20.385-8.959,20.385-8.959s-9.186-8.96-20.385-8.96 S15.681,35.617,15.681,35.617z M41.665,35.617c0,3.135-2.463,5.6-5.6,5.6c-3.137,0-5.602-2.465-5.602-5.6 c0-3.137,2.464-5.601,5.602-5.601C39.202,30.016,41.665,32.481,41.665,35.617z" />
            <path d="M64.962,0H6.721c-3.808,0-6.72,2.912-6.72,6.72v58.24c0,3.81,2.912,6.722,6.72,6.722h58.24c3.81,0,6.72-2.912,6.72-6.722 V6.721C71.681,2.912,68.771,0,64.962,0z M25.09,4.704c1.344,0,2.688,1.12,2.688,2.688s-1.12,2.688-2.688,2.688 c-1.344,0-2.688-1.12-2.688-2.688S23.522,4.704,25.09,4.704z M17.697,4.704c1.345,0,2.688,1.12,2.688,2.688 s-1.12,2.688-2.688,2.688c-1.568,0-2.688-1.12-2.688-2.688S16.13,4.704,17.697,4.704z M10.082,4.704 c1.344,0,2.688,1.12,2.688,2.688s-1.12,2.688-2.688,2.688S7.393,8.96,7.393,7.392S8.738,4.704,10.082,4.704z M63.841,59.361 c0,2.464-2.016,4.479-4.479,4.479H12.322c-2.464,0-4.479-2.016-4.479-4.479v-40.32c0-2.464,2.017-4.48,4.479-4.48h19.04 c4.256,0,4.479,0,4.479-2.239c0-2.912,2.018-4.48,4.479-4.48H59.36c2.464,0,4.479,2.016,4.479,4.48L63.841,59.361L63.841,59.361z" />
          </g>
        </g>
      </svg>
    ),
    title: "Brand Visibility In Search KPIs",
    description: [
      `This Organic Marketing KPI For African Safari Operators indicates what is our brand position in terms of search engines. With all the on-page and off-page SEO work that goes into ranking your website, by this visibility KPI you would be able to know what percentage of the search engine you result in for all the organic work that has been done in the back-end.
 
`,
    ],
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
        viewBox="0 0 256 252"
        enableBackground="new 0 0 256 252"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M59.406,88.486L50.54,60.801h50.68L90.352,88.486H59.406z M20.567,146.773
      c0-21.393,11.841-39.869,29.63-49.078h50.737c17.789,9.209,29.973,27.685,29.973,49.078
      c0,30.316-24.711,55.027-55.027,55.027
      C45.22,201.801,20.567,177.09,20.567,146.773z M80.857,159.987c0,3.26-2.974,4.919-7.265,4.919
      c-4.976,0-9.553-1.659-12.87-3.318
      l-2.288,8.866c2.917,1.659,7.894,2.974,13.156,3.318v7.264h7.551v-7.894
      c8.923-1.316,13.843-7.265,13.843-14.186
      c0-6.921-3.661-11.154-12.87-14.472c-6.578-2.288-9.209-3.947-9.209-6.578c0-2.002,1.659-4.29,6.578-4.29
      c5.606,0,9.209,1.659,11.211,2.631l2.288-8.58
      c-2.631-1.316-5.949-2.288-11.211-2.631v-6.921h-7.551v7.207
      c-8.237,1.659-13.156,6.921-13.156,13.843c0,7.608,5.606,11.555,13.843,14.186
      C78.511,155.354,81.143,157.012,80.857,159.987z
      M198.608,91.221c-1.756-1.828-1.698-4.734,0.13-6.491s4.734-1.698,6.491,0.13s1.698,4.734-0.13,6.491
      S200.364,93.049,198.608,91.221z
      M229.263,82.637c1.828-1.756,1.887-4.662,0.13-6.491s-4.662-1.887-6.491-0.13
      c-1.828,1.756-1.887,4.662-0.13,6.491S227.434,84.394,229.263,82.637z
      M171.883,56.775c1.828-1.756,1.887-4.662,0.13-6.491
      c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491S170.055,58.532,171.883,56.775z
      M239.094,60.108c1.828-1.756,1.887-4.662,0.13-6.491s-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491
      C234.36,61.806,237.266,61.864,239.094,60.108z
      M204.274,24.598c1.828-1.756,1.887-4.662,0.13-6.491
      c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491
      C199.54,26.296,202.445,26.354,204.274,24.598z
      M229.857,35.032c1.828-1.756,1.887-4.662,0.13-6.491
      c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491
      C225.123,36.73,228.029,36.788,229.857,35.032z
      M182.436,34.261c1.828-1.756,1.887-4.662,0.13-6.491
      c-1.756-1.828-4.662-1.887-6.491-0.13s-1.887,4.662-0.13,6.491
      S180.607,36.017,182.436,34.261z
      M190.179,61.832l-16.368,15.724l-1.58,6.822l6.88-1.305l16.368-15.724
      c4.637,2.618,10.782,2.02,15.012-2.044
      c5.15-4.947,5.309-12.88,0.362-18.03s-12.88-5.309-18.03-0.362
      C188.593,50.978,187.573,56.91,190.179,61.832z
      M253.968,54.72c0,21.672-13.201,40.348-31.968,48.417V119h-15.232v88.777
      c0,17.087-13.772,30.858-30.859,30.858h-26.12v11.181H2V215h148v13.484
      l26.675-0.05c11.476,0,20.657-9.181,20.657-20.657V119H182v-15.814
      c-18.828-8.041-32.083-26.75-32.083-48.466
      c0-29.073,23.463-52.536,52.536-52.536
      C231.271,2.184,254.989,25.646,253.968,54.72z
      M241.747,34.102c-11.375-21.68-38.232-30.052-59.912-18.677
      c-21.68,11.375-30.052,38.232-18.677,59.912
      c11.375,21.68,38.232,30.052,59.912,18.677
      C244.75,82.639,253.122,55.782,241.747,34.102z"
          />
        </g>
      </svg>
    ),
    title: "Revenue Per Thousand And Average Position",
    description: [
      `Revenue per thousand impressions is the process of estimating how much you are expected to earn with every thousand impressions. This may sometimes improve by making a little change to the functionality of your website or making it faster.
 
`,
      `Average position is a ranking metric by Google search console. With a combination of both, you would be able to define which keywords and which web pages need improvement for more leads.
 
`,
    ],
  },
];

function Results() {
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
      <div className="w-full bg-[#f0f0f0] flex items-center justify-center px-4">
        <div className="max-w-[1140px] mx-auto text-center mt-20">
          <h2 className="font-[Montserrat] font-bold text-[48px] text-center capitalize text-[#3467d8] leading-[1.4]  pb-[18px]">
            Long-Lasting Results For your Safari business.
          </h2>

          <h6 className="font-[Montserrat] font-normal text-[22px] text-center capitalize text-[#787878] leading-[1.4] mb-12">
            Our Marketing Solutions Work: We’ve Proven it Over and Over Again
          </h6>

          {/* <p className=" font-[Montserrat] font-normal text-[17px] text-center text-[#787878] leading-inherit uppercase-normal px-[6%] pb-[20px]  ">
We understand your safari & tour business needs to be more visible on the search engine result page to attract more potential customers and opportunities that would convert. With years of trial & test, we come up with some ways that would give you the best results by implementing SEO.                        </p> */}

          <section className="mt-8">
            <div className=" pl-5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-8">
                  <div className="w-9 h-8 mt-1 ">{feature.icon}</div>
                  <div>
                    <h3 className="font-[Montserrat] font-semibold text-[22px] text-left text-[#011833] m-0 p-0 pb-[10px] capitalize">
                      {feature.title}
                    </h3>
                    <p className="font-[Montserrat] font-medium text-[16px] text-left text-[#787878] m-0 pb-2 ">
                      {feature.description}
                    </p>
                    <p className="font-[Montserrat] font-medium text-[16px] text-left text-[#787878] m-0 p-0 ">
                      {feature.description2}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className=" text-center mb-18">
              <button
                onClick={() => setShowForm(true)}
                className="bg-[#ff4d4d] text-white font-semibold px-6 py-3 rounded cursor-pointer  hover:bg-[#011833] ease-in duration-500 hover:text-red-600 transition"
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

export default Results;
