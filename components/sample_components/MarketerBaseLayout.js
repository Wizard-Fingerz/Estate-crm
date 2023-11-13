import MarketerSidebar from "./MarketerSideBar";

const MarketerBaseLayout = ({ children }) => {
  return (
    <div className="layout">
        <MarketerSidebar />
      <main className="layout__main-content">{children}</main>
    </div>
  );
};

export default MarketerBaseLayout;
