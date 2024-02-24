import { useState, useEffect } from "react";
import PropertyList from "@/components/Lists/PropertyLists";
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import DataCard from "@/components/sample_components/DataCard";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav";

const AdminDashboard = () => {
    const [propertyCount, setPropertyCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {

            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in local storage');
                return;
            }
            
            try {
                const response = await fetch('${API_BASE_URL}/property/property/count/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                });
                const data = await response.json();
                setPropertyCount(data.count);
            } catch (error) {
                console.error("Error fetching property count:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <AdminBaseLayout>
            <DashboardNav name='Property' />
            <DataCard label="All Properties" value={propertyCount} />

            <PropertyList />
        </AdminBaseLayout>
    );
};

export default AdminDashboard;
