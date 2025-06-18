import { IoMdClose } from "react-icons/io";

export default function Notification() {
    return (
        <>
        <div className="notification">
            <div className="flex-grow text-center">
                <h1>We have a <strong>60% Discount</strong> and <strong>Free Delivery</strong> to new users in anything on our store</h1>
            </div>
            <div>
                <a href="">
                    <IoMdClose className="hover:animate-spin hover:text-neutral-800 transition-all ease-in-out duration-200 cursor-pointer" />
                </a>
            </div>
        </div>
        </>
    );
}