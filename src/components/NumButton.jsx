import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { updatePrimary, updateSecondary, updateFormula, updatePrimaryReset, updateSecondaryReset } from "../reducers/displaySlice";
import { useState } from "react";
import { clickChangeStyle } from "../utils/clickChangeStyle";

export default function NumButton(props) {
  const dispatch = useDispatch();

  const primaryDisplay = useSelector(state => state.display.primary);
  const primaryReset = useSelector((state) => state.display.primaryReset);
  const secondaryReset = useSelector((state) => state.display.secondaryReset);


  const [click, setClick] = useState(false);
  const buttonStyle = clsx(
    !click ? 'btn btn-gray' : 'btn btn-gray-clicked'
  );

  function handleClick() {
    clickChangeStyle(setClick);

    if (secondaryReset) {
      dispatch(updateSecondary({ value: "" }));
      dispatch(updateFormula({ value: "" }));
      dispatch(updateSecondaryReset({ value: false }));
      dispatch(updatePrimary({ value: props.buttonName }));
      return;
    }

    if (primaryReset) {
      dispatch(updatePrimaryReset({ value: false }));
      dispatch(updatePrimary({ value: props.buttonName }));
      return;
    }

    const primaryDisplayValue = () => {
      if (primaryDisplay === "0" && props.buttonName !== ".") {
        return props.buttonName;
      }

      if (primaryDisplay === "0" && props.buttonName === ".") {
        return "0.";
      }
      if (primaryDisplay.includes(".") && props.buttonName === ".") {
        return primaryDisplay;
      }
      return primaryDisplay + props.buttonName;
    };

    dispatch(updatePrimary({ value: primaryDisplayValue() }));
  }

  return (
    <div className={clsx(buttonStyle, props.className)} id={props.id} onClick={handleClick}>
      <span>{props.buttonName}</span>
    </div>
  );
};
