import { FC } from "react";
import { Button, styled, Box, keyframes } from "@mui/material";
import CodeViewer from "../../CodeViewer/CodeViewer";

const AddButton = styled(Button)(() => ({
  cursor: "pointer",
  outline: "none",
  transition: "transform 0.3s",
  padding: 0,
  minWidth: "unset",
  backgroundColor: "transparent",
  width: "40px",
  height: "40px",

  "&:hover": {
    backgroundColor: "transparent",
    transform: "rotate(90deg)",
  },

  "& svg": {
    stroke: "rgb(161, 161, 170)",
    fill: "none",
    width: "50px",
    height: "50px",
    transition: "fill 0.3s",
  },

  "&:hover svg": {
    fill: "rgb(39, 39, 42)",
  },

  "&:active": {
    backgroundColor: "transparent",
    "& svg": {
      stroke: "rgb(228, 228, 231)",
      fill: "rgb(82, 82, 91)",
      transition: "none",
    },
  },
}));

const shakeBack = keyframes`
  0% {
    transform: translate(-100%, 100%);
  }
  50% {
    transform: translate(20%, -20%);
  }
  100% {
    transform: translate(0%, 0%);
  }
`;

const SearchButton = styled(Button)(() => ({
  width: "40px",
  height: "40px",
  position: "relative",
  border: "none",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  overflow: "hidden",
  minWidth: "unset",
  padding: 0,

  "& span": {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  "& svg": {
    width: "18px",
    height: "18px",
    fill: "palevioletred",
    transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    backgroundColor: "palevioletred",
    width: "100%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    transform: "translate(-100%, 100%)",
    borderRadius: "inherit",
  },

  "&:hover": {
    "& svg": {
      fill: "white",
      transform: "scale(1.3)",
    },
    "&::before": {
      animation: `${shakeBack} 0.6s forwards`,
    },
  },

  "&:active": {
    boxShadow: "none",
  },
}));

const likeThumbAnimation = keyframes`
  33.333% {
    transform: rotate(-20deg) translate(1px, 2px) scale(1.75);
  }
  66.666% {
    transform: rotate(20deg) translate(2px, -2px) scale(0.75);
    d: path("m8.05,11.99c0-.84.28-1.07,1.2-1.25,1.6-.31,2.3-.64,2.9-1.09,0,0,1.64-1.31,2.21-3.11,1.12-3.59,2.11-4.85,3.72-4.85,2.27,0,2.96,2.22,2.55,3.54-.6,1.97-3.81,4.09-3.94,4.99-.07.49.76.72,1.16.72h2.5c1.2,0,2.2,1,2.2,2.2l-1.1,5.6c-.3,1.5-1.02,2.23-2.2,2.2h-7.6c-2,0-3.6-1.6-3.6-3.6v-5.35Z");
  }
  99.999% {
    transform: rotate(0deg) translate(0px, 0px) scale(1);
  }
`;

const likeSleeveAnimation = keyframes`
  33.333% {
    transform: rotate(10deg) translate(6px, -2px) scale(1.75);
  }
  66.666% {
    transform: rotate(-10deg) translate(-6px, 0px) scale(0.75);
  }
  99.999% {
    transform: rotate(0deg) translate(0px, 0px) scale(1);
  }
`;

const LikeButton = styled(Button)(() => ({
  height: "2.5rem",
  width: "2.5rem",
  borderRadius: "0.375rem",
  border: "1px solid hsl(0, 0%, 60%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "unset",
  backgroundColor: "transparent",

  "& svg": {
    overflow: "visible",
    height: "1.5rem",
    width: "1.5rem",
  },

  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "hsl(211, 100%, 48%)",
    transition: "border-color 1s cubic-bezier(0.5, 0, 0.25, 1)",

    "& svg": {
      fill: "hsla(211, 100%, 48%, 0.5)",
      color: "hsl(211, 100%, 48%)",
    },

    "& [data-d='thumb']": {
      animation: `${likeThumbAnimation} 1s cubic-bezier(0.5, 0, 0.25, 1) forwards`,
    },

    "& [data-d='sleeves']": {
      animation: `${likeSleeveAnimation} 1s cubic-bezier(0.5, 0, 0.25, 1) forwards`,
    },
  },
}));

