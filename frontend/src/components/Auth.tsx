/* eslint-disable @typescript-eslint/no-unused-vars */
import { singUP } from "@harshith6322/medium-common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../tsconfig";

function Auth({ typelogin }: { typelogin: "Signup" | "Signin" }) {
  const [inputs, setinputs] = useState<singUP>({
    name: "",
    password: "",
    email: "",
  });
  const nav = useNavigate();

  //api fetch using axois
  async function handle_up() {
    try {
      const res = await axios.post(
        `${API}/${typelogin === "Signup" ? "singup" : "singin"}`,
        inputs
      );

      const jwt_token = res.data.token;
      localStorage.setItem("token", jwt_token);
      // nav("/blogs");
      if (res.status === 200 && jwt_token) {
        nav("/blogs");
      }
    } catch (e) {
      alert(e);
      console.log(e);
    }
  }
  return (
    <div
      // className="w-[50%] h-[100%] flex flex-col items-center max-md:w-[100%] "
      className={`w-[50%] h-[100%] flex flex-col items-center max-md:w-[100%]${
        typelogin === "Signup"
          ? " justify-start"
          : "justify-center mt-10 max-md:w-[100%]"
      }`}
    >
      <div className="w-[400px] h-[550px] text-center ">
        <h1 className="text-4xl font-bold mt-12">
          {typelogin === "Signup" ? "Create an account" : "Login here"}
        </h1>
        <p className="text-base font-normal mt-2 text-gray-500">
          {typelogin === "Signup"
            ? "Already haven an account?"
            : "Don't have an account"}{" "}
          <Link to={typelogin === "Signup" ? "/signin" : "/"}>
            <span className=" underline">
              {typelogin === "Signup" ? "Login" : "Create One"}
            </span>
          </Link>
        </p>
        {/* {JSON.stringify(inputs)} */}
        {typelogin === "Signup" ? (
          <Input
            placeholder="enter your username"
            labelname="Username"
            type="text"
            onchange={(e) => {
              setinputs({
                ...inputs,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
                name: e.target.value,
              });
            }}
          />
        ) : (
          ""
        )}
        <Input
          placeholder="m@example.com"
          labelname="Email"
          type="email"
          onchange={(e) => {
            setinputs({
              ...inputs,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-expect-error
              email: e.target.value,
            });
          }}
        />

        <Input
          placeholder="password"
          labelname="password"
          type="password"
          onchange={(e) => {
            setinputs({
              ...inputs,
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-expect-error
              password: e.target.value,
            });
          }}
        />
        <button
          type="button"
          className=" w-full py-2.5 px-5 me-2 mb-2 text-base font-medium text-white focus:outline-none bg-black rounded-lg border border-gray-200 mt-8"
          onClick={handle_up}
        >
          {typelogin === "Signup" ? "Sign Up " : "Sign In "}
        </button>
      </div>
    </div>
  );
}

interface inputtypes {
  labelname: string;
  placeholder: string;
  onchange: (e: unknown) => void;
  type: string;
}

function Input({ labelname, placeholder, onchange, type }: inputtypes) {
  return (
    <div className="mt-5">
      <label
        htmlFor="first_name"
        className="block mb-2 text-base font-medium text-gray-900 text-left"
      >
        {labelname}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        onChange={onchange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Auth;
