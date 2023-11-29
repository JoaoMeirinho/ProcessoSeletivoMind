import { getCookie } from "cookies-next";
import { useEffect } from "react";
import { verifica } from "../services/user";

export default function Home() {
  return (
    <div>
      <div className={styles.background}>
        <LoginCard title="Entre em sua conta">
          <form onSubmit={handleForm} action="" className={styles.form}>
            <Input
              type="email"
              placeholder="Seu e-mail"
              required
              value={formData.email}
              onChange={(e) => {
                handleFormEdit(e, "email");
              }}
            />
            <Input
              type="password"
              placeholder="Sua senha"
              required
              value={formData.password}
              onChange={(e) => {
                handleFormEdit(e, "password");
              }}
            />
            <Button>Entrar</Button>
            {error && <p className={styles.error}>{error}</p>}
            <Link href="/cadastro"> Ainda não possui conta?</Link>
          </form>
        </LoginCard>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("authorization", { req, res });
    if (!token) throw new Error("Token inválido");

    verifica(token);

    return {
      props: {},
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
};
