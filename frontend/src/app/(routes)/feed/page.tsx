import FeedEventCard from "@/components/EventsCards/FeedEventCard"
import SuggestionCard from "@/components/Cards/SuggestionCard"
import Sidebar from "@/components/Sidebar/Sidebar"
import React from "react"

const pageFeed = () => {
  return (
    <section className="flex flex-row">
      <Sidebar />
      <FeedEventCard />
      <aside className="flex flex-col p-5 gap-10 ">
      </aside>
    </section>
  )
}

export default pageFeed
