import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from '~/services/api'

type UserData = {
    token?: string;
};

interface AuthContextData {
    signed: boolean;
    data: UserData | null;
    storageLoading: boolean;
    loading: boolean;
    signIn(username: string, password: string): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [signInData, setSignInData] = useState<UserData | null>(null);
    const [storageLoading, setStorageLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadStorageData() {
            const storagedSignInData = await AsyncStorage.getItem("@signInData");

            if (storagedSignInData) {
                setSignInData(JSON.parse(storagedSignInData));
                api.defaults.headers.Authorization = `Bearer ${JSON.parse(storagedSignInData).token
                    }`;
            }

            setStorageLoading(false);
        }

        loadStorageData();
    });

    async function signIn(username: string, senha: string) {
        setLoading(true);
        const response = await auth.signIn(username, senha);
        if (response) {
            setSignInData(response);

            await AsyncStorage.setItem("@signInData", JSON.stringify(response));
            setLoading(false);
        } else {
            setLoading(false);
        }
    }

    async function signOut() {
        await AsyncStorage.clear();
        setSignInData(null);
    }

    async function forgotPassword(mail: string, cpf: string) {
        await auth.forgotPassword(mail, cpf);
    }

    async function agreeLgpd() {
        const response = await auth.agreeLgpd();
        if (response) {
            setSignInData({ ...signInData, aceiteLGPD: response });
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
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider.");
    }

    return context;
}

export { AuthProvider, useAuth };

