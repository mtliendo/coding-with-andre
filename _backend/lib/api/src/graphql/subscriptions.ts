/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePhotoID = /* GraphQL */ `subscription OnCreatePhotoID(
  $filter: ModelSubscriptionPhotoIDFilterInput
  $owner: String
) {
  onCreatePhotoID(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePhotoIDSubscriptionVariables,
  APITypes.OnCreatePhotoIDSubscription
>;
export const onUpdatePhotoID = /* GraphQL */ `subscription OnUpdatePhotoID(
  $filter: ModelSubscriptionPhotoIDFilterInput
  $owner: String
) {
  onUpdatePhotoID(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePhotoIDSubscriptionVariables,
  APITypes.OnUpdatePhotoIDSubscription
>;
export const onDeletePhotoID = /* GraphQL */ `subscription OnDeletePhotoID(
  $filter: ModelSubscriptionPhotoIDFilterInput
  $owner: String
) {
  onDeletePhotoID(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePhotoIDSubscriptionVariables,
  APITypes.OnDeletePhotoIDSubscription
>;
