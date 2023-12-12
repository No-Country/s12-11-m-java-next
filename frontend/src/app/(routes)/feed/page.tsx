import FeedCard from "@/components/Cards/FeedCard"
import SuggestionCard from "@/components/Cards/SuggestionCard"
import Sidebar from "@/components/Sidebar/Sidebar"
import React from "react"

const pageFeed = () => {
  return (
    <section className="flex flex-row">
      <Sidebar />
      <FeedCard />
      <aside className="flex flex-col p-5 gap-10 ">
        {/* y aca los sugeridos */}
        <SuggestionCard></SuggestionCard>
        <SuggestionCard></SuggestionCard>
        <SuggestionCard></SuggestionCard>
      </aside>
    </section>
  )
}

export default pageFeed
