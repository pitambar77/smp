

export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");


export const blogPosts = [
  {
    id: 1,
    title:
      "Climbing Mount Kilimanjaro? Explore The Fascinating Parts Of Kilimanjaro Glaciers",
    category: "Trekking",
    date: "23/11/2020",
    image:
      "https://i.pinimg.com/originals/6c/c8/b7/6cc8b778e95fa9e1ab4cd78e0deffe2c.jpg",
    content: `
      Mount Kilimanjaro is one of the most iconic trekking destinations in the world. 
      Its glaciers, though sadly retreating due to climate change, still offer breathtaking views. 
      In this blog, we explore the fascinating glacial formations and their importance to the mountain's ecosystem.
      Whether you're planning your first climb or just curious, you'll discover why Kilimanjaro remains one of Africa’s 
      most awe-inspiring adventures.
    `,
  },
  {
    id: 2,
    title: "5 Things You Need To Do The Night Before You Climb Kilimanjaro",
    category: "Trekking",
    date: "23/11/2020",
    image:
      "https://www.pioneerspost.com/sites/default/files/images/article/Zebras%20in%20Nairobi%20national%20park%20by%20Grace%20Nandy%20on%20Unsplash.jpg",
    content: `
      Preparing for your Kilimanjaro trek doesn’t stop with training – 
      the night before is equally important. From packing your gear, eating the right meal, 
      staying hydrated, getting enough rest, to preparing your mindset – 
      we’ll guide you through the 5 most essential things to do before the big climb.
    `,
  },
  {
    id: 3,
    title:
      "Where to stay on Tanzania Family Safari – Comparison Between a Lodge and a Tented Camp",
    category: "Safari",
    date: "23/11/2020",
    image:
      "https://i.pinimg.com/originals/6c/c8/b7/6cc8b778e95fa9e1ab4cd78e0deffe2c.jpg",
    content: `
      Tanzania offers two popular accommodation types for safari-goers: lodges and tented camps. 
      Lodges provide luxury, security, and modern comforts, while tented camps immerse you in 
      the wilderness with an authentic safari experience. In this article, we break down the 
      pros and cons of each option to help families choose what suits them best.
    `,
  },
  {
    id: 4,
    title: "Why Tanzania Safari is Africa’s Best Kept Secret?",
    category: "Safari",
    date: "23/11/2020",
    image:
      "https://enact-africa.s3.amazonaws.com/site/images/wide/1736850152795-2025-01-14-observer-giraffe-banner.jpg",
    content: `
      Tanzania is home to some of the most diverse ecosystems in Africa. 
      From the Serengeti plains to the Ngorongoro Crater, its landscapes and wildlife are unmatched. 
      Yet, it remains less crowded than Kenya and South Africa. This blog explores why Tanzania should 
      be on every safari enthusiast’s bucket list.
    `,
  },
  {
    id: 5,
    title: "Why Now is the Great Time to Start Tanzania Safari?",
    category: "Safari",
    date: "23/11/2020",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dcd9c18acb18b0d4df30609/ad1eb776-44c3-4615-bf20-9f7848dd5d9b/offbeat+sneak+peek-57.jpg?format=1500w",
    content: `
      Post-pandemic travel has changed how people explore the world. 
      Tanzania has implemented strong safety measures while keeping its safari experiences authentic. 
      With fewer tourists, now is the perfect time to enjoy uncrowded game drives, 
      incredible wildlife encounters, and exclusive experiences.
    `,
  },
  {
    id: 6,
    title: "The Hidden Gems of Tanzania Safari You Shouldn’t Miss",
    category: "Trekking",
    date: "23/11/2020",
    image:
      "https://www.laitravel.es/upfiles/galeries/especial-kenia-semana-santa_10477127.jpg",
    content: `
      Beyond the famous Serengeti and Ngorongoro, Tanzania hides secret gems. 
      Places like Ruaha National Park, Selous Game Reserve, and Lake Natron 
      offer pristine wilderness and fewer crowds. Discover why these off-the-beaten-path locations 
      are worth adding to your safari itinerary.
    `,
  },
  {
    id: 7,
    title: "Tips to Plan Your First Safari Adventure in Tanzania",
    category: "Safari",
    date: "23/11/2020",
    image:
      "https://cdn.kimkim.com/files/a/content_articles/featured_photos/6da29bd9a066fc6bcff4b1f3f0712cfd351f2683/original-f449a139f40a5f7d45eedfa1b93bac00.jpg",
    content: `
      Planning your first safari can feel overwhelming. What should you pack? 
      When is the best time to visit? Which parks should you prioritize? 
      In this blog, we cover practical tips to ensure your first Tanzanian safari 
      is unforgettable, safe, and full of adventure.
    `,
  },
].map((post) => ({
  ...post,
  slug: slugify(post.title), // 👈 auto-create slug
}));