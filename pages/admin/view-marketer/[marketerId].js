import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";


const ViewMarketerDetails = ({ closeModal, marketerData }) => {
    return (
      <AdminBaseLayout>
        <DashboardNav name={`Marketer Profile - ID: ${marketerData?.id}`} />
        <div>
          <p>Employee ID: {marketerData?.username}</p>
          <p>Employee Name: {`${marketerData?.first_name} ${marketerData?.last_name}`}</p>
          <p>Employee Contact: {marketerData?.contact}</p>
          <p>Employee Email: {marketerData?.email}</p>
          <p>Number of Follow-ups: {marketerData?.no_of_followup}</p>
          <p>Number of Wons: {marketerData?.no_of_wons}</p>
          {/* Add other details as needed */}
        </div>
        <button onClick={closeModal}>Close</button>
      </AdminBaseLayout>
    );
  };
  
export default ViewMarketerDetails;