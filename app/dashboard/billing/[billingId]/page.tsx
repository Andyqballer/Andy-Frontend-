import Modal from "@/components/Modal";

export default function Billing({params}: {
    params: {userId: string}
}) {
    return (
        <Modal>
            <div className="w-[550px] h-[500px] py-[3rem] bg-gray-100 rounded-lg">
                <div className="w-[80%] mx-auto">
                    <h2 className="w-fit pb-[3rem] mx-auto text-[1.3rem] text-center font-semibold uppercase">Bill Details</h2>
                    <section className="w-[90%] mx-auto py-4 px-[2rem] bg-white ">
                        <div className="w-full mb-[2rem] flex justify-start items-center gap-[2rem]">
                            <div className="text-md font-medium text-gray-900 dark:text-white">Name : </div>
                            <div className="text-md font-normal text-gray-900 dark:text-white">Joshua Tech</div>
                        </div>
                        <div className="w-full mb-[2rem] flex justify-start items-center gap-[2rem]">
                            <div className="text-md font-medium text-gray-900 dark:text-white">Task : </div>
                            <div className="text-md font-normal text-gray-900 dark:text-white">Information</div>
                        </div>
                        <div className="w-full mb-[2rem] flex justify-start items-center gap-[2rem]">
                            <div className="text-md font-medium text-gray-900 dark:text-white">Hours : </div>
                            <div className="text-md font-normal text-gray-900 dark:text-white">5 hours</div>
                        </div>
                        <div className="w-full mb-[2rem] flex justify-start items-center gap-[2rem]">
                            <div className="text-md font-medium text-gray-900 dark:text-white">Amount : </div>
                            <div className="text-md font-normal text-gray-900 dark:text-white">$ 50,000.00</div>
                        </div>
                    </section>
                </div>
            </div>
        </Modal>
    )
}