import ActionButton from "../sample_components/ui-components/ActionButton";

import {
    FaCloudDownloadAlt,
    FaRegFilePdf,
    FaLongArrowAltDown,
    FaEye,
    FaTrash,
    FaEdit,
} from "react-icons/fa";
import { useState } from "react";
import Modal from "../sample_components/ui-components/Modal";
import MarketerTable from "../DataTables/MarketerTable";

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
        "view-btn": {
            component: () => (
                <ActionButton
                    label="View"
                    Icon={FaEye}
                    inverse={true}
                    onClick={() => {
                        alert('Welcome to 2geda dashboard presentation');
                    }}
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
                    onClick={() => {
                        alert('Welcome to Estate CRM dashboard presentation');
                    }}
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
                    onClick={() => {
                        alert('Welcome to aio dashboard presentation');
                    }}
                    style={{ color: 'red', borderColor: 'red' }}
                />
            ),
        },
    },
]
const MarketersList = () => {
    const [modal, setModal] = useState(false);
    const handleClose = () => {
        //alert('closing');
        setModal(false);
    };

    const openModal = () => {
        setModal(true);
    };
    return (
        <>

            <MarketerTable
                headingRightItem1={() => (
                    <ActionButton
                        onClick={openModal}
                        label="Add Marketer"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                headingRightItem2={() => (
                    <ActionButton
                        onClick={openModal}
                        label="Download All"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                heading={table_column_heading}
                data={table_data}
            />
            <Modal
                isOpen={modal}
                heading={"Download all business details"}
                onClose={handleClose}
                positiveText={'Download'}
                negativeText={'Cancel'}
            />
        </>
    );
};

export default MarketersList;
