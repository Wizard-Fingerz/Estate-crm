import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import DashboardNav from "@/components/sample_components/ui-components/DashboardNav";
import AdminBaseLayout from "@/components/sample_components/AdminBaseLayout";
import ProspectsByMarketer from "@/components/Lists/ProspectsByMarketer";
import styles from './Marketer.module.css';
import { API_BASE_URL } from '@/pages/constants';


const ViewMarketerDetails = ({ closeModal }) => {
  const router = useRouter();
  const { marketerId } = router.query;
  const [marketerData, setMarketerData] = useState(null);

  useEffect(() => {
    if (marketerId) {
      const fetchMarketerDetails = async () => {


        const token = localStorage.getItem('token');

        if (!token) {
          console.error('Token not found in local storage');
          return;
        }

        try {
          const response = await fetch(`${API_BASE_URL}/get-marketer-details/${marketerId}/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`,
              // Add any additional headers, such as authentication tokens
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setMarketerData(data);
          } else {
            console.error('Failed to fetch marketer details');
          }
        } catch (error) {
          console.error('Error fetching marketer details:', error);
        }
      };

      fetchMarketerDetails();
    }
  }, [marketerId]);

  return (
    <AdminBaseLayout>
      <DashboardNav name={`${marketerData?.username} Profile`} />
      <div className={styles.container}>
        <Image className={styles.cover_picture} src={`${API_BASE_URL}/${marketerData?.cover_picture}`} alt="Cover Image"  width={1000} height={200}/>

        <div className={styles.profile_picture}>
          <Image className={styles.cover_picture} src={`${API_BASE_URL}/${marketerData?.profile_picture}`} alt="Profile Image" width = {20} height = {20} />
        </div>
        <p>Employee Name: {`${marketerData?.first_name} ${marketerData?.last_name}`}</p>
        <p>Employee ID: {marketerData?.username}</p>

      </div>
      <ProspectsByMarketer />
    </AdminBaseLayout>
  );
};

export default ViewMarketerDetails;
