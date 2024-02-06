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
import Table from "../DataTables/Table";

const table_column_heading = [
    {
        key: "serial_no",
        heading: "S/N",
    },
    {
        key: "marketer",
        heading: "Marketer",
        // icon: FaLongArrowAltDown,
    },

    {
        key: "prospect",
        heading: "Prospect",
    },
    {
        key: "property",
        heading: "Property",
    },

    {
        key: "prospect_status",
        heading: "Prospect Status",
    },
    {
        key: "followup_means",
        heading: "FollowUp Means",
    },
    {
        key: "description",
        heading: "Description",
    },
    {
        key: "view-btn",
        heading: "",
    },

    
];

const table_data = [
    {
        id: 1,
        serial_no: {
            value: "1",
        },
        marketer: {
            value: "John Noah",
        },
        prospect: {
            value: "Hassan Qudril",
        },
        property: {
            value: "4 acres of land",
        },
        prospect_status: {
            value: "Followup neede",
        },
        followup_means: {
            value: "Email",
        },
        description: {
            value: "",
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
        
    },
]
const ReportList = () => {
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

            <Table
                
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

export default ReportList;
