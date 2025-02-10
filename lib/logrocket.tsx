"use client";

import LogRocket from "logrocket";
import React, { useEffect } from "react";

const LogRocketProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    useEffect(
        () => {
            LogRocket.init('csx-labs/csxlabs');
        }, 
    []);
    return (
        <>{children}</>
    );
}

export default LogRocketProvider;
