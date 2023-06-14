import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { updatePrimary, updateSecondary, updateFormula, updatePrimaryReset, updateSecondaryReset } from "../reducers/displaySlice";
import { useState } from "react";
import { clickChangeStyle } from "../utils/clickChangeStyle";

export default function OperationButton(props) {
  const dispatch = useDispatch();

  const primaryDisplay = useSelector(state => state.display.primary);
  const secondaryDisplay = useSelector(state => state.display.secondary);
  const formula = useSelector(state => state.display.formula);
  const primaryReset = useSelector((state) => state.display.primaryReset);
  const secondaryReset = useSelector((state) => state.display.secondaryReset);

  const [click, setClick] = useState(false);
  const buttonStyle = clsx(
    !click ? 'btn btn-orange' : 'btn btn-orange-clicked'
  );

  function handleClick() {
    clickChangeStyle(setClick);

    if (secondaryReset) {
      dispatch(updateSecondary({ value: primaryDisplay + props.buttonName }));
      dispatch(updateFormula({ value: primaryDisplay + props.operation }));
      dispatch(updateSecondaryReset({ value: false }));
      dispatch(updatePrimaryReset({ value: true }));
      return;
    }

    if (primaryReset) {
      const operatorRegex = /[+\-*/]/;
      let cutSecondaryDisplay = "";
      let cutFormula = "";

      if (operatorRegex.test(formula[formula.length - 2])) {
        cutSecondaryDisplay = secondaryDisplay.slice(0, secondaryDisplay.length - 2);
        cutFormula = formula.slice(0, formula.length - 2);
        dispatch(updateSecondary({ value: cutSecondaryDisplay + props.buttonName }));
        dispatch(updateFormula({ value: cutFormula + props.operation }));
        dispatch(updatePrimaryReset({ value: true }));
        return;
      }

      if (props.buttonName === "-") {
        dispatch(updateSecondary({ value: secondaryDisplay + props.buttonName }));
        dispatch(updateFormula({ value: formula + props.operation }));
        dispatch(updatePrimaryReset({ value: true }));
        return;
      }

      cutSecondaryDisplay = secondaryDisplay.slice(0, secondaryDisplay.length - 1);
      cutFormula = formula.slice(0, formula.length - 1);

      dispatch(updateSecondary({ value: cutSecondaryDisplay + props.buttonName }));
      dispatch(updateFormula({ value: cutFormula + props.operation }));
      dispatch(updatePrimaryReset({ value: true }));
      return;
    }

    dispatch(updateSecondary({
      value: primaryDisplay[primaryDisplay.length - 1] === "." ?
        secondaryDisplay + primaryDisplay.slice(0, -1) + props.buttonName
        : secondaryDisplay + primaryDisplay + props.buttonName
    }));
    dispatch(updatePrimary({
      value:
        primaryDisplay[primaryDisplay.length - 1] === "." ?
          primaryDisplay.slice(0, -1)
          : primaryDisplay
    }));
    dispatch(updateFormula({ value: formula + primaryDisplay + props.operation }));
    dispatch(updatePrimaryReset({ value: true }));
  }

  return (
    <div className={clsx(buttonStyle, props.className)} id={props.id} onClick={handleClick}>
      <span>{props.buttonName}</span>
    </div>
  );
};


