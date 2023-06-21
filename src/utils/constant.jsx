import { ReactComponent as Instagram } from "../assets/images/icons/instagram.svg";
import { ReactComponent as Dribble } from "../assets/images/icons/dribble.svg";
import { ReactComponent as Facebook } from "../assets/images/icons/facebook.svg";
import { ReactComponent as Github } from "../assets/images/icons/github.svg";
import { ReactComponent as Linkdin } from "../assets/images/icons/linkedin.svg";
import { ReactComponent as Medium } from "../assets/images/icons/medium.svg";
import { ReactComponent as Pinterest } from "../assets/images/icons/pinterest.svg";
import { ReactComponent as Youtube } from "../assets/images/icons/youtube.svg";
import { ReactComponent as Telegram } from "../assets/images/icons/telegram.svg";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import BookIcon from "@mui/icons-material/Book";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export const navBarLinks = [
  {
    linkName: "home",
    linkImage: <HomeIcon />,
    url: "/",
  },
  {
    linkName: "about",
    linkImage: <PersonIcon />,
    url: "/about",
  },
  {
    linkName: "skills",
    linkImage: <CodeIcon />,
    url: "/skills",
  },
  {
    linkName: "services",
    linkImage: <WorkIcon />,
    url: "/services",
  },
  {
    linkName: "blog",
    linkImage: <BookIcon />,
    url: "/blog",
  },
  {
    linkName: "contact",
    linkImage: <PermContactCalendarIcon />,
    url: "/contact",
  },
];

export const socialMediaLinks = [
  {
    linkName: "github",
    linkImage: <Github />,
    url: "",
  },
  {
    linkName: "linkdin",
    linkImage: <Linkdin />,
    url: "",
  },
  {
    linkName: "Instagram",
    linkImage: <Instagram />,
    url: "",
  },
  //   {
  //     linkName: "dribble",
  //     linkImage: <Dribble />,
  //     url: "",
  //   },
  {
    linkName: "facebook",
    linkImage: <Facebook />,
    url: "",
  },
  {
    linkName: "medium",
    linkImage: <Medium />,
    url: "",
  },
  {
    linkName: "pinterest",
    linkImage: <Pinterest />,
    url: "",
  },
  //   {
  //     linkName: "youtube",
  //     linkImage: <Youtube />,
  //     url: "",
  //   },
  //   {
  //     linkName: "telegram",
  //     linkImage: <Telegram />,
  //     url: "",
  //   },
];
