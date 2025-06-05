// import React from 'react';

// const steps = [
//     {
//         number: '1',
//         text: (
//             <>
// Gathering the requirements 
//           </>
//         ),
//         color: '#ff4c4c',
//     },
//     {
//         number: '2',
//         text: (
//             <>
// Analyzing the competitors

//    </>
//         ),
//         color: '#ff4c4c',
//     },
//     {
//         number: '3',
//         text: (
//             <>
// Writing high-quality content
//     </>
//         ),
//         color: '#ff4c4c',
//     },
//     {
//         number: '4',
//         text: (
//             <>
// Proofreading For Improvements
//           </>
//         ),
//         color: '#ff4c4c',
//     },
//     // {
// //         number: '5',
// //         text: (
// //             <>
// // Identify & Qualify Backlinks    </>
// //         ),
// //         color: '#ff4c4c',
// //     },
// //     {
// //         number: '6',
// //         text: (
// //             <>
// // Transparent Reporting      </>
// //         ),
// //         color: '#ff4c4c',
// //     },
// ];

// const Work = () => {
//     return (
//         <section className="bg-[#F0F0F0] text-center px-4 py-16 font-[Montserrat]">
//             {/* Heading */}
//             <div className='max-w-[1140px] mx-auto mt-6 mb-6'>
//             <h2 className="text-4xl sm:text-5xl font-bold text-[#3467d8] mb-2 leading-[1.5]">
// Crafting a difference with our exceptional work          </h2>

//             {/* Subheadings */}
//             <p className="text-xl mt-5 mb-5 text-[#5e5e5e]">Reach Your Target Market With Ads That Convert</p>
//             {/* <p className="text-xl text-[#5e5e5e] mb-6">Identify the goal of your Safari Website</p> */}

//             {/* Description */}

//             {/* <p className=" float-left  text-[#5e5e5e] text-[17px]  text-start leading-relaxed ">

//                 As every safari & tour business requires unique attention for running an ad campaign, we prepare tailor made strategies that would result in great returns along with amazing revenue generations. 
//                    </p> */}
//             <p className=' text-[#5e5e5e] text-[17px]  text-start leading-relaxed mb-12'>
// We know how important writing great African Safari And Tour Content is to stand out in this competitive era. And here our years of research come into play in presenting engaging content with captivating ideas

//             </p>

//             {/* Steps Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//                 {steps.map((step, index) => (
//                     <div key={index} className="flex items-start text-left gap-4">
//                         {/* Number */}
//                         <span
//                             className="text-[80px] font-semibold leading-[1em] relative -left-1"
//                             style={{
//                                 fontFamily: "'Poppins', sans-serif",
//                                 color: 'black',
//                                 display: 'block',
//                                 textAlign: 'left',
//                                 position: 'relative',
//                                 marginTop: '-2%',
//                             }}
//                         >
//                             {step.number}
//                         </span>



//                         {/* Text */}
//                         <div
//                             className="text-xl font-semibold leading-snug text-[22px] text-left "
//                             style={{ color: step.color }}
//                         >
//                             {step.text}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             </div>
//         </section>
//     );
// };

// export default Work;
import React from 'react';

const steps = [
    { number: '1', text: <>Gathering the requirements</>, color: '#ff4c4c' },
    { number: '2', text: <>Analyzing the competitors</>, color: '#ff4c4c' },
    { number: '3', text: <>Writing high-quality content</>, color: '#ff4c4c' },
    { number: '4', text: <>Proofreading For Improvements</>, color: '#ff4c4c' },
];

const Work = () => {
    return (
        <section className="bg-[#F0F0F0] text-center px-4 py-16 font-[Montserrat]">
            <div className="max-w-[1140px] mx-auto mt-6 mb-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#3467d8] mb-2 leading-[1.5]">
                    Crafting a difference with our exceptional work
                </h2>

                <p className="text-[#787878] text-[17px] text-center leading-relaxed mb-12">
                    We know how important writing great <strong className='font-semibold'>African Safari And Tour Content</strong> is to stand out in this competitive era. And here our years of research come into play in presenting engaging content with captivating ideas
                </p>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-y-10 gap-x-12 max-w-6xl mx-auto text-left">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-6 group">
                            {/* Number */}
                            <span
                                className="text-[80px] font-bold leading-[1em] text-black relative -left-1 group-hover:text-red-500 transition-colors duration-300"
                                style={{ fontFamily: "'Poppins', sans-serif" }}
                            >
                                {step.number}
                            </span>

                            {/* Text */}
                            <p
                                className="text-[22px] leading-snug text-xl font-semibold text-left group-hover:text-blue-600 transition-colors duration-300"
                                style={{ color: step.color }}
                            >
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
