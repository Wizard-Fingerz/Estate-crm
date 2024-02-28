import DashboardNav from "@/components/sample_components/ui-components/DashboardNav"
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import Image from "next/image";
import { API_BASE_URL } from "../constants";

const AdminProfile = () => {
    return (
        <AdminBaseLayout>
            <DashboardNav name='Profile' />
            <div>
                <Image src={''} alt="Cover Image" width={1000} height={200} />

                <div >
                    <Image  src={''} alt="Profile Image" width={20} height={20} />
                </div>
                <p>Employee Name: {''}</p>
                <p>Employee ID: {''}</p>

            </div>

        </AdminBaseLayout>
    );
};


export default AdminProfile;