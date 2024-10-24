'use client';
import React, { useEffect, useState } from 'react';

export default function Page() {
    const [entities, setEntities] = useState([]);

    //useEffect(() => {
    //    fetch('http://localhost:9000/explore')
    //        .then(response => response.json())
    //        .then(data => {
    //            setEntities(data);
    //        });
    //}, []);

    return (
        <div className="min-h-[90vh] flex bg-customBg dark:bg-gray-800 text-gray-900 dark:text-gray-200 p-6">
            <div className="w-full">
                <h1 className="text-3xl font-bold mb-6">Explore Entities</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {entities.map((entity: any) => (
                        <div key={entity.keid} className="p-4 border rounded-lg">
                            <h2 className="text-xl font-bold">{entity.ketype}</h2>
                            <p>{entity.keorigin}</p>
                            <p>{entity.keabilities}</p>
                            <p>{entity.kebehavior}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
