import AdminSidebar from "./AdminSideBar";

const AdminBaseLayout = ({ children }) => {
  return (
    <div className="layout">
        <AdminSidebar />
      <main className="layout__main-content">{children}</main>
    </div>
  );
};

export default AdminBaseLayout;
