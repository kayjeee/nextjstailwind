'use client'
// pages/index.js
import { useEffect } from "react";
import * as Realm from "realm-web";
import { useApp } from "./components/useApp";
import Login from "./components/Login";
import Signup from "./components/Signup";


export default function Page() {
  const app = useApp();
  useEffect(() => {
    if (app && !app.currentUser) {
      const anonymousUser = Realm.Credentials.anonymous();
      app.logIn(anonymousUser);
    }
  }, [app, app?.currentUser]);

  return (
    <div>
 
      <Login />
      <Signup />
      {/* Your existing content */}
      <h2>Server Actions Demoo</h2>
      <div>
        {/* Your existing form */}
      </div>
    </div>
  );
}