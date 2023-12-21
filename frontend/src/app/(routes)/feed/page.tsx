import FeedEventCard from "@/components/EventsCards/FeedEventCard"
import Sidebar from "@/components/Sidebar/Sidebar"
import React from "react"

const pageFeed = () => {
  return (
    <section className="flex flex-row pt-[80px]">
      <Sidebar />
      <FeedEventCard />
      <aside className="flex flex-col p-5 gap-10 ">
      </aside>
    </section>
  )
}

export default pageFeed
