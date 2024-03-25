import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import Image from "next/image";
import { API_BASE_URL } from "../constants";

const AdminProfile = () => {
    return (
        <AdminBaseLayout>
            <DashboardNav name='Profile' />
            <div className={styles.container}>
                <Image className={styles.cover_picture} src={`${API_BASE_URL}/${marketerData?.cover_picture}`} alt="Cover Image" width={1000} height={200} />

                <div className={styles.profile_picture}>
                    <Image className={styles.cover_picture} src={`${API_BASE_URL}/${marketerData?.profile_picture}`} alt="Profile Image" width={20} height={20} />
                </div>
                <p>Employee Name: {`${marketerData?.first_name} ${marketerData?.last_name}`}</p>
                <p>Employee ID: {marketerData?.username}</p>

            </div>
            <ProspectsByMarketer />

        </AdminBaseLayout>
    );
};


export default AdminProfile;