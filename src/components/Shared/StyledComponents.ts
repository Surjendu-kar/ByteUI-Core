import { styled, Typography } from "@mui/material";

interface CodeViewerContainerProps {
  isLoader?: boolean;
}

export const CodeViewerContainer = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isLoader",
})<CodeViewerContainerProps>(({ theme, isLoader }) => ({
  display: "flex",
  alignItems: "center",
  gap: isLoader ? theme.spacing(10) : theme.spacing(2),
  flexWrap: "wrap",
  justifyContent: "center",

  [theme.breakpoints.down("sm")]: {
    gap: isLoader ? theme.spacing(6) : theme.spacing(1),
  },
}));
