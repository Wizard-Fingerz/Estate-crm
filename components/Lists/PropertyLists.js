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
import PropertyTable from "../DataTables/PropertyTable";

const table_column_heading = [
    {
        key: "reference_id",
        heading: "Reference ID",
    },
    {
        key: "property_name",
        heading: "Property Name",
        // icon: FaLongArrowAltDown,
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
        key: "property_owner",
        heading: "Property Owner",
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

const table_data = [
    {
        id: 1,
        reference_id: {
            value: "1",
        },
        property_name: {
            value: "1 acre of land",
        },
        property_address: {
            value: "Lekki Lagos",
        },
        property_description: {
            value: "1 acre of land in Lekki",
        },
        property_owner: {
            value: "Adewale Kazeem",
        },
        property_status: {
            value: "",
        },
        property_value: {
            value: "",
        },
        property_type: {
            value: "Land",
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
const PropertyList = () => {
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

            <PropertyTable
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

export default PropertyList;
