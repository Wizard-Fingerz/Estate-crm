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
import AddMarketerForm from "../../Form/AddMarketerForm";
import MarketerTable from "../../DataTables/MarketerTable";

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
        key: "employee_contract",
        heading: "Employee Contract",
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
        key: "rating",
        heading: "Ratings",
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
        employee_id: {
            value: "1",
        },
        employee_name: {
            value: "Hassan Uril",
        },
        employee_contract: {
            value: "+23470773473843",
        },
        no_of_followup: {
            value: "20",
        },
        no_of_wons: {
            value: "23",
        },
        rating: {
            value: "5.0",
        },
       
    },
]
const MarketersList = () => {
    const [addMarketerModal, setAddMarketerModal] = useState(false);
    const [downloadMarketerModal, setDownloadMarketerModal] = useState(false);
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

            <MarketerTable
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
                data={table_data}
            />
            <Modal
                isOpen={addMarketerModal}
                heading={"Add Marketer"}
                onClose={closeAddMarketerModal}
                positiveText={'Add'}
                negativeText={'Cancel'}
            >
                <AddMarketerForm/>
                {/* Add your form or components for adding property */}
                {/* For example: */}
                {/* <AddMarketerForm onSubmit={handleAddProperty} /> */}
            </Modal>

            <Modal
                isOpen={downloadMarketerModal}
                heading={"Download All Business Details"}
                onClose={closeDownloadMarketerModal}
                positiveText={'Download'}
                negativeText={'Cancel'}
            >
                {/* Add your components for downloading property details */}
                {/* For example: */}
                {/* <DownloadPropertyDetailsForm onSubmit={handleDownloadProperty} /> */}
            </Modal>
            
            <Modal
                isOpen={viewModal}
                heading={"View Marketer"}
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
                heading={"Edit Marketer"}
                onClose={closeEditModal}
                positiveText={'Save'}
                negativeText={'Cancel'}
            >
                {/* Add your form or components for editing property details */}
                {/* For example: */}
                <EditMarketerForm />
            </Modal>

            <Modal
                isOpen={deleteModal}
                heading={"Delete Marketer"}
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

export default MarketersList;