const EditButton = styled(Button)(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "rgb(93, 93, 116)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.123)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s",
  minWidth: "unset",
  padding: 0,

  "&::before": {
    content: '""',
    width: "200%",
    height: "200%",
    backgroundColor: "rgb(102, 102, 141)",
    position: "absolute",
    zIndex: 1,
    transform: "scale(0)",
    transition: "all 0.3s",
    borderRadius: "50%",
    filter: "blur(10px)",
  },

  "&:hover": {
    backgroundColor: "rgb(93, 93, 116)",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.336)",
    "&::before": {
      transform: "scale(1)",
    },
    "& svg": {
      transform: "rotate(-15deg) translateX(5px)",
    },
    "&::after": {
      transform: "scaleX(1)",
      left: 0,
      transformOrigin: "right",
    },
  },

  "& svg": {
    height: "15px",
    fill: "white",
    zIndex: 3,
    transition: "all 0.2s",
    transformOrigin: "bottom",
  },

  "&::after": {
    content: '""',
    width: "20px",
    height: "1.5px",
    position: "absolute",
    bottom: "10px",
    left: "-15px",
    backgroundColor: "white",
    borderRadius: "2px",
    zIndex: 2,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.5s ease-out",
  },
}));

const ButtonDemo: FC = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <AddButton disableRipple title="Add New">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth="1.5"
          ></path>
          <path d="M8 12H16" strokeWidth="1.5"></path>
          <path d="M12 16V8" strokeWidth="1.5"></path>
        </svg>
      </AddButton>

      <SearchButton disableRipple>
        <span>
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"></path>
          </svg>
        </span>
      </SearchButton>

      <LikeButton disableRipple>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
        >
          <path
            d="m8.05,11.99c0-.84.28-1.07,1.2-1.25,1.6-.31,2.35-.74,3.14-1.54,1.19-1.21,1.58-1.97,2.18-3.24.66-1.69,1.55-2.82,3.04-2.76.9.03,2.33.8,1.67,2.72-.31.9-1.98,3.61-2.23,4.23-.18.46.4.8.8.8h2.5c1.2,0,2.2,1,2.2,2.2l-1.1,5.6c-.3,1.5-1.02,2.23-2.2,2.2h-7.6c-2,0-3.6-1.6-3.6-3.6v-5.35Z"
            data-d="thumb"
          />
          <path
            d="m5.4,19.9c0,.6-.5,1.1-1.1,1.1h-1c-1,0-1.9-.9-1.9-1.9v-6.3c0-1,.9-1.9,1.9-1.9h.9c.7,0,1.2.6,1.2,1.2v7.7Z"
            data-d="sleeves"
          />
        </svg>
      </LikeButton>

      <EditButton disableRipple>
        <svg height="1em" viewBox="0 0 512 512">
          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
        </svg>
      </EditButton>
    </Box>
  );
};

