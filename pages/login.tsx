import { useState } from "react";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

import styles from "../styles/Login.module.css";

import LoginCard from "../src/components/loginCard/loginCard";
import Input from "../src/components/input/input";
import Button from "../src/components/button/button";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormEdit = (event: Event, name: any) => {
    setFormData({
      ...formData,
      [name]: (event.target! as HTMLInputElement).value,
    });
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      if (response.status !== 200) throw new Error(json);
      setCookie("authorization", json);
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.background}>
      <LoginCard title="Entre em sua conta">
        <form onSubmit={handleForm} action="" className={styles.form}>
          <Input
            type="email"
            placeholder="Seu e-mail"
            required
            value={formData.email}
            onChange={(e: Event) => {
              handleFormEdit(e, "email");
            }}
          />
          <Input
            type="password"
            placeholder="Sua senha"
            required
            value={formData.password}
            onChange={(e: Event) => {
              handleFormEdit(e, "password");
            }}
          />
          <Button>Entrar</Button>
          {error && <p className={styles.error}>{error}</p>}
          <Link className={styles.account} href="/cadastro">
            {" "}
            Ainda não possui conta?
          </Link>
        </form>
      </LoginCard>
    </div>
  );
}
