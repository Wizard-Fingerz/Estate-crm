import ActionButton from "../../sample_components/ui-components/ActionButton";

import {
    FaCloudDownloadAlt,
    FaRegFilePdf,
    FaLongArrowAltDown,
    FaEye,
    FaTrash,
    FaEdit,
} from "react-icons/fa";
import { useState } from "react";
import Modal from "../../sample_components/ui-components/Modal";
import AddProspectForm from "../../Form/AddProspectForm";
import ProspectTable from "../../DataTables/ProspectTable";

const table_column_heading = [
    {
        key: "name",
        heading: "Name",
    },
    {
        key: "address",
        heading: "Address",
        // icon: FaLongArrowAltDown,
    },

    {
        key: "email",
        heading: "Email",
    },
    {
        key: "phone_number",
        heading: "Phone Number",
    },

    {
        key: "whatsapp_number",
        heading: "WhatsApp Numberr",
    },
    {
        key: "view-btn",
        heading: "",
    },

    {
        key: "edit-btn",
        heading: "",
    },

    {
        key: "delete-btn",
        heading: "",
    },
];

const table_data = [
    {
        id: 1,
        name: {
            value: "Tokyo Hassan",
        },
        address: {
            value: "Lagos, Nigeria",
        },
        email: {
            value: "tokyo@gmail.com",
        },
        phone_number: {
            value: "+234902343434",
        },

        whatsapp_number: {
            value: "+234902343434",
        },
    },
]
const ProspectsList = () => {
    const [addProspectModal, setAddProspectModal] = useState(false);
    const [downloadProspectModal, setDownloadProspectModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const openViewModal = () => {
        setViewModal(true);
    };

    const closeViewModal = () => {
        setViewModal(false);
    };

    const openEditModal = () => {
        setEditModal(true);
    };

    const closeEditModal = () => {
        setEditModal(false);
    };

    const openDeleteModal = () => {
        setDeleteModal(true);
    };

    const closeDeleteModal = () => {
        setDeleteModal(false);
    };
    const closeAddProspectModal = () => {
        setAddProspectModal(false);
    };

    const openAddProspectModal = () => {
        setAddProspectModal(true);
    };

    const closeDownloadProspectModal = () => {
        setDownloadProspectModal(false);
    };

    const openDownloadProspectModal = () => {
        setDownloadProspectModal(true);
    };

    const [modal, setModal] = useState(false);
    const handleClose = () => {
        //alert('closing');
        setModal(false);
    };

    return (
        <>

            <ProspectTable
                headingRightItem1={() => (
                    <ActionButton
                        onClick={openAddProspectModal}
                        label="Add Prospect"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                headingRightItem2={() => (
                    <ActionButton
                        onClick={openDownloadProspectModal}
                        label="Download All"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                heading={table_column_heading}
                data={table_data.map((item) => ({
                    ...item,
                    "view-btn": {
                        component: () => (
                            <ActionButton
                                label="View"
                                Icon={FaEye}
                                inverse={true}
                                onClick={openViewModal}
                                style={{ color: 'blue', borderColor: 'blue' }}
                            />
                        ),
                    },
                    "edit-btn": {
                        component: () => (
                            <ActionButton
                                label="Edit"
                                Icon={FaEdit}
                                inverse={true}
                                onClick={openEditModal}
                                style={{ color: 'green', borderColor: 'green' }}
                            />
                        ),
                    },
                    "delete-btn": {
                        component: () => (
                            <ActionButton
                                label="Delete"
                                Icon={FaTrash}
                                inverse={true}
                                onClick={openDeleteModal}
                                style={{ color: 'red', borderColor: 'red' }}
                            />
                        ),
                    },
                }))}

            />

            <Modal
                isOpen={addProspectModal}
                heading={"Add Prospect"}
                onClose={closeAddProspectModal}
                positiveText={'Add'}
                negativeText={'Cancel'}
            >
                <AddProspectForm />
                {/* Add your form or components for adding property */}
                {/* For example: */}
                {/* <AddPropertyForm onSubmit={handleAddProperty} /> */}
            </Modal>

            <Modal
                isOpen={downloadProspectModal}
                heading={"Download All Prospect Details"}
                onClose={closeDownloadProspectModal}
                positiveText={'Download'}
                negativeText={'Cancel'}
            >
                {/* Add your components for downloading property details */}
                {/* For example: */}
                {/* <DownloadPropertyDetailsForm onSubmit={handleDownloadProperty} /> */}
            </Modal>
            <Modal
                isOpen={viewModal}
                heading={"View Prospect"}
                onClose={closeViewModal}
                positiveText={'Close'}
                negativeText={null}
            >
                {/* Add your components for viewing property details */}
                {/* For example: */}
                <div>
                    <p>Property details go here.</p>
                </div>
            </Modal>

            <Modal
                isOpen={editModal}
                heading={"Edit Prospect"}
                onClose={closeEditModal}
                positiveText={'Save'}
                negativeText={'Cancel'}
            >
                {/* Add your form or components for editing property details */}
                {/* For example: */}
                <EditPropertyForm />
            </Modal>

            <Modal
                isOpen={deleteModal}
                heading={"Delete Prospect"}
                onClose={closeDeleteModal}
                positiveText={'Delete'}
                negativeText={'Cancel'}
            >
                {/* Add your components for deleting property details */}
                {/* For example: */}
                <div>
                    <p>Are you sure you want to delete this property?</p>
                    <ActionButton
                        label="Delete"
                        Icon={FaTrash}
                        inverse={true}
                        onClick={() => {
                            // Handle delete action here
                            closeDeleteModal();
                        }}
                        style={{ color: 'red', borderColor: 'red' }}
                    />
                </div>
            </Modal>
        </>
    );
};

export default ProspectsList;
