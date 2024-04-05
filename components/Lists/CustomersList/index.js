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
import SendBulkMail from "../../Form/SendBulkMail";
import SendSingleMail from "../../Form/SendSingleMail";
import Table from "../../DataTables/Table";
import { API_BASE_URL } from "@/pages/constants";

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

        key: "amount",
        heading: "Amount Paid",
    },

    {

        key: "payment_status",
        heading: "Payment Status",
    },
    {
        key: "view-btn",
        heading: "",
    },

    {
        key: "followup-btn",
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
    const [bulkEmailModal, setBulkEmailModal] = useState(false);
    const [singleEmailModal, setSingleEmailModal] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in local storage');
                return;
            }

            try {
                const response = await fetch(`${API_BASE_URL}/property/customers/`, {
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

    const openBulkEmailModal = () => {
        setBulkEmailModal(true);
    };

    const closeBulkEmailModal = () => {
        setBulkEmailModal(false);
    };
    const openSingleEmailModal = () => {
        setSingleEmailModal(true);
    };

    const closeSingleEmailModal = () => {
        setSingleEmailModal(false);
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
                        onClick={openBulkEmailModal}
                        label="Bulk Email"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                headingRightItem3={() => (
                    <ActionButton
                        onClick={openDownloadCustomerModal}
                        label="Download All"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                categoryKey='payment_status'
                heading={table_column_heading}
                data={Array.isArray(customerData) ? customerData.map((item) => ({
                    
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

                    "followup-btn": {
                        component: () => (
                            <ActionButton
                                label="Send Mail"
                                Icon={FaEdit}
                                inverse={true}
                                onClick={openSingleEmailModal}
                                style={{ color: 'green', borderColor: 'green' }}
                            />
                        ),
                    },

                })) : []}

            />
            <Modal
                isOpen={addCustomerModal}
                heading={"Convert Prospect"}
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

            <Modal
                isOpen={bulkEmailModal}
                heading={"Send Bulk Mail"}
                onClose={closeBulkEmailModal}
            >
                {/* Add your form or components for editing property details */}
                {/* For example: */}
                <SendBulkMail />
            </Modal>

            <Modal
                isOpen={singleEmailModal}
                heading={"Send Single Mail"}
                onClose={closeSingleEmailModal}
            >
                {/* Add your form or components for editing property details */}
                {/* For example: */}
                <SendSingleMail />
            </Modal>

        </>
    );
};

export default CustomersList;
