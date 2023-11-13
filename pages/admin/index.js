import PropertyList from "@/components/Lists/PropertyLists";
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import DataCard from "@/components/sample_components/DataCard";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"

const AdminDashboard = () => {
    return (
        <AdminBaseLayout>
            <DashboardNav name='Property' />
            <DataCard label="All Properties" value="20000000" />

            <PropertyList />


        </AdminBaseLayout>
    );
};


export default AdminDashboard;