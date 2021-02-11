import User from "./User";

export default function Users(props) {
  return (
    <ul className="users">
      {props.users.map((item) => {
        return (
          <User key={item.id} user={item} onClickUser={props.onClickUser} />
        );
      })}
    </ul>
  );
}
