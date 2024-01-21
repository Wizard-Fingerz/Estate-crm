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
import EditPropertyForm from "../../Form/EditPropertyForm";
import AddPropertyForm from "../../Form/AddPropertyForm";
import PropertyTable from "../../DataTables/PropertyTable";

const table_column_heading = [
    {
        key: "reference_id",
        heading: "Reference ID",
    },
    {
        key: "property_name",
        heading: "Property Name",
    },

    {
        key: "property_address",
        heading: "Property Address",
    },
    {
        key: "property_description",
        heading: "Property Description",
    },

    {
        key: "property_owner",
        heading: "Property Owner",
    },
    {
        key: "property_status",
        heading: "Property Status",
    },
    {
        key: "property_value",
        heading: "Property Value",
    },

    {
        key: "property_type",
        heading: "Property Type",
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
        reference_id: {
            value: "1",
        },
        property_name: {
            value: "1 acre of land",
        },
        property_address: {
            value: "Lekki Lagos",
        },
        property_description: {
            value: "1 acre of land in Lekki",
        },
        property_owner: {
            value: "Adewale Kazeem",
        },
        property_status: {
            value: "",
        },
        property_value: {
            value: "",
        },
        property_type: {
            value: "Land",
        },
    },
]
const PropertyList = () => {

    const [addPropertyModal, setAddPropertyModal] = useState(false);
    const [downloadPropertyModal, setDownloadPropertyModal] = useState(false);
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

    const closeAddPropertyModal = () => {
        setAddPropertyModal(false);
    };

    const openAddPropertyModal = () => {
        setAddPropertyModal(true);
    };

    const closeDownloadPropertyModal = () => {
        setDownloadPropertyModal(false);
    };

    const openDownloadPropertyModal = () => {
        setDownloadPropertyModal(true);
    };

    const [modal, setModal] = useState(false);
    const handleClose = () => {
        //alert('closing');
        setModal(false);
    };

    return (
        <>

            <PropertyTable
                headingRightItem1={() => (
                    <ActionButton
                        onClick={openAddPropertyModal}
                        label="Add Property"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                headingRightItem2={() => (
                    <ActionButton
                        onClick={openDownloadPropertyModal}
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
                isOpen={addPropertyModal}
                heading={"Add Property"}
                onClose={closeAddPropertyModal}
                positiveText={'Add'}
                negativeText={'Cancel'}
            >
                <AddPropertyForm />
                {/* Add your form or components for adding property */}
                {/* For example: */}
                {/* <AddPropertyForm onSubmit={handleAddProperty} /> */}
            </Modal>

            <Modal
                isOpen={downloadPropertyModal}
                heading={"Download All Business Details"}
                onClose={closeDownloadPropertyModal}
                positiveText={'Download'}
                negativeText={'Cancel'}
            >
                {/* Add your components for downloading property details */}
                {/* For example: */}
                {/* <DownloadPropertyDetailsForm onSubmit={handleDownloadProperty} /> */}
            </Modal>

            <Modal
                isOpen={viewModal}
                heading={"View Property"}
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
                heading={"Edit Property"}
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
                heading={"Delete Property"}
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

export default PropertyList;
