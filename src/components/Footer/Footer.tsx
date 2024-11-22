import { Stack, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        alignItems: "center",
        color: "#ffff",
        padding: "1rem 0",
        marginTop: "auto",
        [theme.breakpoints.down("sm")]: { fontSize: "13px" },
      }}
    >
      @Surjendu kar
    </Stack>
  );
}

export default Footer;
