/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTextractPhotoId = /* GraphQL */ `mutation CreateTextractPhotoId($photoIdS3Key: String!) {
  createTextractPhotoId(photoIdS3Key: $photoIdS3Key) {
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
` as GeneratedMutation<
  APITypes.CreateTextractPhotoIdMutationVariables,
  APITypes.CreateTextractPhotoIdMutation
>;
export const createPhotoID = /* GraphQL */ `mutation CreatePhotoID(
  $input: CreatePhotoIDInput!
  $condition: ModelPhotoIDConditionInput
) {
  createPhotoID(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePhotoIDMutationVariables,
  APITypes.CreatePhotoIDMutation
>;
export const updatePhotoID = /* GraphQL */ `mutation UpdatePhotoID(
  $input: UpdatePhotoIDInput!
  $condition: ModelPhotoIDConditionInput
) {
  updatePhotoID(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePhotoIDMutationVariables,
  APITypes.UpdatePhotoIDMutation
>;
export const deletePhotoID = /* GraphQL */ `mutation DeletePhotoID(
  $input: DeletePhotoIDInput!
  $condition: ModelPhotoIDConditionInput
) {
  deletePhotoID(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePhotoIDMutationVariables,
  APITypes.DeletePhotoIDMutation
>;
