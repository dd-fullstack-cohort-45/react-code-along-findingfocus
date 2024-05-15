import React from "react";
import {Card} from "flowbite-react";

export function MyCard() {
    return(
        <>
            <Card href="#" className="max-w-sm bg-gradient-to-b from-purple-700 to-purple-900 border-blue-950 py-2">
                <h5 className="text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-300 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
        </>
    )
}