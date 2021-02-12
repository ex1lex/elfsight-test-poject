import { NavLink } from "react-router-dom";

export default function User(props) {
  const handleClick = () => {
    props.onClickUser(props.user);
  };

  return (
    <li className="users__user">
      <h2 className="users__title">{props.user.name}</h2>
      <NavLink
        to={`/albums/${props.user.id}`}
        className="users__overlay"
        onClick={handleClick}
      >
        <p className="users__label" onClick={handleClick}>
          Открыть
        </p>
      </NavLink>
    </li>
  );
}
