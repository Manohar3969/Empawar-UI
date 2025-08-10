// src/components/OrderTrackingTimeline.jsx
import React from 'react';

export default function OrderTrackingTimeline({ stages }) {
    return (
        <div className="flex flex-col gap-4 mt-4">
            {stages.map((stage, idx) => (
                <div key={idx} className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        stage.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'
                    }`}></div>
                    <div>
                        <p className="text-sm font-medium">{stage.label}</p>
                        {stage.date && <p className="text-xs text-gray-500">{stage.date}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}
