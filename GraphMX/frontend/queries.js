import { gql } from "graphql-request";

const getAllvideos = gql`
query{
  videos{
    createdAt,
    id,
    title,
    description,
    seen,
    slug,
    tags,
    thumbnail{
      url
    },
    mp4{
      url
    }
  }
}
`;


export {getAllvideos};