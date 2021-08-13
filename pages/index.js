import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default function Home() {

    const { user } = useUser(); //auth0 hook 

    console.log(user);

    return (
        <div>
            <nav>
                {/* only show login if no user logged in */}
                {!user && (
                    <Link href="/api/auth/login"><a>Login Here</a></Link>
                )}

                {/* if there is a user */}
                {user && (
                    <>
                        <img src={user.picture} alt={user.name} />
                        <br />
                        <Link href="/api/auth/logout">
                            <a>Logout</a>
                        </Link>
                    </>
                )}
            </nav>

            <div>content goes here</div>
        </div >
    );
}
