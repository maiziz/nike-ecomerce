import heroimg from "../assets/hero.png";
import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "اكتشف مجموعة نايكي الجديدة",
  subtitle: "أحذية نايكي الجديدة",
  img: heroimg,
  btntext: "استكشف المزيد",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "عروض حصرية",
  items: [
    {
      id: "0p0x1",
      title: "نايكي داف",
      text: "حذاء رياضي للرجال",
      rating: "4.5",
      btn: "اشترِ الآن",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "نايكي اير ماكس",
      text: "حذاء رياضي للرجال",
      rating: "4.8",
      btn: "اشترِ الآن",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "نايكي زووم",
      text: "حذاء رياضي للرجال",
      rating: "4.2",
      btn: "اشترِ الآن",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "الأضواء",
  title: "نايكي اير مع تقنيات حصرية",
  text: "اكتشف أحدث إصدارات نايكي مع تقنيات مبتكرة للراحة والأداء المثالي",
  btn: "اشترِ الآن",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "مميز",
  title: "نايكي سنيكرز اير لوب",
  text: "تصميم عصري يجمع بين الأناقة والراحة لإطلالة رياضية مميزة",
  btn: "اكتشف المزيد",
  url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "الأعلى تقييماً",
  items: [
    {
      id: "0M0x1",
      title: "نايكي اير فورس 1",
      text: "حذاء رياضي للرجال",
      rating: "5.0",
      btn: "اشترِ الآن",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "نايكي ايركس",
      text: "حذاء رياضي للرجال",
      rating: "4.8",
      btn: "اشترِ الآن",
      img: product2,
      price: "140",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "نايكي زووم",
      text: "حذاء رياضي للرجال",
      rating: "4.9",
      btn: "اشترِ الآن",
      img: product3,
      price: "190",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "نايكي جوردن",
      text: "حذاء رياضي للرجال",
      rating: "4.6",
      btn: "اشترِ الآن",
      img: product4,
      price: "170",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "نايكي فري رن",
      text: "حذاء رياضي للرجال",
      rating: "4.7",
      btn: "اشترِ الآن",
      img: product5,
      price: "160",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "نايكي ريڤولوشن",
      text: "حذاء رياضي للرجال",
      rating: "4.8",
      btn: "اشترِ الآن",
      img: product6,
      price: "180",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "نايكي ريڤولوشن",
      text: "حذاء رياضي للرجال",
      rating: "4.8",
      btn: "اشترِ الآن",
      img: product1,
      price: "130",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "نايكي زووم",
      text: "حذاء رياضي للرجال",
      rating: "4.9",
      btn: "اشترِ الآن",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "نايكي اير ماكس",
      text: "حذاء رياضي للرجال",
      rating: "4.7",
      btn: "اشترِ الآن",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "نايكي بريستو",
      text: "حذاء رياضي للرجال",
      rating: "4.8",
      btn: "اشترِ الآن",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "نايكي كورتيز",
      text: "حذاء رياضي للرجال",
      rating: "4.5",
      btn: "اشترِ الآن",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "نايكي فلاي نيت",
      text: "حذاء رياضي للرجال",
      rating: "4.7",
      btn: "اشترِ الآن",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};

const story = {
  title: "أخبار نايكي",
  news: [
    {
      title: "جيسون تاتوم يقدم",
      text: "علامة جوردان التجارية النموذجية للسنوات القليلة الماضية، سيرتدي جيسون تاتوم حذاء اير جوردان 37 هذا الموسم",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
      url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
      like: "3/5",
      time: "11 دقيقة",
      by: "جود وينفيلد",
      btn: "اقرأ المزيد"
    },
    {
      title: "زيون يعود",
      text: "نظرة على حذاء زيون ويليامسون الجديد من جوردان الموسم المقبل... نظرة على النموذج الثاني من سلسلة أحذيته الرياضية",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/zion-2-release-date.jpg?w=540&h=380&crop=1",
      time: "41 دقيقة",
      like: "5/5",
      url: "https://sneakernews.com/2022/09/14/zion-williamson-air-jordan-2-pe/",
      by: "مايكل لي",
      btn: "اقرأ المزيد"
    },
    {
      title: "نايكي داف",
      text: "نايكي تقدم مجموعة جديدة من الأحذية الرياضية المستوحاة من الثقافة الحضرية والفن الشارع",
      img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
      time: "ساعتين",
      like: "4/5",
      url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail/",
      by: "مايكل لي",
      btn: "اقرأ المزيد"
    }
  ]
};

const footerAPI = {
  titles: [
    {title: "عن نايكي"},
    {title: "المساعدة"},
    {title: "الشركة"}
  ],
  links: [
    [
      {link: "الأخبار"},
      {link: "الوظائف"},
      {link: "المستثمرون"},
      {link: "الاستدامة"}
    ],
    [
      {link: "حالة الطلب"},
      {link: "الشحن والتوصيل"},
      {link: "طرق الدفع"},
      {link: "اتصل بنا"}
    ],
    [
      {link: "المتاجر"},
      {link: "شروط الاستخدام"},
      {link: "الخصوصية"},
      {link: "انضم إلينا"}
    ]
  ]
};

export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
