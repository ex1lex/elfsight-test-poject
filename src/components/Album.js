import { NavLink } from "react-router-dom";

export default function Album(props) {
  const handleClick = () => {
    props.onClickAlbum(props.album);
  };

  return (
    <li className="albums__album">
      <h1 className="albums__title">{props.album.title}</h1>
      <p className="albums__count">{props.count} фотографий</p>
      <div className="albums__overlay" onClick={handleClick}>
        <NavLink to={`/photos/${props.album.id}`} className="albums__label">
          Открыть
        </NavLink>
      </div>
    </li>
  );
}
