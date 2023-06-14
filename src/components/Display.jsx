export default function Display(props) {

  return (
    <div className={props.className} id={props.id}>
      <span>{props.children}</span>
    </div>
  );
};
