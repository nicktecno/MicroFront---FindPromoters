import { gql } from "@apollo/client";

export const GET_PROMOTERS = gql`
  query GetPromoter($options: String!, $page: Int) {
    promoter(options: $options, page: $page) {
      id
      name
      description
      img_profile
      cover
    }
  }
`;

export const GET_OPTIONS = gql`
  query GetOptions {
    classification {
      id
      name
      description
      options {
        id
        name
      }
    }
  }
`;
