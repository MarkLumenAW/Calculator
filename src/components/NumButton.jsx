import clsx from "clsx"

export default function Button(props) {
  
  return(
    <div className={clsx('btn', props.className)} id={props.id}>
      <span>{props.buttonName}</span>
    </div>
  )
};
