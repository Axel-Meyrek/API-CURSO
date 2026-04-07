# ✅ Guía de Respuestas: Retos en Postman

Esta guía detalla cómo configurar Postman para resolver cada uno de los 10 retos propuestos.

---

### Configuración Global (Requerida en casi todos los retos)
- **Base URL:** `musica-curso-api.vercel.app`
- **Headers:**
  - `Authorization`: `Bearer TOKEN123`
  - `Content-Type`: `application/json` (Solo para POST, PUT y PATCH)

---

### 1. GET All: Obtener todas las canciones
- **Método:** `GET`
- **URL:** `{{Base URL}}/songs`
- **Headers:** `Authorization: Bearer TOKEN123`
- **Esperado:** `200 OK` y un array con 5 canciones.

---

### 2. Specific Artist: Obtener artista con ID 2
- **Método:** `GET`
- **URL:** `{{Base URL}}/artists/2`
- **Headers:** `Authorization: Bearer TOKEN123`
- **Esperado:** `200 OK` y el objeto de "Luna Blue".

---

### 3. New Playlist: Crear una lista de reproducción
- **Método:** `POST`
- **URL:** `{{Base URL}}/playlists`
- **Headers:** 
  - `Authorization: Bearer TOKEN123`
  - `Content-Type: application/json`
- **Body (raw JSON):**
```json
{
  "name": "Mis Favoritos",
  "description": "Lista creada desde Postman",
  "songs": [1, 3]
}
```
- **Esperado:** `201 Created` y el objeto creado con ID `6`.

---

### 4. Full Update: Reemplazar álbum con ID 3
- **Método:** `PUT`
- **URL:** `{{Base URL}}/albums/3`
- **Headers:** 
  - `Authorization: Bearer TOKEN123`
  - `Content-Type: application/json`
- **Body (raw JSON):**
```json
{
  "title": "Nuevo Álbum Remix",
  "artistId": 3,
  "releaseYear": 2025
}
```
- **Esperado:** `200 OK` con los datos actualizados.

---

### 5. Partial Edit: Cambiar duración de una canción
- **Método:** `PATCH`
- **URL:** `{{Base URL}}/songs/1`
- **Headers:** 
  - `Authorization: Bearer TOKEN123`
  - `Content-Type: application/json`
- **Body (raw JSON):**
```json
{
  "duration": 200
}
```
- **Esperado:** `200 OK` (solo la duración cambia, el resto se mantiene igual).

---

### 6. Remove Genre: Eliminar género con ID 5
- **Método:** `DELETE`
- **URL:** `{{Base URL}}/genres/5`
- **Headers:** `Authorization: Bearer TOKEN123`
- **Esperado:** `200 OK` con un mensaje confirmando la eliminación.

---

### 7. Filter Check: Filtrar canciones de Jazz
- **Método:** `GET`
- **URL:** `{{Base URL}}/songs`
- **Headers:** `Authorization: Bearer TOKEN123`
- **Acción:** Una vez recibida la respuesta, buscar manualmente (o usar la pestaña "Visualize" de Postman) el objeto donde `"genre": "Jazz"`.
- **Esperado:** Identificar a "Luna Blue - Jazz Nights".

---

### 8. Auth Test: Probar error de seguridad
- **Método:** `GET`
- **URL:** `{{Base URL}}/songs`
- **Headers:** (Ninguno o un token incorrecto)
- **Esperado:** `401 Unauthorized`.

---

### 9. Error 404: Buscar artista inexistente
- **Método:** `GET`
- **URL:** `{{Base URL}}/artists/999`
- **Headers:** `Authorization: Bearer TOKEN123`
- **Esperado:** `404 Not Found`.

---

### 10. Link Logic: Agregar canción a playlist
- **Paso A:** Crear canción (`POST /api/songs`) -> Obtener su ID (ej: `6`).
- **Paso B:** Actualizar Playlist (`PATCH /api/playlists/1`).
- **Body (raw JSON):**
```json
{
  "songs": [1, 2, 6]
}
```
- **Esperado:** `200 OK` con la playlist incluyendo el nuevo ID de canción.
