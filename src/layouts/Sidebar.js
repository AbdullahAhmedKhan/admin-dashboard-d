import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Services",
    href: "/services",
    icon: "bi bi-shield-plus",
  },
  {
    title: "Services Request",
    href: "/servicerequest",
    icon: "bi bi-bookmark-x",
  },
  {
    title: "Approved Services",
    href: "/approved",
    icon: "bi bi-check-circle",
  },
  {
    title: "Users",
    href: "/users",
    icon: "bi bi-people",
  },
  {
    title: "Admins",
    href: "/admins",
    icon: "bi bi-person-check",
  },
  {
    title: "Update States",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-info-circle",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-1">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.nixtecsys.com/"
          >
            Go to main website
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
