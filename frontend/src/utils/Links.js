import { FaRegCalendarCheck } from "react-icons/fa6"
import { IoIosMusicalNotes, IoIosVideocam } from "react-icons/io"
import { MdOutlineExplore, MdOutlinePostAdd } from "react-icons/md"

export const LinkFeed = [
  {
    label: "Subir música",
    path: "/uploadMusic",
    icon: IoIosMusicalNotes,
  },
  {
    label: "Subir videos",
    path: "/uploadVideos",
    icon: IoIosVideocam,
  },
  {
    label: "Subir post",
    path: "/uploadPost",
    icon: MdOutlinePostAdd,
  },
  {
    label: "Subir evento",
    path: "/uploadEvento",
    icon: FaRegCalendarCheck,
  },
  {
    label: "Explorar",
    path: "/explorar",
    icon: MdOutlineExplore,
  },
]

export const LinkHeader = [
  {
    label: "Home",
    path: "/home",
  },
  {
    label: "Descubre",
    path: "/descubre",
  },
  {
    label: "Feed",
    path: "/feed",
  },
]
