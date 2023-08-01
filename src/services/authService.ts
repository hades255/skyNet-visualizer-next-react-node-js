import { UsernamePasswordOpts } from '@aws-amplify/auth/lib-esm/types';
import { Amplify, Auth, Hub } from 'aws-amplify';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

export function listenToAutoSignInEvent(callback: (arg0: any) => void) {
  Hub.listen('auth', ({ payload }) => {
    const { event } = payload;
    if (event === 'autoSignIn') {
      const user = payload.data;
      callback(user);
      // assign user
    } else if (event === 'autoSignIn_failure') {
      // redirect to sign in page
    }
  });
}

export async function signUp(username: any, password: any) {
  console.log('user', username, password);
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      // attributes: {
      //     username,          // optional
      //     // other custom attributes
      // },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
    return user;
  } catch (error) {
    console.log('error signing up:', error);
    return '';
  }
}

export async function signIn(
  username: string | UsernamePasswordOpts,
  password: string | undefined
) {
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (error) {
    console.log('error signing in', error);
    return '';
  }
}

export async function signOut() {
  try {
    return await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
    return null;
  }
}

export async function confirmSignUp(username: string, code: string) {
  try {
    return await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log('error confirming sign up', error);
    return false;
  }
}
