import MarketersList from "@/components/Lists/MarketersList";
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import DataCard from "@/components/sample_components/DataCard";

const AdminMarketers = () => {
    return (
        <AdminBaseLayout>
            <DashboardNav name='Marketers' />
            <MarketersList />


        </AdminBaseLayout>
    );
};


export default AdminMarketers;