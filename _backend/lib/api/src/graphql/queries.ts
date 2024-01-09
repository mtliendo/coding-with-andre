/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPhotoID = /* GraphQL */ `query GetPhotoID($id: ID!) {
  getPhotoID(id: $id) {
    id
    firstName
    lastName
    middleName
    suffix
    address
    city
    zip
    state
    docNumber
    dateOfExp
    idType
    dateOfBirth
    dateOfIssue
    photoIdS3Key
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPhotoIDQueryVariables,
  APITypes.GetPhotoIDQuery
>;
export const listPhotoIDS = /* GraphQL */ `query ListPhotoIDS(
  $filter: ModelPhotoIDFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhotoIDS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      middleName
      suffix
      address
      city
      zip
      state
      docNumber
      dateOfExp
      idType
      dateOfBirth
      dateOfIssue
      photoIdS3Key
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPhotoIDSQueryVariables,
  APITypes.ListPhotoIDSQuery
>;
