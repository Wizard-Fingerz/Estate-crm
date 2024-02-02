import ActionButton from "../../sample_components/ui-components/ActionButton";

import {
    FaCloudDownloadAlt,
    FaRegFilePdf,
    FaLongArrowAltDown,
    FaEye,
    FaTrash,
    FaEdit,
} from "react-icons/fa";
import { useState, useEffect, useHistory } from "react";
import { useRouter } from 'next/router';
import Modal from "../../sample_components/ui-components/Modal";
import AddMarketerForm from "../../Form/AddMarketerForm";
import EditMarketerForm from "../../Form/EditMarketerForm";
import ViewMarketerDetails from "../../Form/ViewMarketerDetails";
import Table from "../../DataTables/Table";

const table_column_heading = [
    {
        key: "employee_id",
        heading: "Employee ID",
    },
    {
        key: "employee_name",
        heading: "Employee Name",
        // icon: FaLongArrowAltDown,
    },

    {
        key: "employee_contact",
        heading: "Employee Contact",
    },
    {
        key: "employee_email",
        heading: "Employee Email",
    },
    {
        key: "no_of_followup",
        heading: "Number of Follow-ups",
    },

    {
        key: "no_of_wons",
        heading: "Number of Wons",
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


const MarketersList = () => {
    const [tableData, setTableData] = useState([]);
    const [addMarketerModal, setAddMarketerModal] = useState(false);
    const [downloadMarketerModal, setDownloadMarketerModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [viewModalData, setViewModalData] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [editModalData, setEditModalData] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteModalData, setDeleteModalData] = useState(null);
    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {


            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in local storage');
                return;
            }

            try {
                const response = await fetch('http://127.0.0.1:8000/property/marketers/', {
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


    const openViewModal = (marketerId) => {
        const selectedMarketer = tableData.find(item => item.id === marketerId);
        setViewModalData(selectedMarketer);
        setViewModal(true);
    };

    const closeViewModal = () => {
        setViewModal(false);
        window.location.reload();
    };

    // const handleViewClick = (marketerId) => {
    //     // Find the selected marketer in the tableData
    //     const selectedMarketer = tableData.find((item) => item.id === marketerId);

    //     // Open the ViewMarketerDetails modal and pass the selected marketer's data
    //     setViewModalData(selectedMarketer);
    //     setViewModal(true);

    //     // Navigate to the view page using window.location.href (optional)
    //     window.location.href = `view-marketer/${marketerId}`;
    // };

    const handleViewClick = (marketerId) => {
        // Find the selected marketer in the tableData
        const selectedMarketer = tableData.find((item) => item.id === marketerId);

        // Navigate to the "View Marketer" page with the selected marketer's data
        router.push(`/admin/view-marketer/${marketerId}`);
    };


    const openEditModal = (marketerId) => {
        const selectedMarketer = tableData.find(item => item.id === marketerId);
        setEditModalData(selectedMarketer);
        setEditModal(true);
    };


    const closeEditModal = () => {
        setEditModal(false);
        window.location.reload();
    };

    const openDeleteModal = (marketerId) => {
        const selectedMarketer = tableData.find(item => item.id === marketerId);
        setDeleteModalData(selectedMarketer);
        setDeleteModal(true);
    };


    const closeDeleteModal = () => {
        setDeleteModal(false);
        // Reset the deleteModalData state when the modal is closed
        setDeleteModalData(null);
        // Refresh the page after closing the modal
        window.location.reload();
    };

    const closeAddMarketerModal = () => {
        setAddMarketerModal(false);
        window.location.reload();
    };

    const openAddMarketerModal = () => {
        setAddMarketerModal(true);
    };

    const closeDownloadMarketerModal = () => {
        setDownloadMarketerModal(false);
        window.location.reload();
    };

    const openDownloadMarketerModal = () => {
        setDownloadMarketerModal(true);
    };

    const [modal, setModal] = useState(false);
    const handleClose = () => {
        //alert('closing');
        setModal(false);
    };

    const deleteMarketer = async (marketerId) => {
        const token = localStorage.getItem('token');

        if (!token) {
            console.error('Token not found in local storage');
            return;
        }

        try {
            const response = await fetch(`http://127.0.0.1:8000/delete-marketers/${marketerId}/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Token ${token}`,
                },
            });

            if (response.ok) {
                console.log('Marketer deleted successfully!');
                // Handle success, you may want to fetch the updated data and update the table
                fetchData();
            } else {
                console.error('Failed to delete Marketer');
                // Handle error, show an error message
                alert('Failed to delete Marketer!');
            }
        } catch (error) {
            console.error('Network error:', error);
            // Handle network error
        }
    };


    return (
        <>
            <Table
                headingRightItem1={() => (
                    <ActionButton
                        onClick={openAddMarketerModal}
                        label="Add Marketer"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                headingRightItem2={() => (
                    <ActionButton
                        onClick={openDownloadMarketerModal}
                        label="Download All"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                heading={table_column_heading}
                data={tableData.map((item) => ({
                    id: item.id,
                    employee_id: item.username,
                    employee_name: `${item.first_name} ${item.last_name}`,
                    employee_contact: item.contact,
                    employee_email: item.email,
                    no_of_followup: item.description,
                    no_of_wons: item.status,
                    "view-btn": {
                        component: () => (
                            <ActionButton
                                label="View"
                                Icon={FaEye}
                                inverse={true}
                                onClick={() => handleViewClick(item.id)} // Pass item.id to the handleViewClick function
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
                }))}

            />
            <Modal
                isOpen={addMarketerModal}
                heading={"Add Marketer"}
                onClose={closeAddMarketerModal}
            >
                <AddMarketerForm />
                {/* Add your form or components for adding property */}
                {/* For example: */}
                {/* <AddMarketerForm onSubmit={handleAddProperty} /> */}
            </Modal>

            <Modal
                isOpen={downloadMarketerModal}
                heading={"Download All Business Details"}
                onClose={closeDownloadMarketerModal}
            >
                {/* Add your components for downloading property details */}
                {/* For example: */}
                {/* <DownloadPropertyDetailsForm onSubmit={handleDownloadProperty} /> */}
            </Modal>

            <Modal
                isOpen={editModal}
                heading={"Edit Marketer"}
                onClose={closeEditModal}
            >
                {/* Add your form or components for editing property details */}
                {/* For example: */}
                {editModalData && <EditMarketerForm marketerData={editModalData} />}
            </Modal>

            <Modal
                isOpen={deleteModal}
                heading={"Delete Marketer"}
                onClose={closeDeleteModal}
            >
                {/* Add your components for deleting property details */}
                {/* For example: */}
                <div>
                    <p style={{ color: 'black', marginBottom: '30px' }}>Are you sure you want to delete this property?</p>
                    <ActionButton
                        label="Delete"
                        Icon={FaTrash}
                        inverse={true}
                        onClick={() => {
                            // Handle delete action here
                            deleteMarketer(deleteModalData.id);
                            closeDeleteModal();
                        }}
                        style={{ color: 'red', borderColor: 'red' }}
                    />
                </div>
            </Modal>

        </>
    );
};

export default MarketersList;
