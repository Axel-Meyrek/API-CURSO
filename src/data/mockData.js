const mockData = {
  artists: [
    { id: 1, name: "Axel Sound", genre: "Trap", country: "Argentina" },
    { id: 2, name: "Luna Blue", genre: "Jazz", country: "France" },
    { id: 3, name: "The Electric Waves", genre: "Rock", country: "UK" },
    { id: 4, name: "DJ Pulsar", genre: "EDM", country: "Germany" },
    { id: 5, name: "Sonia Rhythm", genre: "Pop", country: "Spain" }
  ],
  albums: [
    { id: 1, title: "Midnight Flow", artistId: 1, releaseYear: 2023 },
    { id: 2, title: "Blue Horizon", artistId: 2, releaseYear: 2021 },
    { id: 3, title: "Static Pulse", artistId: 3, releaseYear: 2022 },
    { id: 4, title: "Neon Nights", artistId: 4, releaseYear: 2024 },
    { id: 5, title: "Echoes of Spain", artistId: 5, releaseYear: 2020 }
  ],
  songs: [
    { id: 1, title: "Midnight Flow", artist: "Axel Sound", duration: 180, genre: "Trap" },
    { id: 2, title: "Jazz Nights", artist: "Luna Blue", duration: 240, genre: "Jazz" },
    { id: 3, title: "Rock Anthem", artist: "The Electric Waves", duration: 210, genre: "Rock" },
    { id: 4, title: "Techno Beats", artist: "DJ Pulsar", duration: 300, genre: "EDM" },
    { id: 5, title: "Pop Love", artist: "Sonia Rhythm", duration: 195, genre: "Pop" }
  ],
  playlists: [
    { id: 1, name: "Study Lo-fi", description: "Perfect for focus", songs: [1, 2] },
    { id: 2, name: "Gym Energy", description: "Intense beats", songs: [3, 4] },
    { id: 3, name: "Chill Vibes", description: "Relax at home", songs: [2, 5] },
    { id: 4, name: "Party Mix", description: "Non-stop dance", songs: [1, 4, 5] },
    { id: 5, name: "Rock Classics", description: "Best of the best", songs: [3] }
  ],
  genres: [
    { id: 1, name: "Trap", description: "Rhythmic and bass-heavy" },
    { id: 2, name: "Jazz", description: "Improvisational and soulful" },
    { id: 3, name: "Rock", description: "Strong beats and electric guitars" },
    { id: 4, name: "EDM", description: "Electronic Dance Music" },
    { id: 5, name: "Pop", description: "Popular and melodic" }
  ]
};

module.exports = mockData;
