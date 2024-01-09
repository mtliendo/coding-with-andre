import {
	Effect,
	ManagedPolicy,
	PolicyStatement,
	IRole,
} from 'aws-cdk-lib/aws-iam'
import { Bucket, HttpMethods } from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs'

type createExpenseBucketProps = {
	authRole: IRole
	unauthRole: IRole
}
export const createExpenseBucket = (
	scope: Construct,
	props: createExpenseBucketProps
) => {
	const expenseBucket = new Bucket(scope, 'expenseBucket', {
		cors: [
			{
				allowedMethods: [
					HttpMethods.GET,
					HttpMethods.POST,
					HttpMethods.PUT,
					HttpMethods.DELETE,
				],
				allowedOrigins: ['*'],
				allowedHeaders: ['*'],
				exposedHeaders: [
					'x-amz-server-side-encryption',
					'x-amz-request-id',
					'x-amz-id-2',
					'ETag',
				],
			},
		],
	})

	const canReadUpdateDeleteFromOwnProtectedDirectory = new PolicyStatement({
		effect: Effect.ALLOW,
		actions: ['s3:PutObject'],
		resources: [
			`arn:aws:s3:::${expenseBucket.bucketName}/protected/\${cognito-identity.amazonaws.com:sub}/*`,
		],
	})

	new ManagedPolicy(scope, 'SignedInUserManagedPolicy', {
		description:
			'managed Policy to allow access to s3 bucket by signed in users.',
		statements: [canReadUpdateDeleteFromOwnProtectedDirectory],
		roles: [props.authRole],
	})

	return expenseBucket
}
