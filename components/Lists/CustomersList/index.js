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
import EditCustomerForm from "../../Form/EditCustomerForm";
import ConversionForm from "../../Form/ConversionForm";
import Table from "../../DataTables/Table";

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
        key: "phone_number2",
        heading: "Phone Number2",
    },

    {

        key: "whatsapp_number",
        heading: "WhatsApp Number",
    },

    
    {
        key: "facebook_username",
        heading: "Facebook Username",
    },
    
    {
        key: "twitter_username",
        heading: "Twitter Username",
    },
    
    {
        key: "instagram_username",
        heading: "Instagram Username",
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


const CustomersList = () => {
    const [customerData, setCustomerData] = useState([]);
    const [addCustomerModal, setAddCustomerModal] = useState(false);
    const [downloadCustomerModal, setDownloadCustomerModal] = useState(false);
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
                const response = await fetch('http://127.0.0.1:8000/property/customers/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                });
                const data = await response.json();

                // Update state using the callback function
                setCustomerData((prevCustomerData) => {
                    console.log('Customer Data:', data);
                    return data;
                });
                // Inside CustomersList component
                console.log('Customer Data in CustomersList:', customerData);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Log the updated state after it is set by the effect
    useEffect(() => {
        console.log('Customer Data in CustomersList:', customerData);
    }, [customerData]);

    const openViewModal = () => {
        setViewModal(true);
    };

    const closeViewModal = () => {
        setViewModal(false);
        window.location.reload();
    };

    const openEditModal = () => {
        setEditModal(true);
    };

    const closeEditModal = () => {
        setEditModal(false);
        window.location.reload();
    };

    const openDeleteModal = () => {
        setDeleteModal(true);
    };

    const closeDeleteModal = () => {
        setDeleteModal(false);
        window.location.reload();
    };

    const closeAddCustomerModal = () => {
        setAddCustomerModal(false);
        window.location.reload();
    };

    const openAddCustomerModal = () => {
        setAddCustomerModal(true);
    };

    const closeDownloadCustomerModal = () => {
        setDownloadCustomerModal(false);
        window.location.reload();
    };

    const openDownloadCustomerModal = () => {
        setDownloadCustomerModal(true);
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
                        onClick={openAddCustomerModal}
                        label="Add Customer"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                headingRightItem2={() => (
                    <ActionButton
                        onClick={openDownloadCustomerModal}
                        label="Download All"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                heading={table_column_heading}
                data={customerData.map((item) => ({
                    id: item.id,
                    name: item.full_name,
                    address: item.address,
                    email: item.email,
                    phone_number: item.phone_number,
                    phone_number2: item.phone_number2,
                    facebook_username: item.facebook_username,
                    twitter_username: item.twitter_username,
                    instagram_username: item.instagram_username,
                    whatsapp_number: item.whatsapp_number,
                    status: item.status,
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
                isOpen={addCustomerModal}
                heading={"Add Prospect"}
                onClose={closeAddCustomerModal}
            >
                <ConversionForm />
                {/* Add your form or components for adding property */}
                {/* For example: */}
                {/* <AddPropertyForm onSubmit={handleAddProperty} /> */}
            </Modal>

            <Modal
                isOpen={modal}
                heading={"Download all business details"}
                onClose={handleClose}
                positiveText={'Download'}
                negativeText={'Cancel'}
            />
            <Modal
                isOpen={viewModal}
                heading={"View Customer"}
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
                heading={"Edit Customer"}
                onClose={closeEditModal}
            >
                {/* Add your form or components for editing property details */}
                {/* For example: */}
                <EditCustomerForm />
            </Modal>

            <Modal
                isOpen={deleteModal}
                heading={"Delete Customer"}
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

export default CustomersList;
