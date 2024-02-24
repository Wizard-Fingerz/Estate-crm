import { useState, useEffect } from "react";
import ProspectsList from "@/components/Lists/ProspectsList";
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import DataCard from "@/components/sample_components/DataCard";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"

const AdminProspects = () => {
    const [prospectCount, setProspectCount] = useState(0);
    const [prospectClosedWonCount, setProspectClosedWonCount] = useState(0);
    const [prospectClosedLostCount, setProspectClosedLostCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {

            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in local storage');
                return;
            }
            
            try {
                const response = await fetch('${API_BASE_URL}/property/prospect/count/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                });
                const data = await response.json();
                setProspectCount(data.count);
                setProspectClosedWonCount(data.closed_won);
                setProspectClosedLostCount(data.closed_lost);
            } catch (error) {
                console.error("Error fetching prospect count:", error);
            }
        };

        fetchData();
    }, []);
   
    console.log('Number of Prospects',prospectCount);

    return (
        <AdminBaseLayout>
            <DashboardNav name='Prospects' />
            <div style={{ display: "flex", justifyContent: "space-between", width: '60vw' }}>
                <DataCard label="All Prospects" value={prospectCount} />
                <DataCard label="Closed Won" value={prospectClosedWonCount} />
                <DataCard label="Closed Lost" value={prospectClosedLostCount} />
            </div>


            <ProspectsList />

        </AdminBaseLayout>
    );
};


export default AdminProspects;