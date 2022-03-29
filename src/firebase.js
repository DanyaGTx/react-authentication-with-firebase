  import {initializeApp} from 'firebase/app';
  import {getAuth} from 'firebase/auth';
  const firebaseConfig = {
      apiKey: "AIzaSyCTUWGO3wMyM75APV4GtT3JNlxjpL_CHkk",
      authDomain: "authentication-8e20a.firebaseapp.com",
      projectId: "authentication-8e20a",
      storageBucket: "authentication-8e20a.appspot.com",
      messagingSenderId: "611439141128",
      appId: "1:611439141128:web:09dcd9ab5e9a16aa5b4cbd"
    };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app
