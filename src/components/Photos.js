import Photo from "./Photo";
import { useParams } from "react-router-dom";

export default function Photos(props) {
  const { albumId } = useParams();

  const selectedAlbum = [];
  props.photos.map((item) => {
    if (item.albumId == albumId) {
      selectedAlbum.push(item);
    }
  });

  const handlePhotoClick = (id) => {
    props.onClickPhoto({ id: id, photos: selectedAlbum });
  };

  return (
    <>
      <ul className="photos">
        {selectedAlbum.map((item, index) => {
          return (
            <Photo
              key={index}
              number={index}
              photo={item}
              onClickPhoto={handlePhotoClick}
            />
          );
        })}
      </ul>
    </>
  );
}
