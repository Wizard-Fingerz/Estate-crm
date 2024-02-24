import { useState, useEffect } from "react";
import MarketersList from "@/components/Lists/MarketersList";
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import DataCard from "@/components/sample_components/DataCard";

const AdminMarketers = () => {
    const [marketerCount, setMarketerCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {

            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in local storage');
                return;
            }
            
            try {
                const response = await fetch('${API_BASE_URL}/marketer/count/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                });
                const data = await response.json();
                setMarketerCount(data.count);
            } catch (error) {
                console.error("Error fetching property count:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <AdminBaseLayout>
            <DashboardNav name='Marketers' />
            <DataCard label="All Marketers" value={marketerCount} />
            <MarketersList />


        </AdminBaseLayout>
    );
};


export default AdminMarketers;