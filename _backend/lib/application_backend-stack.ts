import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createAuth } from './auth/cognito'
import { createAmplifyGraphQLAPI } from './api/appsync'
import { CDKContext } from '../cdk.context'
import { createExpenseBucket } from './storage/dlBucket'
import { createAmplifyHosting } from './hosting/amplify'

export class ApplicationBackendStack extends cdk.Stack {
	constructor(
		scope: Construct,
		id: string,
		props: cdk.StackProps,
		context: CDKContext
	) {
		super(scope, id, props)

		const appName = context.appName

		const auth = createAuth(this, { appName: appName })
		const dlBucket = createExpenseBucket(this, {
			authRole: auth.identityPool.authenticatedRole,
			unauthRole: auth.identityPool.unauthenticatedRole,
		})

		const amplifyGraphqlAPI = createAmplifyGraphQLAPI(this, {
			appName,
			authRole: auth.identityPool.authenticatedRole,
			unauthRole: auth.identityPool.unauthenticatedRole,
			userpool: auth.userPool,
			bucket: dlBucket,
			identityPoolId: auth.identityPool.identityPoolId,
		})

		console.log(JSON.stringify(context, null, 2))
		const amplifyHosting = createAmplifyHosting(this, {
			appName,
			account: context.env.account,
			branch: context.branch,
			ghOwner: context.hosting.ghOwner,
			ghTokenName: context.hosting.ghTokenName,
			repo: context.hosting.repo,
			environmentVariables: {
				userPoolId: auth.userPool.userPoolId,
				userPoolClientId: auth.userPoolClient.userPoolClientId,
				identityPoolId: auth.identityPool.identityPoolId,
				region: this.region,
				apiUrl: amplifyGraphqlAPI.graphqlUrl,
			},
		})

		new cdk.CfnOutput(this, 'GraphQLAPIURL', {
			value: amplifyGraphqlAPI.graphqlUrl,
		})
		new cdk.CfnOutput(this, 'GraphQLAPIID', {
			value: amplifyGraphqlAPI.apiId,
		})
		new cdk.CfnOutput(this, 'UserPoolId', {
			value: auth.userPool.userPoolId,
		})
		new cdk.CfnOutput(this, 'UserPoolClientId', {
			value: auth.userPoolClient.userPoolClientId,
		})
		new cdk.CfnOutput(this, 'IdentityPoolId', {
			value: auth.identityPool.identityPoolId,
		})

		new cdk.CfnOutput(this, 'Region', {
			value: this.region,
		})

		new cdk.CfnOutput(this, 'AmplifyAppId', {
			value: amplifyHosting.appId,
		})
	}
}
