import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as auth from '~/services/auth';
import api from '~/services/api';
import dropdownRef from '~/components/DropdownAlert';

type UserData = {
  fullname: string;
  email: string;
  token?: string;
};

interface AuthContextData {
  signed: boolean;
  signInData: UserData | null;
  storageLoading: boolean;
  loading: boolean;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
  signUp(
    fullname: string,
    email: string,
    password: string,
    confirmation: string,
  ): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [signInData, setSignInData] = useState<UserData | null>(null);
  const [storageLoading, setStorageLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storagedSignInData = await AsyncStorage.getItem('@signInData');

      if (storagedSignInData) {
        setSignInData(JSON.parse(storagedSignInData));
        api.defaults.headers.Authorization = `Bearer ${
          JSON.parse(storagedSignInData).token
        }`;
      }

      setStorageLoading(false);
    }

    loadStorageData();
  });

  async function signIn(email: string, password: string) {
    setLoading(true);
    const response = await auth.signIn(email, password);
    if (response) {
      setSignInData(response);

      await AsyncStorage.setItem('@signInData', JSON.stringify(response));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }

  async function signOut() {
    await AsyncStorage.clear();
    setSignInData(null);
  }

  async function signUp(
    fullname: string,
    email: string,
    password: string,
    confirmation: string,
  ) {
    try {
      if (password === confirmation) {
        setSignInData({fullname, email, token: '123-1231-123-1231-12323'});
      } else {
        dropdownRef.current?.alertWithType(
          'error',
          'Problema com a senha',
          'As senhas não são iguais.',
        );
      }
    } catch (err) {
      dropdownRef.current?.alertWithType(
        'error',
        'API Error',
        'Nenhuma resposta da API.',
      );
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!signInData,
        signInData,
        storageLoading,
        loading,
        signIn,
        signOut,
        signUp,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};
