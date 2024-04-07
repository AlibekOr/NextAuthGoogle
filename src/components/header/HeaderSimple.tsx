"use client"
import {Container} from '@mantine/core';
import classes from './HeaderSimple.module.css';
import {usePathname} from "next/navigation";
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";


export const HeaderSimple = () => {
    const session = useSession()
    const pathname = usePathname()
    return (
        <>
            (
            <header className={classes.header}>
                <Container className={classes.inner}>
                    {session?.data && <Link href='/profile'>Profile</Link>}
                    {session?.data ? (
                            <Link href='#' onClick={() => signOut({
                                callbackUrl: '/'
                            })}>Sign Out</Link>
                        )
                        :
                        (<Link href='/api/auth/signin'>SignIn</Link>)
                    }
                </Container>
            </header>
            )
        </>
    )
}