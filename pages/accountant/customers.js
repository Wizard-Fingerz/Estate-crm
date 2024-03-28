import AccountantBaseLayout from "@/components/sample_components/AccountantBaseLayout";
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import DataCard from "@/components/sample_components/DataCard";
import CustomersList from "@/components/Lists/CustomersList";

const AccountantCustomers = () => {
    return (
        <AccountantBaseLayout>
            <DashboardNav name='Customers' />
            <div style={{ display: "flex", justifyContent: "space-between", width: '60vw' }}>
                <DataCard label="All Customers" value="20000000" />
                <DataCard label="Ongoing payment" value="20000000" />
                <DataCard label="Completed payment" value="20000000" />
            </div>

            <CustomersList />



        </AccountantBaseLayout>
    );
};


export default AccountantCustomers;