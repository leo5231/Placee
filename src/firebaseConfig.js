import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyBXcCREc3Msj3HyHeFK0YLJBt0y1y80xdc",
  authDomain: "placee-12b95.firebaseapp.com",
  projectId: "placee-12b95",
  storageBucket: "placee-12b95.firebasestorage.app",
  messagingSenderId: "1022351564665",
  appId: "1:1022351564665:android:2ee49533995c49c6c0d9a8"
};

// Garante que o app não será inicializado múltiplas vezes
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Inicialização condicional do Auth para evitar problemas em ambientes não suportados
let auth;
if (Platform.OS !== 'web') {
  try {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });
  } catch (e) {
    auth = getAuth(app);
  }
} else {
  auth = getAuth(app);
}

export { app, auth }; 