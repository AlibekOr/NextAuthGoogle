"use client"

import {SessionProvider} from "next-auth/react";
import {MantineProvider, createTheme} from '@mantine/core';

const theme = createTheme({

});
export const Providers = ({children}: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <MantineProvider theme={theme}>
                {children}
            </MantineProvider>
        </SessionProvider>
    )
}