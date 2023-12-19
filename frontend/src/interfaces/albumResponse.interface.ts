export interface AlbumResponse {
    id: number
    titulo: string
    genero: string
    fechaPublicacion: string
    canciones: Array<{
        id: number
        titulo: string
        genero: string
        fechaSubida: Array<number>
        urlCancion: string
        imagenes: Array<string>
    }>
}