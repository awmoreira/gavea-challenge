import api from '~/services/api';

interface IUserData {
  fullname: string;
  email: string;
  token: string;
}

export async function signIn(
  email: string,
  password: string,
): Promise<IUserData | null> {
  try {
    // const response = await api.post('autenticacao', {
    //   email,
    //   password,
    // });

    setInterval(() => {
      console.log({email, password});
    }, 5000); // run this thang every 2 seconds

    return {
      fullname: 'Allan Winckler Moreira',
      email: 'awmoreira@gmail.com',
      token: 'naçdn293nfdng',
    };
  } catch (err) {
    return null;
  }
}
