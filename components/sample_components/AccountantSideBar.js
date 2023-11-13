import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { TiBeer } from "react-icons/ti";
import { FiMail, FiFileText, FiBarChart2 } from "react-icons/fi";
import { BsPeople, BsPersonCircle, BsBell, BsPeopleFill } from "react-icons/bs";
import { AiOutlineFileText, AiOutlineLogin, AiOutlineLogout, AiOutlinePlusCircle } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useContext, useState } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import ActionButton from "@/components/sample_components/ui-components/ActionButton";
import Modal from "@/components/sample_components/ui-components/Modal";
import NextLink from "next/link";

const sidebarItems = [
  {
    name: "Property",
    href: "/accountant",
    icon: AiOutlineHome,
  },
  {
    name: "Prospects",
    href: "/accountant/prospects",
    icon: TiContacts,
  },
  {
    name: "Customers",
    href: "/accountant/customers",
    icon: TiContacts,
  },
  {
    name: "Notifications",
    href: "/accountant/notifications",
    icon: BsBell,
  },
  {
    name: "Profile",
    href: "/accountant/profile",
    icon: BsPersonCircle,
  },
];

const AccountantSidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing user session)

    // Redirect to login page after logout
    router.push("/");
  }

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={20}
            height={20}
            className="sidebar__logo"
            src="/assets/logo_white.svg"
            alt="logo"
          />
          <p className="sidebar__logo-name" style={{fontSize: '1em'}}>Accountant</p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <NextLink href={href} className={`sidebar__link ${
                      router.pathname === href ? "sidebar__link--active" : ""
                    }`}>
                  
                    <span className="sidebar__icon">
                      <Icon />
                    </span>
                    <span className="sidebar__name">{name}</span>
                  
                </NextLink>
              </li>
            );
          })}
        </ul>
        {/* <div
          style={{ cursor: 'pointer' }}
          className={`sidebar__link ${
            router.pathname === '' ? 'sidebar__link--active' : ''
          }`}
          onClick={() => setLogoutModalOpen(true)}
        >
          <span className="sidebar__icon">
            <AiOutlineLogout />
          </span>
          <span className="sidebar_name">Logout</span>
        </div> */}
      </aside>
      {/* Logout Confirmation Modal */}
      <Modal
        isOpen={logoutModalOpen}
        heading={"Confirm Logout"}
        positiveText={"Logout"}
        negativeText={"Cancel"}
        onClose={() => setLogoutModalOpen(false)}
        onSubmit={handleLogout}
        onCancel={() => setLogoutModalOpen(false)}
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </div>
  );
};

export default AccountantSidebar;
