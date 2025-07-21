import React, {useState} from "react";

export const ConfirmationPopup = (props) => {


    return (
        <div>
            {props.isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96 opacity-100">
                        <p className="text-lg font-semibold mb-6">Are you sure?</p>
                        <p className="mb-6">Do you want to proceed to {props.errorMessage}?</p>

                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={props.cancel}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={props.submit}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}