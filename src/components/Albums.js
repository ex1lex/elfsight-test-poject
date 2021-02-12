import Album from "./Album";
import { useParams } from "react-router-dom";

export default function Albums(props) {
  const { userId } = useParams();

  return (
    <>
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
