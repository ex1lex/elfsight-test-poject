import { NavLink } from "react-router-dom";

export default function User(props) {
  const handleClick = () => {
    props.onClickUser(props.user);
  };

  return (
    <li className="users__user">
      <h1 className="users__title">{props.user.name}</h1>
      <div className="users__ocerlay" onClick={handleClick}>
        <NavLink to={`/albums/${props.user.id}`} className="users__label">
          Открыть
        </NavLink>
      </div>
    </li>
  );
}
