import Album from "./Album";
import { useParams, NavLink } from "react-router-dom";

export default function Albums(props) {
  const { userId } = useParams();

  return (
    <>
      <NavLink to="/" className="link link_type_back">
        Назад
      </NavLink>
      <ul className="albums">
        {props.albums.map((item) => {
          const photos = props.photos.filter((photo) => {
            return photo.albumId == item.id;
          });
          if (item.userId == userId) {
            return (
              <Album
                key={item.id}
                count={photos.length}
                album={item}
                onClickAlbum={props.onClickAlbum}
              />
            );
          }
        })}
      </ul>
    </>
  );
}
