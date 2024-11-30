import CodeViewer from "../CodeViewer/CodeViewer";
import { CodeViewerContainer } from "../Shared/StyledComponents";
import ImageIcon from "@mui/icons-material/Image";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { AboutCard } from "@byteui/mui-core";

const CardDemo = () => (
  <CodeViewerContainer isCard>
    <AboutCard
      bgColor="#0e0e0e"
      textColor="white"
      image={<ImageIcon sx={{ fontSize: "5rem" }} />}
      heading="about me"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip"
      socialLinks={[
        { icon: <GitHubIcon />, url: "https://github.com/username" },
        { icon: <TwitterIcon />, url: "https://twitter.com/username" },
        { icon: <InstagramIcon />, url: "https://twitter.com/username" },
        { icon: <YouTubeIcon />, url: "https://twitter.com/username" },
      ]}
      socialIconColor="white"
      socialIconHoverColor="#FF0000"
      buttonText="resume"
      buttonBgColor="white"
      buttonHoverBgColor="red"
      buttonColor="#000000"
      buttonHoverColor="white"
      buttonLink="#"
    />
  </CodeViewerContainer>
);

const Card3 = () => {
  const shortCode = `<AboutCard
  bgColor="#0e0e0e"
  textColor="white"
  image={<ImageIcon sx={{ fontSize: "5rem" }} />}
  heading="about me"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip"
  socialLinks={[
    { icon: <GitHubIcon />, url: "https://github.com/username" },
    { icon: <TwitterIcon />, url: "https://twitter.com/username" },
    { icon: <InstagramIcon />, url: "https://twitter.com/username" },
    { icon: <YouTubeIcon />, url: "https://twitter.com/username" },
  ]}
  socialIconColor="white"
  socialIconHoverColor="#FF0000"
  buttonText="resume"
  buttonBgColor="white"
  buttonHoverBgColor="red"
  buttonColor="#000000"
  buttonHoverColor="white"
  buttonLink="#"
/>`;

  const fullCode = `import { CodeViewerContainer } from "../Shared/StyledComponents";
import ImageIcon from "@mui/icons-material/Image";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { AboutCard } from "@byteui/mui-core";

const CardDemo = () => (
  <CodeViewerContainer isCard>
    <AboutCard
      bgColor="#0e0e0e"
      textColor="white"
      image={<ImageIcon sx={{ fontSize: "5rem" }} />}
      heading="about me"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip"
      socialLinks={[
        { icon: <GitHubIcon />, url: "https://github.com/username" },
        { icon: <TwitterIcon />, url: "https://twitter.com/username" },
        { icon: <InstagramIcon />, url: "https://twitter.com/username" },
        { icon: <YouTubeIcon />, url: "https://twitter.com/username" },
      ]}
      socialIconColor="white"
      socialIconHoverColor="#FF0000"
      buttonText="resume"
      buttonBgColor="white"
      buttonHoverBgColor="red"
      buttonColor="#000000"
      buttonHoverColor="white"
      buttonLink="#"
    />
  </CodeViewerContainer>
);

export default CardDemo;`;

  return (
    <CodeViewer shortCode={shortCode} fullCode={fullCode} demo={CardDemo} />
  );
};

export default Card3;
