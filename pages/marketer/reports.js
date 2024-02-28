import MarketerBaseLayout from "@/components/sample_components/MarketerBaseLayout";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import DataCard from "@/components/sample_components/DataCard";
import ReportList from "@/components/Lists/ReportList";

const AdminReports = () => {
    return (
        <MarketerBaseLayout>

            <DashboardNav name='Reports' />

            <ReportList/>

        </MarketerBaseLayout>

    
    );
};


export default AdminReports;