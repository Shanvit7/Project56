import { useQuery, gql } from '@apollo/client';

const GET_SERVER_RESPONSE = gql`query { greet }`;
const GET_DATA = gql`query {getUsers{
  id
  name
}}`;

const LandingPage=()=>{

    const { loading, error, data } = useQuery(GET_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return(
        <>
          <h1>This Page is for testing purpose</h1>
          <h2>Welcome {data.getUsers[0].name}</h2>
        </>
    )
}

export default LandingPage;