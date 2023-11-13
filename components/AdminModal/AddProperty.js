const AddProperty = () => {
    return (
        <Modal
            isOpen={logoutModalOpen}
            heading={"Add Property"}
            positiveText={"Logout"}
            onClose={() => setLogoutModalOpen(false)}
            onSubmit={handleLogout}
            onCancel={() => setLogoutModalOpen(false)}
        >
            <p>Are you sure you want to logout?</p>
        </Modal>
    );
}





















