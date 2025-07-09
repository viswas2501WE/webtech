'use client';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import ApplicantsCard from '@/components/Admin/Components/ApplicantsCard';
import Modal from '@/components/Admin/Components/Modal';
import { MoreHorizontalIcon } from 'lucide-react';
import 'flowbite';
import PageCover from '@/components/PageCover';



const Applicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);

      const BASE = process.env.NEXT_PUBLIC_IMG_url;


  const dropdownRefs = useRef({});

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/applicant/applicants`);
        setApplicants(res.data);
      } catch (error) {
        console.error('Failed to fetch applicants:', error);
        toast.error('Failed to load applicants.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchApplicants();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdownId &&
        dropdownRefs.current[openDropdownId] &&
        !dropdownRefs.current[openDropdownId].contains(event.target)
      ) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdownId]);

  const handleViewDetails = (applicant) => {
    setSelectedApplicant(applicant);
    setShowDetailsModal(true);
  };

  const handleAccept = (applicantId) => {
    console.log('Accept Applicant:', applicantId); // You can keep or remove this console.log if not needed for production
    setOpenDropdownId(null);
    toast.success('Applicant accepted!');
  };

  const handleReject = (applicantId) => {
    console.log('Reject Applicant:', applicantId); // You can keep or remove this console.log if not needed for production
    setOpenDropdownId(null);
    toast.error('Applicant rejected!');
  };

  const handleDownloadCV = async (applicant) => {
    if (!applicant.cvUrl) {
      toast.error('CV not available for this applicant.');
      return;
    }

    setDownloadingId(applicant._id);

    try {
      // Determine the final URL for download
      const finalDownloadUrl = applicant.cvUrl.startsWith('http')
        ? applicant.cvUrl
        : `${process.env.NEXT_PUBLIC_API_URL}${applicant.cvUrl}`;

      const response = await axios.get(finalDownloadUrl, {
        responseType: 'blob', // Important for downloading files
      });

      if (response.data.size === 0) {
        toast.error('CV file is empty or missing.');
        return;
      }

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      const extension = applicant.cvUrl.split('.').pop() || 'pdf'; // Get file extension
      link.href = url;
      link.setAttribute('download', `${applicant.name} - ${applicant._id?.slice(-5).toUpperCase()}.${extension}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); // Clean up the object URL

      toast.success('CV downloaded successfully!');
    } catch (error) {
      console.error('Failed to download CV:', error); // Keep this for production error tracking
      toast.error('Failed to download CV.');
    } finally {
      setDownloadingId(null);
      setOpenDropdownId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen px-4 pt-20 sm:px-6 sm:pt-35 font-sans flex items-center justify-center">
        <p className="text-2xl font-semibold text-gray-600">Loading applicants...</p>
      </div>
    );
  }

  return (
    <div className='relative'>
         <PageCover bgImage={`${BASE}/Career-banner.png`} />

    <div className="min-h-screen px-4 pt-10 sm:px-6 sm:pt-10 font-sans">
      
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Applicant List</h1>

      {applicants.length === 0 ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] bg-white rounded-lg shadow-xl p-8">
          <p className="text-2xl font-semibold text-gray-500">There are no applicants now.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-xl border border-gray-200">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-[#F85C70] text-white">
              <tr>
                <th className="px-6 py-[2%] text-left text-xs font-medium uppercase tracking-wider rounded-tl-lg">Name</th>
                <th className="px-6 py-[2%] text-left border-l border-gray-300 text-xs font-medium uppercase tracking-wider">Email</th>
                <th className="px-6 py-[2%] text-left border-l border-gray-300 text-xs font-medium uppercase tracking-wider">Designation</th>
                <th className="px-6 py-[2%] text-left border-l border-gray-300 text-xs font-medium uppercase tracking-wider">Experience</th>
                <th className="px-6 py-[2%] text-left border-l border-gray-300 text-xs font-medium uppercase tracking-wider">Current CTC</th>
                <th className="px-6 py-[2%] text-left border-l border-gray-300 text-xs font-medium uppercase tracking-wider">Expected CTC</th>
                <th className="px-6 py-[2%] text-center border-l border-gray-300 text-xs font-medium uppercase tracking-wider rounded-tr-lg">Manage</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applicants.map((applicant) => (
                <tr
                  key={applicant._id}
                  className="hover:bg-gray-50 transition duration-150 ease-in-out cursor-pointer"
                >
                  <td
                    className="px-6 py-4 text-sm font-medium text-gray-900"
                    onClick={() => handleViewDetails(applicant)}
                  >
                    {applicant.name}
                  </td>
                  <td
                    className="px-6 py-4 border-l border-gray-200 text-sm text-gray-700"
                    onClick={() => handleViewDetails(applicant)}
                  >
                    {applicant.email}
                  </td>
                  <td
                    className="px-6 py-4 border-l border-gray-200 text-sm text-gray-700"
                    onClick={() => handleViewDetails(applicant)}
                  >
                    {applicant.designation}
                  </td>
                  <td
                    className="px-6 py-4 border-l border-gray-200 text-sm text-gray-700"
                    onClick={() => handleViewDetails(applicant)}
                  >
                    {applicant.totalExperience}
                  </td>
                  <td
                    className="px-6 py-4 border-l border-gray-200 text-sm text-gray-700"
                    onClick={() => handleViewDetails(applicant)}
                  >
                    ${applicant.currentCtc}
                  </td>
                  <td
                    className="px-6 py-4 border-l border-gray-200 text-sm text-gray-700"
                    onClick={() => handleViewDetails(applicant)}
                  >
                    ${applicant.expectedCtc}
                  </td>
                  <td className="px-6 py-4 text-center border-l border-gray-200 text-sm font-medium relative">
                    <div ref={(el) => (dropdownRefs.current[applicant._id] = el)}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdownId(openDropdownId === applicant._id ? null : applicant._id);
                        }}
                        className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 p-2 rounded-full hover:bg-gray-100"
                        aria-label={`Manage actions for ${applicant.name}`}
                      >
                        <MoreHorizontalIcon className="h-5 w-5" />
                      </button>

                      {openDropdownId === applicant._id && (
                        <div className="absolute right-[65%] bottom-[15%] mt-2 w-48 rounded-md shadow-lg bg-white ring-1  ring-black ring-opacity-5 z-[60]">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAccept(applicant._id);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Accept
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReject(applicant._id);
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Reject
                            </button>
                            {applicant.cvUrl ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDownloadCV(applicant);
                                }}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                disabled={downloadingId === applicant._id}
                              >
                                {downloadingId === applicant._id ? 'Downloading...' : 'Download CV'}
                              </button>
                            ) : (
                              <div className="px-4 py-2 text-sm text-gray-400">No CV</div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {showDetailsModal && selectedApplicant && (
        <Modal onClose={() => setShowDetailsModal(false)}>
          <ApplicantsCard
            data={selectedApplicant}
            onAccept={() => {
              handleAccept(selectedApplicant._id);
              setShowDetailsModal(false);
            }}
            onReject={() => {
              handleReject(selectedApplicant._id);
              setShowDetailsModal(false);
            }}
          />
        </Modal>
      )}
    </div>
        </div>

  );
};

export default Applicants;