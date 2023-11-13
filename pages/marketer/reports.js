import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import DataCard from "@/components/sample_components/DataCard";
import ReportList from "@/components/Lists/ReportList";

const AdminReports = () => {
    return (
        <AdminBaseLayout>

            <DashboardNav name='Reports' />

            <ReportList/>

        </AdminBaseLayout>

    
    );
};


export default AdminReports;