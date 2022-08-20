import { useQuery, gql } from '@apollo/client';

const GET_SERVER_RESPONSE = gql`query { greet }`;

const LandingPage=()=>{

    const { loading, error, data } = useQuery(GET_SERVER_RESPONSE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return(
        <>
          <h1>This Page is for testing purpose</h1>
          <h2>{data.greet}</h2>
        </>
    )
}

export default LandingPage;