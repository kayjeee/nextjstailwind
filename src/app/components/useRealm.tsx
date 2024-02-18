// components/useRealm.js
import { App as RealmApp, Credentials } from 'realm-web';

const REALM_APP_ID = 'tasktracker-uuloe'; // Replace with your Realm App ID
const app = new RealmApp({ id: REALM_APP_ID });

export function useRealm() {
  return app;
}
