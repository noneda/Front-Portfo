import HTMLReactParser from "html-react-parser/lib/index";

const ConvertStringToReact = (data) => {
  return HTMLReactParser(data);
};

export default ConvertStringToReact;
