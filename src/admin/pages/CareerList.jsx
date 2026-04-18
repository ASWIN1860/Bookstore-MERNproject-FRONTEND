import React, { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import Footer from "../../components/Footer";
import { FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoCameraSharp } from "react-icons/io5";

import { adminAddJobPostApi, adminListJobPostAPi } from "../../service/allApis";
import { toast } from "react-toastify";

function CareerList() {
  const [jobStatus, setJobStatus] = useState(true);
  const [applicationStatus, setApplicationStatus] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);

  const [jobList, setJobList] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    getJobPosts();
  }, []);

  const getJobPosts = async () => {
    const response = await adminListJobPostAPi(searchKey);
    if (response.status === 200) {
      console.log(response.data);
      setJobList(response.data);
    } else {
      console.log(response);
    }
  };

  const [jobData, setJobData] = useState({
    title: "",
    location: "",
    jobtype: "",
    salary: "",
    experience: "",
    qualification: "",
    description: "",
  });

  const handleReset = () => {
    setJobData({
      title: "",
      location: "",
      jobtype: "",
      salary: "",
      experience: "",
      qualification: "",
      description: "",
    });
  };

  const handleSubmit = async () => {
    console.log(jobData);
    const {
      title,
      location,
      jobtype,
      salary,
      experience,
      qualification,
      description,
    } = jobData;
    if (
      !title ||
      !location ||
      !jobtype ||
      !salary ||
      !experience ||
      !qualification ||
      !description
    ) {
      toast.warning("Enter Valid Inputs");
    } else {
      const response = await adminAddJobPostApi(jobData);
      if (response.status === 200) {
        toast.success("Job Post Added!!");
        handleReset();
        setModalStatus(false);
      } else {
        console.log(response);
        toast.error("Something Went Wrong!!");
        if (response?.data) {
          toast.info(response?.data);
        }
      }
    }
  };
  return (
    <>
      <AdminHeader />
      <div className="min-h-[60vh] grid grid-cols-4">
        <div className="col-span-4 md:col-span-1">
          <AdminSidebar />
        </div>
        <div className=" col-span-4 md:col-span-3">
          <h1 className="text-center text-2xl my-10">Careers</h1>
          {/* tabs */}
          <div className="flex justify-center items-center my-5">
            <div
              onClick={() => {
                setJobStatus(true);
                setApplicationStatus(false);
              }}
              className={
                jobStatus
                  ? "p-3 border-l border-r border-t rounded-t-sm  border-gray-600  text-blue-500"
                  : "p-3 border-b border-gray-600 cursor-pointer"
              }
            >
              Job Post
            </div>
            <div
              onClick={() => {
                setJobStatus(false);
                setApplicationStatus(true);
              }}
              className={
                applicationStatus
                  ? "p-3 border-l border-r border-t rounded-t-sm  border-gray-600  text-blue-500"
                  : "p-3 border-b border-gray-600 cursor-pointer"
              }
            >
              View Applicants
            </div>
          </div>

          {jobStatus && (
            <div className="px-10 flex justify-between">
              <div>
                <input
                  type="text"
                  className="py-2 border bg-white "
                  placeholder="Search By Title"
                />
                <button className="bg-blue-900 text-white p-2 border border-blue-900 hover:bg-white hover:text-blue-700">
                  Search
                </button>
              </div>
              <button
                className="bg-green-800 text-white p-2 border border-green-800 rounded-sm hover:bg-white hover:text-green-700"
                onClick={() => setModalStatus(true)}
              >
                Add Job +{" "}
              </button>
            </div>
          )}

          {jobStatus && (
            <div className="my-5 px-10">
              {jobList.length > 0 ? (
                <>
                  {jobList.map((jobs) => (
                    <div className=" border-2 border-gray-500 shadow-lg py-3 px-2 my-2 md:grid grid-cols-7">
                      <div className="col-span-6">
                        <h1 className="font-bold mb-2 text-2xl">{jobs.title}</h1>
                        <hr />
                        <p className="mt-5 font-bold">Location:{jobs.location}</p>
                        <p className="mt-5 font-bold">Job Type:{jobs.jobtype}</p>
                        <p className="mt-5 font-bold">Salary:{jobs.salary}</p>
                        <p className="mt-5 font-bold">Qualification:{jobs.qualification}</p>
                        <p className="mt-5 font-bold">Experience:{jobs.experience}</p>
                        <p className="mt-5 font-bold">Description:{jobs.description}</p>
                      </div>
                      <div className="px-4 col-span-1 flex justify-end md:flex-none  md:justify-start ">
                        <button className="bg-red-800 text-light p-1 float-end md:p-4 text-white  md:float-start border  border-red-800 hover:bg-white hover:text-red-600  rounded-sm  flex  md:items-center gap-1 h-[50px] ">
                          Delete <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <h2 className="">No Jobs Available!!!</h2>
              )}
            </div>
          )}

          {applicationStatus && (
            <div className="my-5 px-10">
              <table className="w-full ">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-2 border border-gray-500">Sl</th>
                    <th className="p-2 border border-gray-500">Job Title</th>
                    <th className="p-2 border border-gray-500">Name</th>
                    <th className="p-2 border border-gray-500">
                      Qualification
                    </th>
                    <th className="p-2 border border-gray-500">Email</th>
                    <th className="p-2 border border-gray-500">Phone</th>
                    <th className="p-2 border border-gray-500">Cover Letter</th>
                    <th className="p-2 border border-gray-500">Resume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-gray-500">1</td>
                    <td className="p-2 border border-gray-500">
                      Jr Software Engineer
                    </td>
                    <td className="p-2 border border-gray-500">Anu John</td>
                    <td className="p-2 border border-gray-500">BSC CS</td>
                    <td className="p-2 border border-gray-500">
                      anujohn@gmail.com
                    </td>
                    <td className="p-2 border border-gray-500">9876543218</td>
                    <td className="p-2 border border-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique ex, deserunt hic nulla corporis sint iusto se
                    </td>
                    <td className="p-2 border border-gray-500">
                      <a href="" className="underline text-blue-700">
                        Resume
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {modalStatus && (
            <div
              className="relative z-10"
              onClick={() => {
                setModalStatus(false);
              }}
            >
              <div className="bg-gray-500/75 fixed inset-0">
                <div className="flex justify-center items-center min-h-screen">
                  <div
                    style={{ height: "520px", width: "500px" }}
                    className="bg-white rounded-2xl "
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="bg-black text-white flex justify-between items-center p-3 rounded-t-2xl">
                      <h1 className="text-2xl font-bold">Application Form</h1>
                      <button onClick={() => setModalStatus(false)}>
                        <IoClose />
                      </button>
                    </div>
                    <div className="p-2">
                      <input
                        type="text"
                        placeholder="Job Title"
                        value={jobData.title}
                        onChange={(e) => {
                          setJobData({ ...jobData, title: e.target.value });
                        }}
                        className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        value={jobData.location}
                        onChange={(e) => {
                          setJobData({ ...jobData, location: e.target.value });
                        }}
                        className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"
                      />
                      <input
                        type="text"
                        placeholder="Job Type"
                        value={jobData.jobtype}
                        onChange={(e) => {
                          setJobData({ ...jobData, jobtype: e.target.value });
                        }}
                        className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"
                      />
                      <input
                        type="text"
                        placeholder="Salary"
                        value={jobData.salary}
                        onChange={(e) => {
                          setJobData({ ...jobData, salary: e.target.value });
                        }}
                        className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"
                      />
                      <input
                        type="text"
                        placeholder="Qualification"
                        value={jobData.qualification}
                        onChange={(e) => {
                          setJobData({
                            ...jobData,
                            qualification: e.target.value,
                          });
                        }}
                        className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"
                      />
                      <input
                        type="text"
                        placeholder="Experience"
                        value={jobData.experience}
                        onChange={(e) => {
                          setJobData({
                            ...jobData,
                            experience: e.target.value,
                          });
                        }}
                        className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full mb-2"
                      />
                      <textarea
                        name=""
                        placeholder="Description"
                        value={jobData.description}
                        onChange={(e) => {
                          setJobData({
                            ...jobData,
                            description: e.target.value,
                          });
                        }}
                        className="p-2 border bg-white placeholder-gray-600 rounded-sm w-full "
                        id=""
                      ></textarea>
                    </div>
                    <div className="bg-gray p-3 flex justify-end gap-2 rounded-b-2xl">
                      <button
                        className="p-2 border rounded-sm bg-red-500 text-white hover:bg-white hover:border-red-600 hover:text-red-500"
                        onClick={handleReset}
                      >
                        Reset
                      </button>
                      <button
                        className="p-2 border rounded-sm bg-green-700 text-white hover:bg-white hover:border-green-600 hover:text-green-500"
                        onClick={handleSubmit}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CareerList;
