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
import ProspectTable from "../DataTables/ProspectTable";

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
        key: "whatsapp_number",
        heading: "WhatsApp Numberr",
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
        name: {
            value: "Tokyo Hassan",
        },
        address: {
            value: "Lagos, Nigeria",
        },
        email: {
            value: "tokyo@gmail.com",
        },
        phone_number: {
            value: "+234902343434",
        },
        
        whatsapp_number: {
            value: "+234902343434",
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
const ProspectsList = () => {
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

            <ProspectTable
                headingRightItem1={() => (
                    <ActionButton
                        onClick={openModal}
                        label="Add Property"
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

export default ProspectsList;
