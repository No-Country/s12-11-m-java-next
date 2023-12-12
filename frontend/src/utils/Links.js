import { FaRegCalendarCheck } from "react-icons/fa6"
import { IoIosMusicalNotes, IoIosVideocam } from "react-icons/io"
import { MdOutlineExplore, MdOutlinePostAdd } from "react-icons/md"

export const LinkPerfil = [
  {
    label: "Música",
    path: "/perfil/musica",
  },
  {
    label: "Posts",
    path: "/perfil/posts",
  },
  {
    label: "Eventos",
    path: "/perfil/eventos",
  },
]

export const LinkFeed = [
  {
    label: "Subir música",
    path: "/perfil/musica",
    icon: IoIosMusicalNotes,
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
    path: "/",
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
