'use client'
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Notification() {
    const [isVisible, setIsVisible] = useState(true);

    const handleCloseNotification = () => {
        setIsVisible(false);
    }
    if (!isVisible) {
        return null;
    }

    return (
        <>
        <div className="notification">
            <div className="flex-grow text-center">
                <h1>We have a <strong>60% Discount</strong> and <strong>Free Delivery</strong> to new users in anything on our store</h1>
            </div>
            <div>
                <IoMdClose 
                 className="
                  hover:animate-spin 
                  hover:text-neutral-800 
                  transition-all 
                  ease-in-out 
                  duration-200 
                  cursor-pointer
                  "
                  onClick={handleCloseNotification}
                  />
            </div>
        </div>
        </>
    );
}