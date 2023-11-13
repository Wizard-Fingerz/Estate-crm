import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import DataCard from "@/components/sample_components/DataCard";
import CustomersList from "@/components/Lists/CustomersList";

const AdminCustomers = () => {
    return (
        <AdminBaseLayout>
            <DashboardNav name='Customers' />
            <div style={{ display: "flex", justifyContent: "space-between", width: '60vw' }}>
                <DataCard label="All Customers" value="20000000" />
                <DataCard label="Ongoing payment" value="20000000" />
                <DataCard label="Completed payment" value="20000000" />
            </div>
            <CustomersList />
        </AdminBaseLayout>
    );
};


export default AdminCustomers;