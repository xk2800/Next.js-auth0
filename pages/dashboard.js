import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Dashboard() {
    return (

        <div>contents live hereeeeeeee</div>
    );
}


//protection from auth0
export const getServerSideProps = withPageAuthRequired();