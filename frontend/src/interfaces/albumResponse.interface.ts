export interface AlbumResponse {
    id: number
    titulo: string
    genero: string
    fechaPublicacion: string
    canciones: Array<{
        id: number
        titulo: string
        genero: string
        fechaSubida: number[]
        urlCancion: string
        imagenes: string[]
    }>
}