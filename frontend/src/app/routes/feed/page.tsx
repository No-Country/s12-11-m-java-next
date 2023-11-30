import FeedCard from "@/components/Cards/FeedCard"
import Sidebar from "@/components/Sidebar/Sidebar"
import React from "react"

const pageFeed = () => {
  return (
    <section className="flex flex-row">
      <Sidebar />
      <article className="flex flex-col w-full gap-10">
        {/* aca va lo tuyo joa las publis */}
        <FeedCard></FeedCard>
        <FeedCard></FeedCard>
      </article>
      <aside className="flex flex-col p-5 gap-10">
        {/* y aca los sugeridos */}
      </aside>
    </section>
  )
}

export default pageFeed
