import { NavLink } from "react-router-dom";

export default function Photo(props) {
  const handleClick = () => {
    props.onClickPhoto(props.number);
  };
  return (
    <li className="photos__photo">
      <img
        src={props.photo.thumbnailUrl}
        alt="картинка"
        className="photos__img"
      />
      <div className="photos__overlay" onClick={handleClick}>
        <p className="photos__label">Открыть</p>
      </div>
    </li>
  );
}
