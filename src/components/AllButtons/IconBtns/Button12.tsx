import CodeViewer from "../../CodeViewer/CodeViewer";
import { AddIcon, EditIcon, LikeIcon, SearchIcon } from "@byteui/mui-core";
import { CodeViewerContainer } from "../../Shared/StyledComponents";

const ButtonDemo = () => {
  return (
    <CodeViewerContainer>
      <AddIcon />
      <SearchIcon />
      <LikeIcon />
      <EditIcon />
    </CodeViewerContainer>
  );
};

const Button12 = () => {
  const shortCode = `<AddIcon />
<SearchIcon />
<LikeIcon />
<EditIcon />`;

  const fullCode = `import { Box } from "@mui/material";
import { AddIcon, EditIcon, LikeIcon, SearchIcon } from "@byteui/mui-core";

const ButtonDemo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center",flexWrap: "wrap",justifyContent: "center", gap: 2 }}>
      <AddIcon />
      <SearchIcon />
      <LikeIcon />
      <EditIcon />
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button12;
