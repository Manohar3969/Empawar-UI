import React from "react";

export default function DeleteConfirmationModal({ onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="bg-white rounded p-8">
                <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
                <p>Do you really want to delete this product?</p>
                <div className="mt-4 flex justify-end space-x-4">
                    <button onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                </div>
            </div>
        </div>
    );
}
