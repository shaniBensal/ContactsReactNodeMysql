import { BsChat } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const ButtonList = [
  {
    id: 0,
    icon: <FaRegEnvelope className="purple"/>,
    linkUrl: "./mail",
    classNameBtn: "purple-btn-outline mr-2 btn-outline",
    classNameLink:"link"
  },
  {
    id: 1,
    icon: <FaEdit/>,
    classNameBtn: "btn btn-outline-primary mr-2 btn-outline text-primary",
    linkUrl: "./contacts/edit/",
    classNameLink: "text-primary link"
  },
  {
    id: 2,
    icon: <BsChat/>,
    classNameBtn: "btn btn-outline-success btn-outline",
    linkUrl: "./mail",
    classNameLink: "text-success link"
  },
];

export default ButtonList;
