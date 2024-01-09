/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PhotoID = {
  __typename: "PhotoID",
  id: string,
  firstName: string,
  lastName: string,
  middleName?: string | null,
  suffix?: string | null,
  address: string,
  city: string,
  zip: string,
  state: string,
  docNumber: string,
  dateOfExp: string,
  idType?: string | null,
  dateOfBirth: string,
  dateOfIssue: string,
  photoIdS3Key: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type CreatePhotoIDInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  middleName?: string | null,
  suffix?: string | null,
  address: string,
  city: string,
  zip: string,
  state: string,
  docNumber: string,
  dateOfExp: string,
  idType?: string | null,
  dateOfBirth: string,
  dateOfIssue: string,
  photoIdS3Key: string,
};

export type ModelPhotoIDConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  middleName?: ModelStringInput | null,
  suffix?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  state?: ModelStringInput | null,
  docNumber?: ModelStringInput | null,
  dateOfExp?: ModelStringInput | null,
  idType?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  dateOfIssue?: ModelStringInput | null,
  photoIdS3Key?: ModelStringInput | null,
  and?: Array< ModelPhotoIDConditionInput | null > | null,
  or?: Array< ModelPhotoIDConditionInput | null > | null,
  not?: ModelPhotoIDConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePhotoIDInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  middleName?: string | null,
  suffix?: string | null,
  address?: string | null,
  city?: string | null,
  zip?: string | null,
  state?: string | null,
  docNumber?: string | null,
  dateOfExp?: string | null,
  idType?: string | null,
  dateOfBirth?: string | null,
  dateOfIssue?: string | null,
  photoIdS3Key?: string | null,
};

export type DeletePhotoIDInput = {
  id: string,
};

