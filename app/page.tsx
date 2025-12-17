import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";

export default function Page () {
  return (
    <section className="flex flex-col">
      <h1 className="text-center">The hub for every dev <br /> event you can't miss</h1>
      <p className="text-center mt-5">Hackatons, meetups, and conferences, all in one place</p>

      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events list-none">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
