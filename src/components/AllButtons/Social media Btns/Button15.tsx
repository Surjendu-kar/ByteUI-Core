import { Box } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";

const ButtonDemo = () => {
  return <Box></Box>;
};

const Button15 = () => {
  const shortCode = ``;

  const fullCode = `/* Full component code as shown above */`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button15;
