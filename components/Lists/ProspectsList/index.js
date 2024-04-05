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
import AddProspectForm from "../../Form/AddProspectForm";
import EditProspectForm from "../../Form/EditProspectForm";
import ViewProspectDetails from "../../Form/ViewProspectDetails";
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

const ProspectsList = () => {
    const [prospectData, setProspectData] = useState([]);
    const [addProspectModal, setAddProspectModal] = useState(false);
    const [downloadProspectModal, setDownloadProspectModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [modalData, setModalData] = useState(null);
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
                const response = await fetch(`${API_BASE_URL}/property/prospects/`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                });
                const data = await response.json();

                // Update state using the callback function
                setProspectData((prevProspectData) => {
                    console.log('Prospect Data:', data);
                    return data;
                });
                // Inside ProspectsList component
                console.log('Prospect Data in ProspectsList:', prospectData);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Log the updated state after it is set by the effect
    useEffect(() => {
        console.log('Prospect Data in ProspectsList:', prospectData);
    }, [prospectData]);

    const openViewModal = (prospectId) => {
        const selectedProspect = prospectData.find(item => item.id === prospectId);
        setModalData(selectedProspect);
        setViewModal(true);
    };

    const closeViewModal = () => {
        setViewModal(false);
        window.location.reload();
    };

    const openEditModal = (prospectId) => {
        const selectedProspect = prospectData.find(item => item.id === prospectId);
        setModalData(selectedProspect);
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

    const closeAddProspectModal = () => {
        setAddProspectModal(false);
        window.location.reload();
    };

    const openAddProspectModal = () => {
        setAddProspectModal(true);
    };

    const closeDownloadProspectModal = () => {
        setDownloadProspectModal(false);
        window.location.reload();
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

            <Table
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
                // Change the mapping in the 'ProspectTable' component

                data={Array.isArray(prospectData) ? prospectData.map((item) => ({
                    id: item.id,
                    prefix: item.prefix,
                    name: item.full_name,
                    address: item.address,
                    email: item.email,
                    phone_number: item.phone_number,
                    phone_number2: item.phone_number2,
                    facebook_username: item.facebook_username,
                    twitter_username: item.twitter_username,
                    instagram_username: item.instagram_username,
                    whatsapp_number: item.whatsapp,
                    status: item.status,

                    "view-btn": {
                        component: () => (
                            <ActionButton
                                label="View"
                                Icon={FaEye}
                                inverse={true}
                                onClick={() => openViewModal(item.id)}
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
                                onClick={() => openEditModal(item.id)}
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
                                onClick={() => openDeleteModal(item.id)}
                                style={{ color: 'red', borderColor: 'red' }}
                            />
                        ),
                    },
                })) : []}

            />

            <Modal
                isOpen={addProspectModal}
                heading={"Add Prospect"}
                onClose={closeAddProspectModal}
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
            >
                {/* Add your components for downloading property details */}
                {/* For example: */}
                {/* <DownloadPropertyDetailsForm onSubmit={handleDownloadProperty} /> */}
            </Modal>
            <Modal
                isOpen={viewModal}
                heading={"View Prospect"}
                onClose={closeViewModal}
            >

                {modalData && <ViewProspectDetails prospectData={modalData} />}

            </Modal>

            <Modal
                isOpen={editModal}
                heading={"Edit Prospect"}
                onClose={closeEditModal}
            >
                {/* Add your form or components for editing property details */}
                {/* For example: */}
                <EditProspectForm />
            </Modal>

            <Modal
                isOpen={deleteModal}
                heading={"Delete Prospect"}
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

export default ProspectsList;
