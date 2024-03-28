import { useState, useEffect } from 'react';
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import ProspectsByMarketer from "@/components/Lists/ProspectsByMarketer";
import Image from "next/image";
import { API_BASE_URL } from "../constants";

const AdminProfile = () => {
  const [marketerData, setMarketerData] = useState('');
  return (
        <AdminBaseLayout>
            <DashboardNav name='Profile' />
            <div>
                {/* <Image src={`${API_BASE_URL}/${marketerData?.cover_picture}`} alt="Cover Image" width={1000} height={200} /> */}

                <div>
                    {/* <Image src={`${API_BASE_URL}/${marketerData?.profile_picture}`} alt="Profile Image" width={20} height={20} /> */}
                </div>
                <p>Employee Name: {`${marketerData?.first_name} ${marketerData?.last_name}`}</p>
                <p>Employee ID: {marketerData?.username}</p>

            </div>
            <ProspectsByMarketer />

        </AdminBaseLayout>
    );
};


export default AdminProfile;