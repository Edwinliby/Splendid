import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappBtn() {
    return (
        <div>
            <a href="https://wa.me/+971563101817" target='_blank'
                className="fixed updown bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-[#25D366] w-12 h-12 flex justify-center items-center rounded-tl-3xl rounded-br-3xl transition-all duration-300 hover:bg-[#128C7E]">
                <FaWhatsapp className="text-white text-3xl" />
            </a>
        </div>
    )
}