export type ModelPhotoIDFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  middleName?: ModelStringInput | null,
  suffix?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  state?: ModelStringInput | null,
  docNumber?: ModelStringInput | null,
  dateOfExp?: ModelStringInput | null,
  idType?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  dateOfIssue?: ModelStringInput | null,
  photoIdS3Key?: ModelStringInput | null,
  and?: Array< ModelPhotoIDFilterInput | null > | null,
  or?: Array< ModelPhotoIDFilterInput | null > | null,
  not?: ModelPhotoIDFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPhotoIDConnection = {
  __typename: "ModelPhotoIDConnection",
  items:  Array<PhotoID | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPhotoIDFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  middleName?: ModelSubscriptionStringInput | null,
  suffix?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  docNumber?: ModelSubscriptionStringInput | null,
  dateOfExp?: ModelSubscriptionStringInput | null,
  idType?: ModelSubscriptionStringInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  dateOfIssue?: ModelSubscriptionStringInput | null,
  photoIdS3Key?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPhotoIDFilterInput | null > | null,
  or?: Array< ModelSubscriptionPhotoIDFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateTextractPhotoIdMutationVariables = {
  photoIdS3Key: string,
};

export type CreateTextractPhotoIdMutation = {
  createTextractPhotoId:  {
    __typename: "PhotoID",
    id: string,
    firstName: string,
    lastName: string,
    middleName?: string | null,
    suffix?: string | null,
    address: string,
    city: string,
    zip: string,
    state: string,
    docNumber: string,
    dateOfExp: string,
    idType?: string | null,
    dateOfBirth: string,
    dateOfIssue: string,
    photoIdS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  },
};

export type CreatePhotoIDMutationVariables = {
  input: CreatePhotoIDInput,
  condition?: ModelPhotoIDConditionInput | null,
};

export type CreatePhotoIDMutation = {
  createPhotoID?:  {
    __typename: "PhotoID",
    id: string,
    firstName: string,
    lastName: string,
    middleName?: string | null,
    suffix?: string | null,
    address: string,
    city: string,
    zip: string,
    state: string,
    docNumber: string,
    dateOfExp: string,
    idType?: string | null,
    dateOfBirth: string,
    dateOfIssue: string,
    photoIdS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePhotoIDMutationVariables = {
  input: UpdatePhotoIDInput,
  condition?: ModelPhotoIDConditionInput | null,
};

export type UpdatePhotoIDMutation = {
  updatePhotoID?:  {
    __typename: "PhotoID",
    id: string,
    firstName: string,
    lastName: string,
    middleName?: string | null,
    suffix?: string | null,
    address: string,
    city: string,
    zip: string,
    state: string,
    docNumber: string,
    dateOfExp: string,
    idType?: string | null,
    dateOfBirth: string,
    dateOfIssue: string,
    photoIdS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePhotoIDMutationVariables = {
  input: DeletePhotoIDInput,
  condition?: ModelPhotoIDConditionInput | null,
};

export type DeletePhotoIDMutation = {
  deletePhotoID?:  {
    __typename: "PhotoID",
    id: string,
    firstName: string,
    lastName: string,
    middleName?: string | null,
    suffix?: string | null,
    address: string,
    city: string,
    zip: string,
    state: string,
    docNumber: string,
    dateOfExp: string,
    idType?: string | null,
    dateOfBirth: string,
    dateOfIssue: string,
    photoIdS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetPhotoIDQueryVariables = {
  id: string,
};

export type GetPhotoIDQuery = {
  getPhotoID?:  {
    __typename: "PhotoID",
    id: string,
    firstName: string,
    lastName: string,
    middleName?: string | null,
    suffix?: string | null,
    address: string,
    city: string,
    zip: string,
    state: string,
    docNumber: string,
    dateOfExp: string,
    idType?: string | null,
    dateOfBirth: string,
    dateOfIssue: string,
    photoIdS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPhotoIDSQueryVariables = {
  filter?: ModelPhotoIDFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPhotoIDSQuery = {
  listPhotoIDS?:  {
    __typename: "ModelPhotoIDConnection",
    items:  Array< {
      __typename: "PhotoID",
      id: string,
      firstName: string,
      lastName: string,
      middleName?: string | null,
      suffix?: string | null,
      address: string,
      city: string,
      zip: string,
      state: string,
      docNumber: string,
      dateOfExp: string,
      idType?: string | null,
      dateOfBirth: string,
      dateOfIssue: string,
      photoIdS3Key: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePhotoIDSubscriptionVariables = {
  filter?: ModelSubscriptionPhotoIDFilterInput | null,
  owner?: string | null,
};

export type OnCreatePhotoIDSubscription = {
  onCreatePhotoID?:  {
    __typename: "PhotoID",
    id: string,
    firstName: string,
    lastName: string,
    middleName?: string | null,
    suffix?: string | null,
    address: string,
    city: string,
    zip: string,
    state: string,
    docNumber: string,
    dateOfExp: string,
    idType?: string | null,
    dateOfBirth: string,
    dateOfIssue: string,
    photoIdS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePhotoIDSubscriptionVariables = {
  filter?: ModelSubscriptionPhotoIDFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePhotoIDSubscription = {
  onUpdatePhotoID?:  {
    __typename: "PhotoID",
    id: string,
    firstName: string,
    lastName: string,
    middleName?: string | null,
    suffix?: string | null,
    address: string,
    city: string,
    zip: string,
    state: string,
    docNumber: string,
    dateOfExp: string,
    idType?: string | null,
    dateOfBirth: string,
    dateOfIssue: string,
    photoIdS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePhotoIDSubscriptionVariables = {
  filter?: ModelSubscriptionPhotoIDFilterInput | null,
  owner?: string | null,
};

export type OnDeletePhotoIDSubscription = {
  onDeletePhotoID?:  {
    __typename: "PhotoID",
    id: string,
    firstName: string,
    lastName: string,
    middleName?: string | null,
    suffix?: string | null,
    address: string,
    city: string,
    zip: string,
    state: string,
    docNumber: string,
    dateOfExp: string,
    idType?: string | null,
    dateOfBirth: string,
    dateOfIssue: string,
    photoIdS3Key: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
