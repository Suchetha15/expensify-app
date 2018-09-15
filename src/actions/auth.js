import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid, userName, userImg) => ({
    type: 'LOGIN',
    uid,
    userName,
    userImg
});
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};
export const startLoginFB = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};