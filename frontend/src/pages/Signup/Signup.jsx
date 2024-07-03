import React, { useContext, useState } from "react";
import SelectGender from "./SelectGender";
import { NavLink } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import {  useAuthContext } from "../../context/Auth_context.jsx";
import toast from "react-hot-toast";
var initial = {
  fullname: "",
  username: "",
  password: "",
  confirmpassword: "",
  email: "",
  gender: "",
  picurl: "wererw",
};

function Signup() {
  const [user, Setuser] = useState(initial);
  const { Setlocaldata } = useAuthContext();

  async function HandleChange(e) {
    e.preventDefault();
    const data = await useSignup(user);
    console.log(data)
    if(data?.error)
    {
      Setuser(initial)
      toast.error(data.error)
      return true;
    }
    Setlocaldata(data);
    localStorage.setItem("chat-user", JSON.stringify(data));
    Setuser(initial);
  }

  function Select(event) {
    Setuser({ ...user, gender: event.target.value });
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-[400px]  p-6 rounded-lg shadow-xl shadow-slate-700 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-500">
            Signup
            <span className="text-cyan-400"> ChatApp</span>
          </h1>
          <form
            onSubmit={(e) => HandleChange(e)}
            action="/api/auth/login"
            method="POST"
          >
            <div>
              <label className="label p-2">
                <h1 className="text-base label-text">Fullname</h1>
              </label>
              <input
                type="text"
                value={user.fullname}
                placeholder="Enter fullname"
                name="fullname"
                onChange={(e) => Setuser({ ...user, fullname: e.target.value })}
                className="w-full active:outline-cyan-400 input input-bordered h-10"
                required
              />
            </div>
            <div>
              <label className="label p-2">
                <h1 className="text-base label-text">email</h1>
              </label>
              <input
                value={user.email}
                type="text"
                placeholder="Enter email"
                name="email"
                onChange={(e) => Setuser({ ...user, email: e.target.value })}
                className="w-full active:outline-cyan-400 input input-bordered h-10"
              />
            </div>
            <div>
              <label className="label p-2">
                <h1 className="text-base label-text">Username</h1>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                value={user.username}
                required
                onChange={(e) => Setuser({ ...user, username: e.target.value })}
                className="w-full active:outline-cyan-400 input input-bordered h-10"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                required
                value={user.password}
                onChange={(e) => Setuser({ ...user, password: e.target.value })}
                type="password"
                placeholder="Enter Password"
                className="w-full p-3 focus:outline-none active:outline-cyan-400 border rounded-md h-10"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                required
                value={user.confirmpassword}
                onChange={(e) =>
                  Setuser({ ...user, confirmpassword: e.target.value })
                }
                type="password"
                placeholder="Enter Password"
                className="w-full p-3 focus:outline-none active:outline-cyan-400 border rounded-md h-10"
              />
            </div>
            <SelectGender Select={Select} gender={initial.gender} />
            <NavLink
              to="/login"
              className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              Already have an account?
            </NavLink>
            <div>
              <button className="w-full rounded-md p-1 mt-2 active:bg-black active:text-white  bg-cyan-400 ">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
