import Link from "next/link"

export default function UserDetails({params}: {
    params: {userId: string}
}) {
    return (
        <div className="w-full py-[3rem] bg-white">
            <div className="w-[60%] mx-auto py-4 px-[3rem] bg-gray-100 rounded-lg">
                <div className="flex justify-between items-center border-b border-gray-300">
                    <h2 className="py-[1rem] text-[1.3rem] font-medium ">User Details</h2>
                    <div className="">
                        <Link href={`/dashboard/create-task/1`} className="p-2 text-white text-[0.9rem] bg-indigo-500 rounded-md text-center">Assign task</Link>
                    </div>
                </div>
                <div className="w-full py-[2rem] flex justify-between items-center gap-[2rem]">
                    <div className="py-4 flex justify-start items-center gap-[1rem] ">
                        <div className="px-[0.6rem] py-[0.4rem] flex justify-center items-center gap-[1rem] text-red-600 font-medium bg-gray-300 rounded-lg">
                            <div>Delete user</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </div>
                        <Link href="/dashboard/create-user" className="px-[0.6rem] py-[0.4rem] flex justify-center items-center gap-[1rem] text-indigo-600 font-medium bg-gray-300 rounded-lg">
                            <div>Update user</div>
                        </Link>
                        
                    </div>
                    <div className="w-fit py-[0.4rem] px-[1rem] text-white bg-indigo-500 rounded-lg">
                        <Link href={`/dashboard/billing/create-billing`}>Create a bill</Link>
                    </div>
                </div>
                <div className="pb-3 flex justify-start items-center">
                    <div className="pr-[3rem] text-[1rem]">Name: </div>
                    <div className="text-[1.1rem] font-medium">Michael Rhule</div>
                </div>
                <div className="pb-3 flex justify-start items-center">
                    <div className="pr-[3rem] text-[1rem]">Email: </div>
                    <div className="text-[1.1rem] font-medium">rhule@gmail.com</div>
                </div>
                <div className="pb-3 flex justify-start items-center">
                    <div className="pr-[3rem] text-[1rem]">Password: </div>
                    <div className="text-[1.1rem] font-medium">lksjdfie83894</div>
                </div>
                
            </div>
        </div>
    )
}