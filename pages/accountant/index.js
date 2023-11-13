import AccountantBaseLayout from "@/components/sample_components/AccountantBaseLayout";
import PropertyList from "@/components/Lists/PropertyLists";
import DataCard from "@/components/sample_components/DataCard";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import ViewOnlyPropertyList from "@/components/Lists/ViewOnlyPropertyList";

const AccontantDashboard = () => {
    return (
        <AccountantBaseLayout>
            <DashboardNav name='Property' />
            <DataCard label="All Properties" value="20000000" />

            <ViewOnlyPropertyList />

        
        </AccountantBaseLayout>
    );
};


export default AccontantDashboard;