import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { updatePrimary, updateSecondary, updateFormula, updatePrimaryReset, updateSecondaryReset } from "../reducers/displaySlice";
import { calculate } from "../utils/calculation";
import { useState } from "react";
import { clickChangeStyle } from "../utils/clickChangeStyle";

export default function EqualButton(props) {
  const dispatch = useDispatch();

  const primaryDisplay = useSelector(state => state.display.primary);
  const secondaryDisplay = useSelector(state => state.display.secondary);
  const formula = useSelector(state => state.display.formula);

  const [click, setClick] = useState(false);
  const buttonStyle = clsx(
    !click ? 'btn btn-orange' : 'btn btn-orange-clicked'
  );

  function handleClick() {
    clickChangeStyle(setClick);

    dispatch(updateSecondary({ value: secondaryDisplay + primaryDisplay + "=" }));
    dispatch(updatePrimary({ value: calculate(formula + primaryDisplay)}));
    dispatch(updateSecondaryReset({ value: true }));
  }

  return (
    <div className={clsx(buttonStyle, props.className)} id={props.id} onClick={handleClick}>
      <span>{props.buttonName}</span>
    </div>
  );
};
