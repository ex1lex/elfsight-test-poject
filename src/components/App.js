import React from "react";
import * as Api from "../utils/api";
import Popup from "./Popup";
import Users from "./Users";
import Albums from "./Albums";
import Photos from "./Photos";
import { Route, Switch } from "react-router-dom";

function App() {
  const [users, setUsers] = React.useState([]);
  const [albums, setAlbums] = React.useState([]);
  const [photos, setPhotos] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState({});
  const [selectedAlbums, setSelectedAlbums] = React.useState({});
  const [selectedAlbum, setSelectedAlbum] = React.useState({});
  const [selectedPhotos, setSelectedPhotos] = React.useState({});

  React.useEffect(() => {
    Promise.all([Api.getUsers(), Api.getAlbums(), Api.getPhotos()])
      .then(([users, albums, photos]) => {
        setUsers(users);
        setAlbums(albums);
        setPhotos(photos);
      })
      .catch(Api.errors);
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handlePhotoClick = (data) => {
    setSelectedAlbum(data);
  };

  const closePopup = () => {
    setSelectedAlbum({});
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Users users={users} onClickUser={handleUserClick} />
        </Route>
        <Route path="/albums/:userId">
          <Albums
            albums={albums}
            photos={photos}
            onClickAlbum={handleAlbumClick}
          />
        </Route>
        <Route path="/photos/:albumId">
          <Photos photos={photos} onClickPhoto={handlePhotoClick} />
          <Popup selectedAlbum={selectedAlbum} onClose={closePopup} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
