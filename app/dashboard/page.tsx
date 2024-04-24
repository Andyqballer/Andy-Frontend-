'use client';
import Image from "next/image";
import { tableData } from "./mockdata";

export default function Page() {
    return (
      <div className="w-full h-full flex-1 px-[3rem] py-[1.3rem] bg-white">
        <h2 className="text-[1.3rem] pb-[1rem] font-medium">Role administration</h2>
        <div className="w-full h-[90%] p-4 bg-gray-100 rounded-lg">
          <div className="flex justify-start items-center gap-[0.5rem]">
            <input type="checkbox" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            </svg>
          </div>

            <div className="relative py-[2rem] overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr >
                      <th className="p-2 font-medium text-[1.1rem]">Username</th>
                      <th className="p-2 font-medium text-[1.1rem]">Email</th>
                      <th className="p-2 font-medium text-[1.1rem]">Login</th>
                      <th className="p-2 font-medium text-[1.1rem]">Role</th>
                      <th className="p-2 font-medium text-[1.1rem]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tableData.map((data, index) => (
                        <tr key={index} className="hover:bg-indigo-300">
                          <td className="p-2 flex justify-start items-center gap-[1rem]">
                            <div>
                              <input type="checkbox" />
                            </div>
                              <Image src="/img/profile.jpeg" alt="Profile" width={50} height={50} className="rounded-full"/>
                            <div className="font-medium ">{data.name}</div>
                          </td>
                          <td className="p-2 ">{data.email}</td>
                          <td className="p-2 ">{data.login}</td>
                          <td className="p-2 ">{data.role}</td>
                          <td className="p-2 flex justify-start items-center gap-[1rem]">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                              </svg>
                            </div>
                            <div className="text-[0.9rem]">
                              View user
                            </div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }