var playlist = {artitstName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  return Object.assign({}, playlist, artistName)
}