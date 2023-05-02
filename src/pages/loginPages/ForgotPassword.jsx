import React from "react";
import { Link } from "react-router-dom";
import logo from './../../assets/pluma.png'


const ForgotPassword = () => {
  return (
    <>
      <img
        src={logo}
        className="invert w-1/5 mx-auto"
       />
      <h1 className="text-gray-500 text-3xl font-bold tracking-wide text-center">
        SHELFIE <br></br>
        <span className="text-slate-400">Recupera tu cuenta</span>
      </h1>

      <form className="my-10 bg-slate-700 shadow rounded-lg px-10 pb-10 pt-5">
        <div className="my-5">
          <label
            className="uppercase text-gray-400 block text-lg font-bold tracking-wide"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Escribe tu email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-400 outline-sky-200 placeholder:text-slate-200"
          />
        </div>

        <input
          id="submit"
          value="Recupera tu contraseña"
          className=" block w-2/3 mx-auto py-2 bg-cyan-500 rounded-xl text-center uppercase text-white tracking-wide font-medium mt-10 cursor-pointer hover:bg-cyan-600 transition-colors duration-300 ease-linear focus:outline-none"
        />
        <p className="text-center py-3 text-gray-50 ">
          O
        </p>
        <Link
          to="/register"
          className="block w-2/3 mx-auto py-2 border rounded-xl text-center uppercase text-cyan-400 tracking-wide font-medium cursor-pointer hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-colors duration-300 ease-linear focus:outline-none "
        >
          Regístrate
        </Link>
      </form>
    </>
  );
};

export default ForgotPassword;
