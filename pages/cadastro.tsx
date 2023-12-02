import { useState } from "react";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

import styles from "../styles/Login.module.css";

import LoginCard from "../src/components/loginCard/loginCard";
import Input from "../src/components/input/input";
import Button from "../src/components/button/button";

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormEdit = (event: Event, name: string) => {
    setFormData({
      ...formData,
      [name]: (event.target! as HTMLInputElement).value,
    });
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const response = await fetch("/api/user/cadastro", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      if (response.status !== 201) throw new Error(json);
      router.push("/login");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.background}>
      <LoginCard title="Crie sua conta">
        <form onSubmit={handleForm} action="" className={styles.form}>
          <Input
            type="text"
            placeholder="Seu nome"
            required
            value={formData.nome}
            onChange={(e: Event) => {
              handleFormEdit(e, "nome");
            }}
          />
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
          <Button>Cadastrar</Button>
          {error && <p className={styles.error}>{error}</p>}
          <Link href="/login">Já possui uma conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
