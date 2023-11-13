import ProspectsList from "@/components/Lists/ProspectsList";
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import DataCard from "@/components/sample_components/DataCard";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"

const AdminProspects = () => {
    return (
        <AdminBaseLayout>
            <DashboardNav name='Prospects' />

            <div style={{ display: "flex", justifyContent: "space-between", width: '60vw' }}>
                <DataCard label="All Prospects" value="20000000" />
                <DataCard label="Closed Won" value="20000000" />
                <DataCard label="Closed Lost" value="20000000" />
            </div>


            <ProspectsList />

        </AdminBaseLayout>
    );
};


export default AdminProspects;