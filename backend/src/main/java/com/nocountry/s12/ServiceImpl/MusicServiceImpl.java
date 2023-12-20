package com.nocountry.s12.ServiceImpl;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import com.nocountry.s12.Dto.Response.MusicResponseDto;
import com.nocountry.s12.Exception.MiException;
import com.nocountry.s12.Repository.AlbumRepository;
import com.nocountry.s12.Repository.MusicRepository;
import com.nocountry.s12.Service.IMusicService;
import com.nocountry.s12.Service.ImagenService;
import com.nocountry.s12.models.Album;
import com.nocountry.s12.models.Artista;
import com.nocountry.s12.models.Cancion;
import com.nocountry.s12.models.Imagen;
import com.nocountry.s12.models.Usuario;


import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;

@Service
@RequiredArgsConstructor
public class MusicServiceImpl implements IMusicService {

	private final AlbumRepository albumRepository;
	private final ImagenService imagenService;
	private final MusicRepository musicRepository;
	

	@Value("${music.dir}")
	private String musicDir;

	@Value("${ipServidor}")
	private String serverAddress;

	

	@Override
	public MusicResponseDto guardarMusica(MultipartFile audio, MultipartFile img, String titulo, String genero,
			String fechaSubida, String albunId) throws Exception {
		
		
		// signarle el nombre de la cancion a la url
		String urlCancion = "http://" + serverAddress +  ":8080/music/" + audio.getOriginalFilename();

		// buscar un album
		Optional<Album> album = albumRepository.findById(Long.parseLong(albunId));

		if (album.isEmpty()) {
			throw new MiException("no existe album", HttpStatus.BAD_REQUEST);
		}

		// guardar canción
		if (!audio.isEmpty()) {
			String fileName = audio.getOriginalFilename();

			// Crear el directorio si no existe
			File uploadDirFile = new File(musicDir);
			if (!uploadDirFile.exists()) {
				uploadDirFile.mkdirs();
			}

			// Guardar el archivo en el directorio
			Path filePath = Paths.get(musicDir + fileName);
			FileCopyUtils.copy(audio.getBytes(), filePath.toFile());

		} else {
			throw new MiException("No ha cargado una canción", HttpStatus.BAD_REQUEST);
		}

		// instancia de imagen asociada a la canción, guardo de img en claudinary
		Imagen imgMusic = imagenService.save(img);

		// instancia de mi estidad cancion para persistir
		Cancion musica = new Cancion(titulo, genero, fechaSubida, album.get(), imgMusic.getImagenUrl(), urlCancion);

		// guardar cancion
		musicRepository.save(musica);

		// devolver dto
		MusicResponseDto musicResponse = new MusicResponseDto(musica);

		return musicResponse;

	}

	@Override
	public ResponseEntity<Resource> obtenerCancionByName(String nombreCancion) throws MiException {
		try {

			Path musicPath = Paths.get(musicDir, nombreCancion);

			// Crea un recurso FileSystem para el archivo de video
			Resource videoResource = new FileSystemResource(musicPath);

			// Configura las cabeceras de la respuesta
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
			headers.setContentLength(videoResource.contentLength());
			headers.setContentDispositionFormData("attachment", nombreCancion);

			// Devuelve una respuesta con el recurso de video y las cabeceras configuradas
			return ResponseEntity.ok().headers(headers).body(videoResource);
		} catch (Exception e) {
			throw new MiException("error en el nombre de la cancion", HttpStatus.BAD_REQUEST);
		}
	}

	@Override
	public List<MusicResponseDto> listarAll() {
		List<MusicResponseDto> listaCanciones = musicRepository.findAll().stream()
				.map(cancion -> new MusicResponseDto(cancion.getId(), cancion.getTitulo(), cancion.getGenero(),
						cancion.getFechaSubida().toString(), cancion.getImagenes(), cancion.getUrlCancion(),
						cancion.getAlbum().getId()))
				.toList();

		return listaCanciones;
	}

	@Override
	public List<MusicResponseDto> listarCancionesArtista(UserDetails userDetails) throws MiException {

		if (userDetails instanceof Artista && userDetails != null) {
			Usuario artista = (Artista) userDetails;
			Long artistaId = artista.getId();

			Optional<List<Cancion>> optionalCanciones = albumRepository.findCancionesByArtistaId(artistaId);

			if (optionalCanciones.isEmpty()) {
				throw new MiException("la lista esta vacia", HttpStatus.OK);
			}

			List<MusicResponseDto> listCanciones = optionalCanciones.get().stream()
					.map(cancion -> new MusicResponseDto(cancion.getId(), cancion.getTitulo(), cancion.getGenero(),
							cancion.getFechaSubida().toString(), cancion.getImagenes(), cancion.getUrlCancion(),
							cancion.getAlbum().getId()))
					.toList();

			return listCanciones;

		} else {
			throw new MiException("error en el", HttpStatus.BAD_REQUEST);

		}

	}

	@Override
	public List<MusicResponseDto> generoAll(String genero) {
		
		
		List<MusicResponseDto> listCancionesPorGenero = musicRepository.findByGenero(genero).stream()
				.map(cancion -> new MusicResponseDto(cancion.getId(), cancion.getTitulo(), cancion.getGenero(),
							cancion.getFechaSubida().toString(), cancion.getImagenes(), cancion.getUrlCancion(),
							cancion.getAlbum().getId()))
					.toList();
		
		return listCancionesPorGenero;
	}

}
