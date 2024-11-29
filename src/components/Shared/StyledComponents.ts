import { styled, Typography } from "@mui/material";

interface CodeViewerContainerProps {
  isLoader?: boolean;
  isCard?: boolean;
}

export const CodeViewerContainer = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isLoader" && prop !== "isCard",
})<CodeViewerContainerProps>(({ theme, isLoader, isCard }) => ({
  display: "flex",
  alignItems: "center",
  gap: isLoader ? theme.spacing(10) : theme.spacing(2),
  flexWrap: "wrap",
  justifyContent: "center",
  margin: isCard ? "1rem 0" : "",

  [theme.breakpoints.down("sm")]: {
    gap: isLoader ? theme.spacing(6) : theme.spacing(1),
  },
}));
