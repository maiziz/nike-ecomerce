import React from "react";
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "./utils/Title";

const Stories = ({ story: { title, news } }) => {
  return (
    <>
      <div className="nike-container mb-11 rtl">
        <Title title={title} />
        <div className="mt-7">
          <div className="h-[35vh] md:h-[31vh] sm:h-[19vh] w-full flex items-center justify-start gap-5 overflow-x-scroll scroll-smooth scroll-hidden">
            {news.map((val, i) => (
              <div key={i} className="relative rounded-lg">
                <div className="flex items-center gap-3">
                  <img
                    src={val.img}
                    alt={`صورة-${i}`}
                    className="w-64 h-[18vh] rounded-lg"
                  />
                </div>
                <div className="absolute right-0 left-0 bottom-0 w-64 h-full flex items-center justify-center flex-col py-2 px-3 rounded-lg hover:opacity-100 opacity-0 bg-black/80 transition-opacity duration-500">
                  <h1 className="text-xl lg:text-sm text-slate-100 font-semibold">{val.title}</h1>
                  <p className="text-sm lg:text-xs text-slate-100 font-normal">{val.text}</p>
                  <div className="flex items-center justify-between w-full mt-2">
                    <div className="flex items-center gap-1">
                      <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                      <span className="md:text-xs font-normal text-slate-100">{val.like}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="icon-style w-4 h-4 text-slate-100" />
                      <span className="md:text-xs font-normal text-slate-100">{val.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HashtagIcon className="icon-style text-blue-600" />
                      <span className="text-xs font-normal text-slate-100">{val.by}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-2">
                    <a href={val.url} target="_blank" role="button" className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme">{val.btn}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
