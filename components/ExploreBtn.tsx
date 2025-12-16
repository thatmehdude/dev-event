"use client";

import Image from "next/image";
const ExploreBtn = () => {
  return (
    <button type="button" id="explore-button" className="mt-7 mx-auto flex bg-gray-700 rounded-2xl p-2 gap-3" onClick={() => alert("button clicked")}>
        <a href="#events">
            Explore events
        </a>
        <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24}/>
    </button>
  )
}

export default ExploreBtn