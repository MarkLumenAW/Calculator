export default function Display(props) {

  return (
    <div className={props.className} id={props.id}>{props.children}</div>
  );
};
