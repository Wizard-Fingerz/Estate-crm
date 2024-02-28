import { useState, useEffect } from "react";
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
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
   
    console.log('Number of customers',customerCount);

    return (
        <AdminBaseLayout>
            <DashboardNav name='Customers' />
                <DataCard label="All Customers" value={customerCount} />
            

            <CustomersList />



        </AdminBaseLayout>
    );
};


export default AdminCustomers;