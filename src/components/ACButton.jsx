import clsx from "clsx"
import { useSelector, useDispatch } from "react-redux"
import { updatePrimary,updateSecondary,updateFormula } from "../reducers/displaySlice"
import { useState } from "react";
import { clickChangeStyle } from "../utils/clickChangeStyle";

export default function ACButton(props) {

const dispatch = useDispatch()

const [click, setClick] = useState(false);
const buttonStyle = clsx(
  !click ? 'btn btn-darkgray' : 'btn btn-darkgray-clicked'
);

  function handleClick() {
    clickChangeStyle(setClick);
    dispatch(updatePrimary({value:"0"}))
    dispatch(updateSecondary({value:""}))
    dispatch(updateFormula({value:""}))
  }

  return(
    <div className={clsx(buttonStyle, props.className)} id={props.id} onClick={handleClick}>
      <span>{props.buttonName}</span>
    </div>
  )
};
