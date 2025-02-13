import "./base.css";

import RenderIcons from "../RenderIcons";
const TranslateFixedButton = ({ change, onChange }) => {
  return (
    <RenderIcons
      component="SiGoogletranslate "
      name="Translate"
      color="#4285F4"
      Always={[change, onChange]}
    />
  );
};

export default TranslateFixedButton;
