import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../hooks/UseToken";

import SocialSignIn from "../Shared/SocialSignIn";

const SignUp = () => {
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const { createUserWithEmailPass, updateUser } = useContext(AuthContext);
const[token]= useToken(createdUserEmail)



  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    // image upload success
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGKEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const profileImg = imgData.data.url;
          const formInfo = {
            email: data.email,
            accountType: data.accountType,
            displayName: data.name,
            photoURL: profileImg,
          };

          //  user information transfer in database

       
            
              // save user in database done

              // now create user with firebase
              createUserWithEmailPass(formInfo.email, data.password)
                .then((result) => {
                  const user = result.user
                  const uid = user.uid
                  setCreatedUserEmail(user.email);
                  const dbForm = {...formInfo, uid: uid}
                  const userData = {
                    displayName: data.name,
                    photoURL: profileImg,
                  };

                  // database stored data pat

                  // updated data
                  updateUser(userData)
                    .then((result) => {


// send database 

fetch("https://laptopella.vercel.app/users", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    // authorization: `bearer ${localStorage.getItem('accessToken')}`
  },
  body: JSON.stringify(dbForm),
})
.then((res) => res.json())
.then(result=>{
 
  
  toast.success("successfully created account");
 

})
.catch((err) => console.error(err));





                      // toast.success("successfully created account");
                      // navigate(from, { replace: true });
                    })
                    // .catch((err) => console.error(err));
                })
                .catch((err) => console.error(err))
                .catch((error) => console.error(error));
           
        } else {
        }
      });
      if(token){
        navigate(from, { replace: true });
    }
  };
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Signup</h1>
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <form
          onSubmit={handleSubmit(handleSignUp)}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: "Name is Required",
                })}
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.name && (
                <p className="text-primary">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="AccountType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Account Type
              </label>
              <select
                {...register("accountType", {
                  required: true,
                })}
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
              >
                <option selected disabled>
                  Choose Account type
                </option>

                <option defaultValue="seller">Seller</option>
                <option defaultValue="buyer">Buyer</option>
              </select>
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "Photo is Required",
                })}
                id="image"
                name="image"
                accept="image/*"
              />
              {errors.img && (
                <p className="text-primary">{errors.img.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email", {
                  required: "enter a valid email address",
                })}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.email && (
                <p className="text-primary">{errors.email.message}</p>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
              />
              {errors.password && (
                <p className="text-primary">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <PrimaryButton
                type="submit"
                classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
              >
                Sign up
              </PrimaryButton>
            </div>
          </div>
        </form>
        <SocialSignIn />
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-gray-600">
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
