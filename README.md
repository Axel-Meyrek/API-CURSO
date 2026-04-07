# 🎵 Music API Documentation

Esta documentación detalla los recursos y endpoints de la API de Música, diseñada para pruebas y aprendizaje con Postman.

## ⚙️ Configuración Base

- **Base URL:** `http://localhost:3000/api`
- **Autenticación:** Requerida para todos los endpoints.
- **Cabeceras (Headers):**
  - `Authorization: Bearer TOKEN123`
  - `Content-Type: application/json`

---

## 👤 Artists
Gestiona la información de los artistas musicales.

### Artist Schema
| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | int | Identificador único. |
| `name` | string | Nombre del artista. |
| `genre` | string | Género principal. |
| `country` | string | País de origen. |

### Endpoints
- `GET /artists` - Obtener todos los artistas.
- `GET /artists/:id` - Obtener un artista por ID.
- `POST /artists` - Crear un nuevo artista.
- `PUT /artists/:id` - Reemplazar un artista.
- `PATCH /artists/:id` - Actualizar parcialmente un artista.
- `DELETE /artists/:id` - Eliminar un artista.

---

## 💿 Albums
Gestiona los álbumes musicales y su relación con los artistas.

### Album Schema
| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | int | Identificador único. |
| `title` | string | Título del álbum. |
| `artistId` | int | ID del artista (relación). |
| `releaseYear` | int | Año de lanzamiento. |

### Endpoints
- `GET /albums`
- `GET /albums/:id`
- `POST /albums`
- `PUT /albums/:id`
- `PATCH /albums/:id`
- `DELETE /albums/:id`

---

## 🎸 Songs
Recurso principal para las pistas musicales.

### Song Schema
| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | int | Identificador único. |
| `title` | string | Título de la canción. |
| `artist` | string | Nombre del artista. |
| `duration` | int | Duración en segundos. |
| `genre` | string | Género de la canción. |

### Endpoints
- `GET /songs`
- `GET /songs/:id`
- `POST /songs`
- `PUT /songs/:id`
- `PATCH /songs/:id`
- `DELETE /songs/:id`

---

## 📝 Playlists
Agrupaciones de canciones creadas por usuarios.

### Playlist Schema
| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | int | Identificador único. |
| `name` | string | Nombre de la lista. |
| `description` | string | Breve descripción. |
| `songs` | array[int] | Lista de IDs de canciones. |

### Endpoints
- `GET /playlists`
- `GET /playlists/:id`
- `POST /playlists`
- `PUT /playlists/:id`
- `PATCH /playlists/:id`
- `DELETE /playlists/:id`

---

## 🏷️ Genres
Catálogo de géneros musicales disponibles.

### Genre Schema
| Propiedad | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | int | Identificador único. |
| `name` | string | Nombre del género. |
| `description` | string | Definición del género. |

### Endpoints
- `GET /genres`
- `GET /genres/:id`
- `POST /genres`
- `PUT /genres/:id`
- `PATCH /genres/:id`
- `DELETE /genres/:id`

---

## ⚠️ HTTP Status Codes

- `200 OK` - Operación exitosa.
- `201 Created` - Recurso creado exitosamente.
- `401 Unauthorized` - Error de autenticación (Token inválido o ausente).
- `404 Not Found` - El recurso solicitado no existe.

---

## 🧠 Retos para Estudiantes (Postman)

Usa **Postman** para completar las siguientes tareas:

1. **GET All**: Trae todas las canciones de `/api/songs`.
2. **Specific Artist**: Obtén los detalles del artista con ID `2`.
3. **New Playlist**: Crea una playlist con un POST a `/api/playlists`.
4. **Full Update**: Cambia todos los datos del álbum `3` usando PUT.
5. **Partial Edit**: Cambia solo la duración de una canción con PATCH.
6. **Remove Genre**: Elimina el género con ID `5` usando DELETE.
7. **Filter Check**: Visualiza solo canciones de género "Jazz" (filtrado manual en respuesta).
8. **Auth Test**: Intenta un GET sin el header `Authorization` y confirma el error 401.
9. **Error 404**: Busca un artista con ID `999` y confirma el error.
10. **Link Logic**: Crea una canción y luego usa PATCH en una playlist para agregar su ID al array `songs`.
