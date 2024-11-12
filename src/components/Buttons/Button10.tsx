import { Box, IconButton, styled, Typography } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import CodeViewer from "../CodeViewer/CodeViewer";

const SocialContainer = styled(Box)(() => ({
  display: "inline-flex",
  width: "100%",
  justifyContent: "center",
  gap: "2rem",
  alignItems: "center",
}));

const ButtonsContainer = styled(Box)(() => ({
  display: "inline-flex",
  justifyContent: "center",
  gap: "10px",
}));

interface IconWrapperProps {
  bgcolor?: string;
}

const IconWrapper = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "bgcolor",
})<IconWrapperProps>(({ bgcolor }) => ({
  position: "relative",
  background: "#fff",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  fontSize: "18px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  padding: 0,

  "& svg": {
    width: "24px",
    height: "24px",
    color: "#444",
    transition: "all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },

  "& .tooltip": {
    position: "absolute",
    top: 0,
    fontSize: "14px",
    background: "transparent",
    color: "transparent",
    padding: "5px 8px",
    borderRadius: "5px",
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
    opacity: 0,
    pointerEvents: "none",
    transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",

    "&::before": {
      position: "absolute",
      content: '""',
      height: "8px",
      width: "8px",
      background: "transparent",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%) rotate(45deg)",
      transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },

  "&:hover": {
    background: bgcolor,

    "& svg": {
      color: "#fff",
    },

    "& .tooltip": {
      top: "-45px",
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      color: "#fff",
      background: bgcolor,
      textShadow: "0px -1px 0px rgba(0, 0, 0, 0.1)",

      "&::before": {
        background: bgcolor,
      },
    },
  },
}));

interface SocialButtonProps {
  variant?: "facebook" | "twitter" | "instagram";
}

const SocialButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "variant",
})<SocialButtonProps>(({ variant }) => ({
  width: "45px",
  height: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  backgroundColor: "transparent",
  position: "relative",
  borderRadius: "7px",
  cursor: "pointer",
  transition: "all .3s",
  padding: 0,

  "& .svgContainer": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    backdropFilter: "blur(4px)",
    letterSpacing: "0.8px",
    borderRadius: "10px",
    transition: "all .3s",
    border: "1px solid rgba(156, 156, 156, 0.466)",
    zIndex: 1,

    "& svg": {
      width: "24px",
      height: "24px",
      color: "#fff",
    },
  },

  "& .BG": {
    position: "absolute",
    content: '""',
    width: "100%",
    height: "100%",
    zIndex: 0,
    borderRadius: "9px",
    pointerEvents: "none",
    transition: "all .3s",
    ...(variant === "facebook" && {
      background: "linear-gradient(45deg, #1877f2, #0056e0)",
    }),
    ...(variant === "twitter" && {
      background: "linear-gradient(45deg, #1da1f2, #0d8bd9)",
    }),
    ...(variant === "instagram" && {
      background:
        "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    }),
  },

  "&:hover": {
    "& .BG": {
      transform: "rotate(35deg)",
      transformOrigin: "bottom",
    },
    "& .svgContainer": {
      backgroundColor: "rgba(156, 156, 156, 0.466)",
    },
  },
}));

const ButtonDemo = () => {
  return (
    <SocialContainer>
      {/* First Style */}
      <ButtonsContainer>
        <IconWrapper bgcolor="#1877f2">
          <Typography className="tooltip">Facebook</Typography>
          <Facebook />
        </IconWrapper>

        <IconWrapper bgcolor="#1da1f2">
          <Typography className="tooltip">Twitter</Typography>
          <Twitter />
        </IconWrapper>

        <IconWrapper bgcolor="#e4405f">
          <Typography className="tooltip">Instagram</Typography>
          <Instagram />
        </IconWrapper>
      </ButtonsContainer>

      {/* Second Style */}
      <ButtonsContainer>
        <SocialButton variant="facebook">
          <span className="BG" />
          <span className="svgContainer">
            <Facebook />
          </span>
        </SocialButton>

        <SocialButton variant="twitter">
          <span className="BG" />
          <span className="svgContainer">
            <Twitter />
          </span>
        </SocialButton>

        <SocialButton variant="instagram">
          <span className="BG" />
          <span className="svgContainer">
            <Instagram />
          </span>
        </SocialButton>
      </ButtonsContainer>
    </SocialContainer>
  );
};

const Button10 = () => {
  const shortCode = `<ButtonsContainer>
  <IconWrapper bgcolor="#1877f2">
    <Typography className="tooltip">Facebook</Typography>
    <Facebook />
  </IconWrapper>
  <IconWrapper bgcolor="#1da1f2">
    <Typography className="tooltip">Twitter</Typography>
    <Twitter />
  </IconWrapper>
  <IconWrapper bgcolor="#e4405f">
    <Typography className="tooltip">Instagram</Typography>
    <Instagram />
  </IconWrapper>
</ButtonsContainer>

<ButtonsContainer>
  <SocialButton variant="facebook">
    <span className="BG" />
    <span className="svgContainer">
      <Facebook />
    </span>
  </SocialButton>
  <SocialButton variant="twitter">
    <span className="BG" />
    <span className="svgContainer">
      <Twitter />
    </span>
  </SocialButton>
  <SocialButton variant="instagram">
    <span className="BG" />
    <span className="svgContainer">
      <Instagram />
    </span>
  </SocialButton>
</ButtonsContainer>`;

  const fullCode = `import { Box, IconButton, styled, Typography } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const SocialContainer = styled(Box)(() => ({
  display: "inline-flex",
  width: "100%",
  justifyContent: "center",
  gap: "2rem",
  alignItems: "center",
}));

const ButtonsContainer = styled(Box)(() => ({
  display: "inline-flex",
  justifyContent: "center",
  gap: "10px",
}));

interface IconWrapperProps {
  bgcolor?: string;
}

const IconWrapper = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "bgcolor",
})<IconWrapperProps>(({ bgcolor }) => ({
  position: "relative",
  background: "#fff",
  borderRadius: "50%",

  width: "50px",
  height: "50px",
  fontSize: "18px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  padding: 0,

  "& svg": {
    width: "24px",
    height: "24px",
    color: "#444",
    transition: "all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },

  "& .tooltip": {
    position: "absolute",
    top: 0,
    fontSize: "14px",
    background: "transparent",
    color: "transparent",
    padding: "5px 8px",
    borderRadius: "5px",
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
    opacity: 0,
    pointerEvents: "none",
    transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",

    "&::before": {
      position: "absolute",
      content: '""',
      height: "8px",
      width: "8px",
      background: "transparent",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%) rotate(45deg)",
      transition: "all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },

  "&:hover": {
    background: bgcolor,

    "& svg": {
      color: "#fff",
    },

    "& .tooltip": {
      top: "-45px",
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
      color: "#fff",
      background: bgcolor,
      textShadow: "0px -1px 0px rgba(0, 0, 0, 0.1)",

      "&::before": {
        background: bgcolor,
      },
    },
  },
}));

interface SocialButtonProps {
  variant?: "facebook" | "twitter" | "instagram";
}

const SocialButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "variant",
})<SocialButtonProps>(({ variant }) => ({
  width: "45px",
  height: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  backgroundColor: "transparent",
  position: "relative",
  borderRadius: "7px",
  cursor: "pointer",
  transition: "all .3s",
  padding: 0,

  "& .svgContainer": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    backdropFilter: "blur(4px)",
    letterSpacing: "0.8px",
    borderRadius: "10px",
    transition: "all .3s",
    border: "1px solid rgba(156, 156, 156, 0.466)",
    zIndex: 1,

    "& svg": {
      width: "24px",
      height: "24px",
      color: "#fff",
    },
  },

  "& .BG": {
    position: "absolute",
    content: '""',
    width: "100%",
    height: "100%",
    zIndex: 0,
    borderRadius: "9px",
    pointerEvents: "none",
    transition: "all .3s",
    ...(variant === "facebook" && {
      background: "linear-gradient(45deg, #1877f2, #0056e0)",
    }),
    ...(variant === "twitter" && {
      background: "linear-gradient(45deg, #1da1f2, #0d8bd9)",
    }),
    ...(variant === "instagram" && {
      background:
        "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    }),
  },

  "&:hover": {
    "& .BG": {
      transform: "rotate(35deg)",
      transformOrigin: "bottom",
    },
    "& .svgContainer": {
      backgroundColor: "rgba(156, 156, 156, 0.466)",
    },
  },
}));

const ButtonDemo = () => {
  return (
    <SocialContainer>
      {/* First Style */}
      <ButtonsContainer>
        <IconWrapper bgcolor="#1877f2">
          <Typography className="tooltip">Facebook</Typography>
          <Facebook />
        </IconWrapper>

        <IconWrapper bgcolor="#1da1f2">
          <Typography className="tooltip">Twitter</Typography>
          <Twitter />
        </IconWrapper>

        <IconWrapper bgcolor="#e4405f">
          <Typography className="tooltip">Instagram</Typography>
          <Instagram />
        </IconWrapper>
      </ButtonsContainer>

      {/* Second Style */}
      <ButtonsContainer>
        <SocialButton variant="facebook">
          <span className="BG" />
          <span className="svgContainer">
            <Facebook />
          </span>
        </SocialButton>

        <SocialButton variant="twitter">
          <span className="BG" />
          <span className="svgContainer">
            <Twitter />
          </span>
        </SocialButton>

        <SocialButton variant="instagram">
          <span className="BG" />
          <span className="svgContainer">
            <Instagram />
          </span>
        </SocialButton>
      </ButtonsContainer>
    </SocialContainer>
    );
  };
export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button10;
