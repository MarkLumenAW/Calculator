import clsx from "clsx";
import { Icon } from "@iconify/react";

export default function IconButton(props) {

  return (
    <div className={clsx('btn funcBtn', props.className)} id={props.id}>
      <Icon icon={props.iconName} color={props.iconColor} width={props.width} height={props.height}/>
    </div>
  );
};
