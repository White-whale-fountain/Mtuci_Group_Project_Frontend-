import { useEffect, useState } from "react";
export default function ProfileAlien({ user }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ font: "700 40px Monteserrat", marginTop: "100px" }}>
        Это аккаунт {user}
      </p>
    </div>
  );
}
