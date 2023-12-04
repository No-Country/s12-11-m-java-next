import { FaRegCalendarCheck } from "react-icons/fa6"
import { IoIosMusicalNotes, IoIosVideocam } from "react-icons/io"
import { MdOutlineExplore, MdOutlinePostAdd } from "react-icons/md"

export const LinkFeed = [
  {
    label: "Subir música",
    path: "/perfil/musica",
    icon: IoIosMusicalNotes,
  },
  {
    label: "Subir videos",
    path: "/uploadVideos",
    icon: IoIosVideocam,
  },
  {
    label: "Subir post",
    path: "/perfil/post",
    icon: MdOutlinePostAdd,
  },
  {
    label: "Subir evento",
    path: "/perfil/eventos",
    icon: FaRegCalendarCheck,
  },
  {
    label: "Explorar",
    path: "/descubre",
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
