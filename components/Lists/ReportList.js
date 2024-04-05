import ActionButton from "../sample_components/ui-components/ActionButton";
import {
    FaCloudDownloadAlt,
    FaRegFilePdf,
    FaLongArrowAltDown,
    FaEye,
    FaTrash,
    FaEdit,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Modal from "../sample_components/ui-components/Modal";
import Table from "../DataTables/Table";
import { API_BASE_URL } from '@/pages/constants';

const table_column_heading = [
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

const ReportList = () => {
    const [modal, setModal] = useState(false);
    const [tableData, setTableData] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in local storage');
                return;
            }

            try {
                const response = await fetch(`${API_BASE_URL}/property/follow-ups/`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                });
                const data = await response.json();
                setTableData(data);
                // Inside ProspectsList component
                console.log('Report Data in ProspectsList:', tableData);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


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
                
                headingRightItem3={() => (
                    <ActionButton
                        onClick={openModal}
                        label="Download All"
                        // Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
                    />

                )}
                heading={table_column_heading}
                data={Array.isArray(tableData) ? tableData.map((item) => ({
                    
                    marketer: item.marketer,
                    prospect: item.prospect,
                    prospect_status: item.prospect_status,
                    followup_means: item.followup_means,
                    description: item.description,

                    
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
                    

                })) : []}
            />
            <Modal
                isOpen={modal}
                heading={"Download all Report details"}
                onClose={handleClose}
                positiveText={'Download'}
                negativeText={'Cancel'}
            />
        </>
    );
};

export default ReportList;
