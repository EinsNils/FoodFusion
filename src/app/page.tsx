"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
    const [name, setName] = useState('');

    const search = async () => {
        const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${name}&search_simple=1&action=process&pageSize=5&page=1&json=1`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();
        console.log(json);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <header className="bg-blue-500 p-6 rounded shadow-lg text-white w-full max-w-xl text-center">
                <h1 className="text-3xl font-bold">Food Facts Search</h1>
                <Input
                    type="text"
                    placeholder="Essen"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-4 px-4 py-2 rounded"
                />
                <Button className="mt-4 px-4 py-2 bg-green-500 text-white rounded shadow" onClick={search}>Search</Button>
            </header>
        </div>
    );
}
