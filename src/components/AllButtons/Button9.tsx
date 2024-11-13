import { Button, styled, keyframes, ButtonProps, Box } from "@mui/material";
import CodeViewer from "../CodeViewer/CodeViewer";
import React, { ReactElement } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const fly = keyframes`
  from {
    transform: translateY(0.1em);
  }
  to {
    transform: translateY(-0.1em);
  }
`;

interface StyledButtonProps extends ButtonProps {
  icon?: ReactElement;
}

interface SendIconProps {
  width?: number;
  height?: number;
}

const StyledButton = styled(Button)<StyledButtonProps>(() => ({
  "&.MuiButton-root": {
    backgroundColor: "royalblue",
    color: "#fff",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: 100,
    lineHeight: 1,
    margin: 0,
    padding: "0.4em 1em",
    paddingLeft: "0.9em",
    textTransform: "capitalize",
    borderRadius: "10px",
    borderWidth: "2px",
    zIndex: 0,
    overflow: "hidden",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    WebkitAppearance: "button",
    mixBlendMode: "normal",
    display: "flex",
    alignItems: "center",
    gap: "0.3em",

    "&:hover": {
      backgroundColor: "royalblue",
    },

    "& .icon-wrapper": {
      display: "flex",
      transition: "transform 0.3s ease-in-out",
    },

    "&:hover .icon-wrapper": {
      animation: `${fly} 0.6s ease-in-out infinite alternate`,
    },

    "& .icon-wrapper svg": {
      display: "block",
      transformOrigin: "center center",
      transition: "transform 0.3s ease-in-out",
      fontSize: "24px",
    },

    "&:hover .icon-wrapper svg": {
      transform: "translateX(1.2em) scale(1.1)",
    },

    "& .button-content": {
      transition: "transform 0.3s ease-in-out",
    },

    "&:hover .button-content": {
      transform: "translateX(5em)",
    },

    "&:active": {
      transform: "scale(0.95)",
    },
  },
}));

interface EnhancedStyledButtonProps extends StyledButtonProps {
  children: React.ReactNode;
}

const EnhancedStyledButton: React.FC<EnhancedStyledButtonProps> = ({
  icon,
  children,
  ...props
}) => (
  <StyledButton disableRipple {...props}>
    {icon && <div className="icon-wrapper">{icon}</div>}
    <span className="button-content">{children}</span>
  </StyledButton>
);

const SendIcon: React.FC<SendIconProps> = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
      fill="currentColor"
      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
    ></path>
  </svg>
);

const ButtonDemo: React.FC = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <EnhancedStyledButton icon={<SendIcon />}>Send</EnhancedStyledButton>
      <EnhancedStyledButton icon={<LocalShippingIcon />}>
        Ship
      </EnhancedStyledButton>
    </Box>
  );
};

const Button9: React.FC = () => {
  const shortCode = `<EnhancedStyledButton icon={<SendIcon />}>Send</EnhancedStyledButton>
<EnhancedStyledButton icon={<LocalShippingIcon />}>Ship</EnhancedStyledButton>`;

  const fullCode = `import { Button, styled, keyframes, ButtonProps, Box } from "@mui/material";
import React, { ReactElement } from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

interface StyledButtonProps extends ButtonProps {
  icon?: ReactElement;
}

interface SendIconProps {
  width?: number;
  height?: number;
}

const fly = keyframes\`
  from {
    transform: translateY(0.1em);
  }
  to {
    transform: translateY(-0.1em);
  }
\`;

const StyledButton = styled(Button)<StyledButtonProps>(() => ({
  "&.MuiButton-root": {
    backgroundColor: "royalblue",
    color: "#fff",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: 100,
    lineHeight: 1,
    margin: 0,
    padding: "0.4em 1em",
    paddingLeft: "0.9em",
    textTransform: "capitalize",
    borderRadius: "10px",
    borderWidth: "2px",
    zIndex: 0,
    overflow: "hidden",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    WebkitAppearance: "button",
    mixBlendMode: "normal",
    display: "flex",
    alignItems: "center",
    gap: "0.3em",

    "&:hover": {
      backgroundColor: "royalblue",
    },

    "& .icon-wrapper": {
      display: "flex",
      transition: "transform 0.3s ease-in-out",
    },

    "&:hover .icon-wrapper": {
      animation: \`\${fly} 0.6s ease-in-out infinite alternate\`,
    },

    "& .icon-wrapper svg": {
      display: "block",
      transformOrigin: "center center",
      transition: "transform 0.3s ease-in-out",
      fontSize: "24px",
    },

    "&:hover .icon-wrapper svg": {
      transform: "translateX(1.2em) scale(1.1)",
    },

    "& .button-content": {
      transition: "transform 0.3s ease-in-out",
    },

    "&:hover .button-content": {
      transform: "translateX(5em)",
    },

    "&:active": {
      transform: "scale(0.95)",
    },
  },
}));

interface EnhancedStyledButtonProps extends StyledButtonProps {
  children: React.ReactNode;
}

const EnhancedStyledButton: React.FC<EnhancedStyledButtonProps> = ({ 
  icon, 
  children, 
  ...props 
}) => (
  <StyledButton disableRipple {...props}>
    {icon && <div className="icon-wrapper">{icon}</div>}
    <span className="button-content">{children}</span>
  </StyledButton>
);

const SendIcon: React.FC<SendIconProps> = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
      fill="currentColor"
      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
    ></path>
  </svg>
);

const ButtonDemo: React.FC = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <EnhancedStyledButton icon={<SendIcon />}>Send</EnhancedStyledButton>
      <EnhancedStyledButton icon={<LocalShippingIcon />}>
        Ship
      </EnhancedStyledButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button9;
