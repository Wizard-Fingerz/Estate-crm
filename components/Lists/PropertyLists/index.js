import ActionButton from "../../sample_components/ui-components/ActionButton";
import {
    FaCloudDownloadAlt,
    FaRegFilePdf,
    FaLongArrowAltDown,
    FaEye,
    FaTrash,
    FaEdit,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Modal from "../../sample_components/ui-components/Modal";
import EditPropertyForm from "../../Form/EditPropertyForm";
import AddPropertyForm from "../../Form/AddPropertyForm";
import Table from "../../DataTables/Table";

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

const PropertyList = () => {
    const [tableData, setTableData] = useState([]);
    const [addPropertyModal, setAddPropertyModal] = useState(false);
    const [downloadPropertyModal, setDownloadPropertyModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);


    useEffect(() => {
        const fetchData = async () => {


            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in local storage');
                return;
            }

            try {
                const response = await fetch('http://127.0.0.1:8000/property/properties/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                });
                const data = await response.json();
                console.log(data);
                setTableData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

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
            <Table
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
                data={tableData.map((item) => ({
                    id: item.id,
                    reference_id: item.id,
                    property_name: item.name,
                    property_address: item.address,
                    property_description: item.description,
                    property_status: item.status,
                    property_value: item.value,
                    property_type: item.type,
                    "view-btn": {
                        component: () => (
                            <ActionButton
                                label="View"
                                Icon={FaEye}
                                inverse={true}
                                onClick={() => openViewModal(item.id)} // Pass item.id to the openViewModal function
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
                                onClick={() => openEditModal(item.id)} // Pass item.id to the openEditModal function
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
                                onClick={() => openDeleteModal(item.id)} // Pass item.id to the openDeleteModal function
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
            >
                {/* Add your components for downloading property details */}
                {/* For example: */}
                {/* <DownloadPropertyDetailsForm onSubmit={handleDownloadProperty} /> */}
            </Modal>

            <Modal
                isOpen={viewModal}
                heading={"View Property"}
                onClose={closeViewModal}
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
            >
                {/* Add your form or components for editing property details */}
                {/* For example: */}
                <EditPropertyForm />
            </Modal>

            <Modal
                isOpen={deleteModal}
                heading={"Delete Property"}
                onClose={closeDeleteModal}
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
