import {v4 as uuidV4} from 'uuid';
import 'react-native-get-random-values';
import api from '~/services/api';

interface IUserData {
  email: string;
  id: string;
  profile?: {
    fullname?: string;
  };
}

export async function signIn(
  email: string,
  password: string,
): Promise<IUserData | null> {
  try {
    let userData: any;
    const response: any = await api.post('user/Login', {
      email,
      password,
    });

    if (response) {
      userData = await api.post('user/Read', {
        email,
      });
    } else {
      throw new Error('API Error');
    }

    return {
      email,
      id: userData.data?.account?.id,
      profile: {
        fullname: userData.data?.account?.profile?.fullname || 'Without Name',
      },
    };
  } catch (err: any) {
    console.log('Api error', err);
    throw new Error('API Error');
  }
}

export async function signUp(
  fullname: string,
  email: string,
  password: string,
): Promise<IUserData | undefined> {
  try {
    const id = uuidV4();
    const response: any = await api.post('user/Create', {
      username: id,
      email,
      password,
      profile: {
        fullname,
      },
    });

    return {
      email,
      id: response.data?.account.id,
      profile: {
        fullname,
      },
    };
  } catch (err: any) {
    console.log('Api error', err);
    throw new Error('API Error');
  }
}
