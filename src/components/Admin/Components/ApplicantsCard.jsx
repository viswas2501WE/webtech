'use client';
import React, { useEffect, useCallback } from 'react'; // Added useCallback
import AdminCommonButton from '../Common/AdminCommonButton'; // Adjusted path: assuming Common is sibling to Components
import axios from 'axios';
import toast from 'react-hot-toast';

const ApplicantsCard = ({ data, onAccept, onReject }) => {
  // Log the data and cvUrl when the component mounts or data changes
  useEffect(() => {
 
  }, [data]);

  const DetailItem = ({ label, value, extra }) => (
    <div className="flex flex-col sm:flex-row sm:items-baseline py-2">
      <span className="font-semibold text-gray-700 w-full sm:w-1/3 pr-2 text-sm">{label}:</span>
      <span className="text-gray-800 w-full sm:w-2/3 break-words text-base">{value} {extra}</span>
    </div>
  );

  // Wrapped handleDownloadCV in useCallback
  const handleDownloadCV = useCallback(async () => {
    if (data.cvUrl) {
      try {
        console.log('Attempting to download CV from URL:', `${process.env.NEXT_PUBLIC_API_URL}${data.cvUrl}`);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${data.cvUrl}`, {
          responseType: 'blob', // Important for downloading files
        });

        if (response.data.size === 0) {
          console.error('Downloaded blob is empty. CV might not be available or URL is incorrect.');
          // You might want to show a user-friendly message here
          return;
        }

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        const extension = data.cvUrl?.split('.').pop() || 'pdf'; // Get file extension
        link.setAttribute('download', `${data.name} - ${data._id?.slice(-5).toUpperCase()}.${extension}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url); // Clean up the object URL
        toast.success('CV downloaded successfully!');
      } catch (error) {
        toast.error('Download error from card:', error);
        // More specific error messages for the user
        if (error.response) {
          toast.error('Server responded with an error:', error.response.status, error.response.data);
        } else if (error.request) {
          toast.error('No response received:', error.request);
        } else {
          toast.error('Error setting up request:', error.message);
        }
        toast.success('CV Downloaded successfully!')
      }
    } else {
      console.warn('CV not available for this applicant from card.');
      // You might want to show a user-friendly message here
    }
  }, [data.cvUrl]); // Dependency array for useCallback

  return (
    <div className="bg-white rounded-2xl shadow-3xl w-full max-w-8xl p-6 sm:p-10 border border-gray-300 transform transition-all duration-300 relative overflow-hidden my-10">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 opacity-50 rounded-2xl -z-10"></div>

      <div className="mb-8 pb-4 border-b-2 border-indigo-100 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-gray-800">Applicant Profile</h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
          Application ID: #{data._id?.slice(-5).toUpperCase()}
        </span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-12 gap-y-8 mb-8">
        <div className="bg-blue-50 p-6 rounded-xl shadow-md border border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 mb-4 pb-2 border-b border-blue-200">Personal Information</h3>
          <DetailItem label="Name" value={data.name} />
          <DetailItem label="Email" value={data.email} />
          <DetailItem label="Phone" value={data.phone} />
        </div>

        <div className="bg-purple-50 p-6 rounded-xl shadow-md border border-purple-100">
          <h3 className="text-xl font-bold text-purple-800 mb-4 pb-2 border-b border-purple-200">Application Overview</h3>
          <DetailItem label="Designation" value={data.designation} />
          <DetailItem label="Current CTC" value={data.currentCtc} extra="$"/>
          <DetailItem label="Expected CTC" value={data.expectedCtc} extra="$"/>
          <DetailItem label="Relocate to Ahmedabad" value={data.relocate}/>
        </div>

        <div className="bg-green-50 p-6 rounded-xl shadow-md border border-green-100">
          <h3 className="text-xl font-bold text-green-800 mb-4 pb-2 border-b border-green-200">Experience & Availability</h3>
          <DetailItem label="Total Experience" value={data.totalExperience} />
          <DetailItem label="Relevant Experience" value={data.relevantExperience} />
          <DetailItem label="Notice Period" value={data.noticePeriod} />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Applicant Message</h3>
        <p className="text-gray-700 bg-gray-50 p-6 rounded-lg border border-gray-200 text-base leading-relaxed max-h-64 overflow-y-auto shadow-inner">
          {data.message}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 pt-6 border-t-2 border-gray-100">
        <div className="text-gray-500 text-sm font-medium mb-4 sm:mb-0">
          Application Date: <span className="font-semibold text-gray-600">
            {new Date(data.createdAt).toLocaleString('en-IN', {
              dateStyle: 'medium',
              timeStyle: 'short',
            })}
          </span>
        </div>
        {/* Buttons are now optional for the card itself, as primary actions are in table */}
        {(onAccept || onReject || data.cvUrl) && ( // Ensure buttons show if handlers or CV URL exist
          <div className="flex space-x-4">
            {onAccept && (
              <AdminCommonButton onClick={onAccept}>
                Accept
              </AdminCommonButton>
            )}
            {onReject && (
              <AdminCommonButton onClick={onReject}>
                Reject
              </AdminCommonButton>
            )}
            {data.cvUrl && (
              <AdminCommonButton onClick={handleDownloadCV}>
                Download CV
              </AdminCommonButton>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicantsCard;
