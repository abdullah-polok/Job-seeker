import ChatBot from 'react-simple-chatbot';
import { FaRegMessage } from "react-icons/fa6";
const Fetaure = () => {
    const steps = [
        {
            id: "Greet",
            message: "Hello, Welcome to our shop",
            trigger: "Done",
        },
        {
            id: "Done",
            message: "Please enter your name!",
            trigger: "waiting1",
        },
        {
            id: "waiting1",
            user: true,
            trigger: "Name",
        },
        {
            id: "Name",
            message: "Hi {previousValue}, Please select your issue",
            trigger: "issues",
        },
        {
            id: "issues",
            options: [
                {
                    value: "React",
                    label: "React",
                    trigger: "React",
                },
                { value: "Angular", label: "Angular", trigger: "Angular" },
            ],
        },
        {
            id: "React",
            message:
                "Thanks for letting your React issue, Our team will resolve your issue ASAP",
            end: true,
        },
        {
            id: "Angular",
            message:
                "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",
            end: true,
        },
    ];

    return (
        <div className=''>

            <div className='avatar rounded-full  right-80 absolute z-30 shadow-lg shadow-gray-400 '>
                <button className=" rounded-full " onClick={() => document.getElementById('my_modal_3').showModal()}><FaRegMessage className='bg-[#6e48aa] text-white w-12 h-12 p-3 rounded-full'></FaRegMessage></button>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="w-full">
                        <ChatBot

                            steps={steps}
                        />

                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Fetaure;