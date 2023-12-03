import { useState } from "react";
import Link from "next/link";
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
    confirmPassword: "",
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
      if (formData.password !== formData.confirmPassword)
        throw new Error("As senhas não são iguais");
      const { nome, email, password } = formData;
      const response = await fetch("/api/user/cadastro", {
        method: "POST",
        body: JSON.stringify({
          nome,
          email,
          password,
        }),
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
          <label htmlFor="nome">Seu nome</label>
          <Input
            name="nome"
            type="text"
            placeholder="Seu nome"
            required
            value={formData.nome}
            onChange={(e: Event) => {
              handleFormEdit(e, "nome");
            }}
          />
          <label htmlFor="email">Seu E-mail</label>
          <Input
            name="email"
            type="email"
            placeholder="Seu E-mail"
            required
            value={formData.email}
            onChange={(e: Event) => {
              handleFormEdit(e, "email");
            }}
          />
          <label htmlFor="senha">Crie uma senha</label>
          <Input
            name="senha"
            type="password"
            placeholder="Sua senha"
            required
            value={formData.password}
            onChange={(e: Event) => {
              handleFormEdit(e, "password");
            }}
          />
          <label htmlFor="confirmarSenha">Confirme sua senha</label>
          <Input
            name="confirmarSenha"
            type="password"
            placeholder="Sua senha"
            required
            value={formData.confirmPassword}
            onChange={(e: Event) => {
              handleFormEdit(e, "confirmPassword");
            }}
          />
          <Button>Cadastrar</Button>
          {error && <p className={styles.error}>{error}</p>}
          <Link className={styles.account} href="/login">
            Já possui uma conta?
          </Link>
        </form>
      </LoginCard>
    </div>
  );
}
