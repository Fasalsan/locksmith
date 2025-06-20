// src/components/Modal.jsx

import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl p-6 w-11/12 max-w-md shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
