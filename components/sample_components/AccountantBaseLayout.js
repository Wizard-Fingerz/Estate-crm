import AccountantSidebar from "./AccountantSideBar";

const AccountantBaseLayout = ({ children }) => {
  return (
    <div className="layout">
        <AccountantSidebar />
      <main className="layout__main-content">{children}</main>
    </div>
  );
};

export default AccountantBaseLayout;
