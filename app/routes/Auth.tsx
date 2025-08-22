import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";
//Summary: meta function
// Purpose: Returns an array of meta tag objects for a webpage, e.g., page title and description.
// Syntax:
// Arrow function () => [...] returns an array of objects.
// Each object has title, name, content strings.
// export const makes it usable in other files.
export const meta = () => ([
    { title: 'Resumind | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore(); // 1. Access global state (auth + loading status)
    const location = useLocation();// 2. Get current URL info
    const next = location.search.split('next=')[1];// 3. Extract "next" param from query string
    const navigate = useNavigate();// 4. React Router hook for programmatic navigation

    useEffect(() => {// 5. If user is logged in → redirect to "next" page
        if(auth.isAuthenticated) navigate(next);// Runs whenever authentication status or "next" changes
    }, [auth.isAuthenticated, next])


    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
            <div className="gradient-border shadow-lg">
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Welcome</h1>
                        <h2>Log In to Continue Your Job Journey</h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Signing you in...</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={auth.signOut}>
                                        <p>Log Out</p>
                                    </button>
                                ) : (
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Auth