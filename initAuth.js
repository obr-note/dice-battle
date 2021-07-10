import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    firebaseAuthEmulatorHost: 'localhost:9099',
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'obara-dice-battle',
        clientEmail: 'mayowanimayowan@gmail.com',
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: 'https://obara-dice-battle-default-rtdb.firebaseio.com',
    },
    firebaseClientInitConfig: {
      apiKey: 'AIzaSyAeoYRa5zdZ80M7cMg5qiuP8p5sEtymmAM', // required
      authDomain: 'obara-dice-battle.firebaseapp.com',
      databaseURL: 'https://obara-dice-battle-default-rtdb.firebaseio.com',
      projectId: 'obara-dice-battle',
    },
    cookies: {
      name: 'obara-dice-battle', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  })
}

export default initAuth
