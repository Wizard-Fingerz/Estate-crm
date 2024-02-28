import { useState, useEffect } from "react";
import MarketerBaseLayout from "@/components/sample_components/MarketerBaseLayout";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import DataCard from "@/components/sample_components/DataCard";
import CustomersList from "@/components/Lists/CustomersList";
import { API_BASE_URL } from "../constants";

const AdminCustomers = () => {
    const [customerCount, setCustomerCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {

            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in local storage');
                return;
            }
            
            try {
                const response = await fetch(`${API_BASE_URL}/property/customer/count/`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,
                    },
                });
                const data = await response.json();
                setCustomerCount(data.count);
            } catch (error) {
                console.error("Error fetching customer count:", error);
            }
        };

        fetchData();
    }, []);
   
    return (
        <MarketerBaseLayout>
            <DashboardNav name='Customers' />
            <div style={{ display: "flex", justifyContent: "space-between", width: '60vw' }}>
                <DataCard label="All Customers" value={customerCount} />
            </div>
            <CustomersList />
        </MarketerBaseLayout>
    );
};


export default AdminCustomers;