const Button12: FC = () => {
  const shortCode = `<AddButton disableRipple title="Add New">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      strokeWidth="1.5"
    ></path>
    <path d="M8 12H16" strokeWidth="1.5"></path>
    <path d="M12 16V8" strokeWidth="1.5"></path>
  </svg>
</AddButton>

 <SearchButton disableRipple>
  <span>
    <svg
      viewBox="0 0 24 24"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"></path>
    </svg>
  </span>
</SearchButton>

<LikeButton disableRipple>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    strokeLinejoin="round"
    strokeLinecap="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
  >
    <path
      d="m8.05,11.99c0-.84.28-1.07,1.2-1.25,1.6-.31,2.35-.74,3.14-1.54,1.19-1.21,1.58-1.97,2.18-3.24.66-1.69,1.55-2.82,3.04-2.76.9.03,2.33.8,1.67,2.72-.31.9-1.98,3.61-2.23,4.23-.18.46.4.8.8.8h2.5c1.2,0,2.2,1,2.2,2.2l-1.1,5.6c-.3,1.5-1.02,2.23-2.2,2.2h-7.6c-2,0-3.6-1.6-3.6-3.6v-5.35Z"
      data-d="thumb"
    />
    <path
      d="m5.4,19.9c0,.6-.5,1.1-1.1,1.1h-1c-1,0-1.9-.9-1.9-1.9v-6.3c0-1,.9-1.9,1.9-1.9h.9c.7,0,1.2.6,1.2,1.2v7.7Z"
      data-d="sleeves"
    />
  </svg>
</LikeButton>

<EditButton disableRipple>
  <svg height="1em" viewBox="0 0 512 512">
    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
  </svg>
</EditButton>`;

  const fullCode = `import { FC } from "react";
import { Button, styled, Box, keyframes } from "@mui/material";

const AddButton = styled(Button)(() => ({
  cursor: "pointer",
  outline: "none",
  transition: "transform 0.3s",
  padding: 0,
  minWidth: "unset",
  backgroundColor: "transparent",
  width: "40px",
  height: "40px",

  "&:hover": {
    backgroundColor: "transparent",
    transform: "rotate(90deg)",
  },

  "& svg": {
    stroke: "rgb(161, 161, 170)",
    fill: "none",
    width: "50px",
    height: "50px",
    transition: "fill 0.3s",
  },

  "&:hover svg": {
    fill: "rgb(39, 39, 42)",
  },

  "&:active": {
    backgroundColor: "transparent",
    "& svg": {
      stroke: "rgb(228, 228, 231)",
      fill: "rgb(82, 82, 91)",
      transition: "none",
    },
  },
}));

const shakeBack = keyframes\`
  0% {
    transform: translate(-100%, 100%);
  }
  50% {
    transform: translate(20%, -20%);
  }
  100% {
    transform: translate(0%, 0%);
  }
\`;

const SearchButton = styled(Button)(() => ({
  width: "40px",
  height: "40px",
  position: "relative",
  border: "none",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  overflow: "hidden",
  minWidth: "unset",
  padding: 0,

  "& span": {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  "& svg": {
    width: "18px",
    height: "18px",
    fill: "palevioletred",
    transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    backgroundColor: "palevioletred",
    width: "100%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    transform: "translate(-100%, 100%)",
    borderRadius: "inherit",
  },

  "&:hover": {
    "& svg": {
      fill: "white",
      transform: "scale(1.3)",
    },
    "&::before": {
      animation: \`\${shakeBack} 0.6s forwards\`,
    },
  },

  "&:active": {
    boxShadow: "none",
  },
}));

const likeThumbAnimation = keyframes\`
  33.333% {
    transform: rotate(-20deg) translate(1px, 2px) scale(1.75);
  }
  66.666% {
    transform: rotate(20deg) translate(2px, -2px) scale(0.75);
    d: path("m8.05,11.99c0-.84.28-1.07,1.2-1.25,1.6-.31,2.3-.64,2.9-1.09,0,0,1.64-1.31,2.21-3.11,1.12-3.59,2.11-4.85,3.72-4.85,2.27,0,2.96,2.22,2.55,3.54-.6,1.97-3.81,4.09-3.94,4.99-.07.49.76.72,1.16.72h2.5c1.2,0,2.2,1,2.2,2.2l-1.1,5.6c-.3,1.5-1.02,2.23-2.2,2.2h-7.6c-2,0-3.6-1.6-3.6-3.6v-5.35Z");
  }
  99.999% {
    transform: rotate(0deg) translate(0px, 0px) scale(1);
  }
\`;

const likeSleeveAnimation = keyframes\`
  33.333% {
    transform: rotate(10deg) translate(6px, -2px) scale(1.75);
  }
  66.666% {
    transform: rotate(-10deg) translate(-6px, 0px) scale(0.75);
  }
  99.999% {
    transform: rotate(0deg) translate(0px, 0px) scale(1);
  }
\`;

const LikeButton = styled(Button)(() => ({
  height: "2.5rem",
  width: "2.5rem",
  padding: "0.4rem 0.5rem",
  borderRadius: "0.375rem",
  border: "1px solid hsl(0, 0%, 60%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "unset",
  backgroundColor: "transparent",

  "& svg": {
    overflow: "visible",
    height: "1.5rem",
    width: "1.5rem",
  },

  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "hsl(211, 100%, 48%)",
    transition: "border-color 1s cubic-bezier(0.5, 0, 0.25, 1)",

    "& svg": {
      fill: "hsla(211, 100%, 48%, 0.5)",
      color: "hsl(211, 100%, 48%)",
    },

    "& [data-d='thumb']": {
      animation: \`\${likeThumbAnimation} 1s cubic-bezier(0.5, 0, 0.25, 1) forwards\`,
    },

    "& [data-d='sleeves']": {
      animation: \`\${likeSleeveAnimation} 1s cubic-bezier(0.5, 0, 0.25, 1) forwards\`,
    },
  },
}));

const EditButton = styled(Button)(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "rgb(93, 93, 116)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.123)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s",
  minWidth: "unset",
  padding: 0,

  "&::before": {
    content: '""',
    width: "200%",
    height: "200%",
    backgroundColor: "rgb(102, 102, 141)",
    position: "absolute",
    zIndex: 1,
    transform: "scale(0)",
    transition: "all 0.3s",
    borderRadius: "50%",
    filter: "blur(10px)",
  },

  "&:hover": {
    backgroundColor: "rgb(93, 93, 116)",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.336)",
    "&::before": {
      transform: "scale(1)",
    },
    "& svg": {
      transform: "rotate(-15deg) translateX(5px)",
    },
    "&::after": {
      transform: "scaleX(1)",
      left: 0,
      transformOrigin: "right",
    },
  },

  "& svg": {
    height: "15px",
    fill: "white",
    zIndex: 3,
    transition: "all 0.2s",
    transformOrigin: "bottom",
  },

  "&::after": {
    content: '""',
    width: "20px",
    height: "1.5px",
    position: "absolute",
    bottom: "10px",
    left: "-15px",
    backgroundColor: "white",
    borderRadius: "2px",
    zIndex: 2,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.5s ease-out",
  },
}));

const ButtonDemo: FC = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>

      <AddButton disableRipple title="Add New">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            strokeWidth="1.5"
          ></path>
          <path d="M8 12H16" strokeWidth="1.5"></path>
          <path d="M12 16V8" strokeWidth="1.5"></path>
        </svg>
      </AddButton>

       <SearchButton disableRipple>
        <span>
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"></path>
          </svg>
        </span>
      </SearchButton>

      <LikeButton disableRipple>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
        >
          <path
            d="m8.05,11.99c0-.84.28-1.07,1.2-1.25,1.6-.31,2.35-.74,3.14-1.54,1.19-1.21,1.58-1.97,2.18-3.24.66-1.69,1.55-2.82,3.04-2.76.9.03,2.33.8,1.67,2.72-.31.9-1.98,3.61-2.23,4.23-.18.46.4.8.8.8h2.5c1.2,0,2.2,1,2.2,2.2l-1.1,5.6c-.3,1.5-1.02,2.23-2.2,2.2h-7.6c-2,0-3.6-1.6-3.6-3.6v-5.35Z"
            data-d="thumb"
          />
          <path
            d="m5.4,19.9c0,.6-.5,1.1-1.1,1.1h-1c-1,0-1.9-.9-1.9-1.9v-6.3c0-1,.9-1.9,1.9-1.9h.9c.7,0,1.2.6,1.2,1.2v7.7Z"
            data-d="sleeves"
          />
        </svg>
      </LikeButton>

      <EditButton disableRipple>
        <svg height="1em" viewBox="0 0 512 512">
          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
        </svg>
      </EditButton>
    </Box>
  );
};

export default ButtonDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={ButtonDemo} />
  );
};

export default Button12;
