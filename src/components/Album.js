import { NavLink } from "react-router-dom";

export default function Album(props) {
  const handleClick = () => {
    props.onClickAlbum(props.album);
  };

  return (
    <li className="albums__album">
      <h2 className="albums__title">{props.album.title}</h2>
      <p className="albums__count">{props.count} фотографий</p>
      <NavLink
        to={`/photos/${props.album.id}`}
        className="albums__overlay"
        onClick={handleClick}
      >
        <p className="albums__label">Открыть</p>
      </NavLink>
    </li>
  );
}
