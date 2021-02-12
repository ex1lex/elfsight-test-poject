import React from "react";
import * as Api from "../utils/api";
import Popup from "./Popup";
import Users from "./Users";
import Albums from "./Albums";
import Photos from "./Photos";
import { Route, Switch, useRouteMatch, NavLink } from "react-router-dom";

function App() {
  const [users, setUsers] = React.useState([]);
  const [albums, setAlbums] = React.useState([]);
  const [photos, setPhotos] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState({});
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

  const handlePhotoClick = (album) => {
    setSelectedAlbum(album);
  };

  const closePopup = () => {
    setSelectedAlbum({});
  };

  const { path, url } = useRouteMatch();

  return (
    <div className="gallery">
      <Switch>
        <Route exact path="/">
          <h1 className="gallery__title">Список пользователей</h1>
          <Users users={users} onClickUser={handleUserClick} />
        </Route>
        <Route path="/albums/:userId">
          <NavLink to="/" className="gallery__link">
            Назад
          </NavLink>
          <h1 className="gallery__title">Список альбомов пользователя</h1>
          <Albums
            albums={albums}
            photos={photos}
            onClickAlbum={handleAlbumClick}
          />
        </Route>
        <Route path="/photos/:albumId">
          <NavLink to={`/albums/${selectedUser.id}`} className="gallery__link">
            Назад
          </NavLink>
          <h1 className="gallery__title">Фотографии</h1>
          <Photos photos={photos} onClickPhoto={handlePhotoClick} />
          <Popup selectedAlbum={selectedAlbum} onClose={closePopup} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
