import Tooltips from "./Tooltips";
import TooltipsButton from "./TooltipsButton";
import TooltipsContainer from "./TooltipsContainer";

const TooltipsComponent = Object.assign(Tooltips, {
  Button: TooltipsButton,
  Container: TooltipsContainer,
});

export default TooltipsComponent;
