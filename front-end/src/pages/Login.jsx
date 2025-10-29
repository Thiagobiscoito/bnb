import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section className="flex items-center">
        <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
          <h1 className="text-3xl font-bold">Faça seu login</h1>
          <form className="flex w-full flex-col gap-2">
            <input
              type="email"
              className="w-full items-center rounded-full border border-gray-300 px-4 py-2"
              placeholder="Digite seu E-mail"
            />
            <input
              type="password"
              className="w-full items-center rounded-full border border-gray-300 px-4 py-2"
              placeholder="Digite sua senha"
            />
            <button className="bg-prymary-400 w-full cursor-pointer items-center rounded-full border border-gray-300 px-4 py-2 font-bold text-white">
              Login
            </button>
          </form>
          <p>
            Ainda não tem uma conta?{" "}
            <Link to="/register" className="font-semibold underline">
              Registri-se aqui
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
