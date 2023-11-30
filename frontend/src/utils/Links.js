import { IoIosMusicalNotes, IoIosVideocam } from "react-icons/io"
import { FaRegCalendarCheck } from "react-icons/fa6"
import { MdOutlineExplore, MdOutlinePostAdd } from "react-icons/md"

export const LinkFeed = [
  {
    label: "Subir música",
    path: "/routes/uploadMusic",
    icon: IoIosMusicalNotes,
  },
  {
    label: "Subir videos",
    path: "/routes/uploadVideos",
    icon: IoIosVideocam,
  },
  {
    label: "Subir post",
    path: "/routes/uploadPost",
    icon: MdOutlinePostAdd,
  },
  {
    label: "Subir evento",
    path: "/routes/uploadEvento",
    icon: FaRegCalendarCheck,
  },
  {
    label: "Explorar",
    path: "/routes/explorar",
    icon: MdOutlineExplore,
  },
]

export const LinkHeader = [
  {
    label: "Home",
    path: "/routes/home",
  },
  {
    label: "Feed",
    path: "/routes/feed",
  },
  {
    label: "Descubre",
    path: "/routes/descubre",
  },
]
