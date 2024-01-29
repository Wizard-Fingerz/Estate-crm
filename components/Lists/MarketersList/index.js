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
import AddMarketerForm from "../../Form/AddMarketerForm";
import EditMarketerForm from "../../Form/EditMarketerForm";
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

    const closeAddMarketerModal = () => {
        setAddMarketerModal(false);
    };

    const openAddMarketerModal = () => {
        setAddMarketerModal(true);
    };

    const closeDownloadMarketerModal = () => {
        setDownloadMarketerModal(false);
    };

    const openDownloadMarketerModal = () => {
        setDownloadMarketerModal(true);
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
                    employee_id: item.id,
                    employee_name: item.name,
                    employee_contact: item.address,
                    employee_email: item.address,
                    no_of_followup: item.description,
                    no_of_wons: item.status,
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
                isOpen={viewModal}
                heading={"View Marketer"}
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
                heading={"Edit Marketer"}
                onClose={closeEditModal}
            >
                {/* Add your form or components for editing property details */}
                {/* For example: */}
                <EditMarketerForm />
            </Modal>

            <Modal
                isOpen={deleteModal}
                heading={"Delete Marketer"}
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

export default MarketersList;
