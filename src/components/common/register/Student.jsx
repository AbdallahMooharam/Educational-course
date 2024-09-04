import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import "bootstrap-icons/font/bootstrap-icons.css";
const Student = () => {
  const [errors, setErrors] = useState({});
  const [profilePicture, setProfilePicture] = useState(null);
  const [level, setLevel] = useState("");
  const [ageCategory, setAgeCategory] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };
  const handleAcceptTermsChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", e.target.name.value);
      formData.append("email", e.target.email.value);
      formData.append("password", e.target.password.value);
      formData.append("confirm_password", e.target.confirm_password.value);
      formData.append("phone", e.target.phone.value);
      formData.append("balance", 0);
      formData.append("start_from", new Date().toISOString().split("T")[0]);
      formData.append("type", "student");
      formData.append("age", ageCategory);
      formData.append("level", level);
      formData.append("profile_picture", profilePicture);
      formData.append("code", e.target.code.value);

      const response = await fetch(
        "https://unih0me.com/api/auth/register/teacher",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data.data));
      window.location.href = "/";
    } catch (error) {
      console.error("Error:", error);
      setErrors(
        error.response
          ? error.response.data.errors
          : { general: "An error occurred" }
      );
    }
  };
  return (
    <Container maxWidth="lg" className="font-[sans-serif]">
      <div className="font-[sans-serif]">
        <div className="grid items-center h-full lg:grid-cols-1 md:grid-cols-1">
          <div className="w-full p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold text-gray-800">
                  Register as a Student
                </h3>
                <p className="mt-4 text-sm text-gray-800">
                  Already have an account?
                  <a
                    href="/login"
                    className="ml-1 font-semibold text-blue-600 hover:underline whitespace-nowrap"
                  >
                    Sign in here
                  </a>
                </p>
              </div>
              <div className="grid justify-center grid-cols-2 md:grid-cols-1 gap-4">
                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Name
                    <span className={"spn_must_field"}>*</span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      type="text"
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Email
                    <span className={"spn_must_field"}>*</span>
                  </label>

                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Phone
                    <span className={"spn_must_field"}>*</span>
                  </label>

                  <div className="relative flex items-center">
                    <input
                      name="phone"
                      type="text"
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                      placeholder="Enter your phone"
                    />
                    {errors.phone && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <input type="hidden" name="type" value="student" />
                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Password
                    <span className={"spn_must_field"}>*</span>
                  </label>

                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                      placeholder="Enter your password"
                    />
                    {errors.password && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="">
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Confirm Password
                    <span className={"spn_must_field"}>*</span>
                  </label>

                  <div className="relative flex items-center">
                    <input
                      name="confirm_password"
                      type="password"
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                      placeholder="Confirm your password"
                    />
                    {errors.confirm_password && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Profile Picture
                    <span className={"spn_must_field"}>*</span>
                  </label>

                  <div className="relative flex items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePictureChange}
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    />
                    {errors.profilePicture && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Age Category
                    <span className={"spn_must_field"}>*</span>
                  </label>

                  <div className="relative flex items-center">
                    <select
                      name="ageCategory"
                      value={ageCategory}
                      onChange={(e) => setAgeCategory(e.target.value)}
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    >
                      <option value="">Select Age Category</option>
                      <option value="kid">Kid</option>
                      <option value="adult">Adult</option>
                    </select>
                    {errors.ageCategory && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  {ageCategory === "kid" && (
                    <div>
                      <label className="text-gray-800 text-[15px] mb-2 block mt-4">
                        Which Level Will You Start From
                        <span className={"spn_must_field"}>*</span>
                      </label>

                      <div className="relative flex items-center">
                        <select
                          name="level"
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}
                          className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                        >
                          <option value="">Select Level</option>
                          {Array.from({ length: 11 }, (_, i) => i + 1).map(
                            (level) => (
                              <option key={level} value={level}>
                                leve {level}
                              </option>
                            )
                          )}
                        </select>
                        {errors.level && (
                          <span className="text-red-600">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  {ageCategory === "adult" && (
                    <div>
                      <label className="text-gray-800 text-[15px] mb-2 block mt-4">
                        Which Level will You Start From?
                        <span className={"spn_must_field"}>*</span>
                      </label>

                      <div className="relative flex items-center">
                        <select
                          name="level"
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}
                          className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                        >
                          <option value="">Select Level</option>
                          {Array.from({ length: 13 }, (_, i) => i + 1).map(
                            (level) => (
                              <option key={level} value={level}>
                                level {level}
                              </option>
                            )
                          )}
                        </select>
                        {errors.level && (
                          <span className="text-red-600">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Referral Code
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="code"
                      type="text"
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                      placeholder="Enter Code"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={acceptTerms}
                  onChange={handleAcceptTermsChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="acceptTerms"
                  className="ml-2 text-sm text-gray-800"
                >
                  I accept the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm tracking-wide text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                  disabled={!acceptTerms}
                >
                  Register
                </button>
              </div>

              <div className="flex items-center gap-4 my-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-center text-gray-800">or</p>
                <hr className="w-full border-gray-300" />
              </div>

              <div className="flex -mx-4">
                <div className="w-full px-4">
                  <button
                    type="button"
                    className="flex items-center justify-center w-full gap-4 py-3 text-sm tracking-wide text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
                  >
                    <i className="bi bi-google"></i>
                    <span>Continue with Google</span>
                  </button>
                </div>

               {/* <div className="w-1/2 px-4">
                  <button
                    type="button"
                    className="flex items-center justify-center w-full gap-4 py-3 text-sm tracking-wide text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                  >
                    <i className="bi bi-facebook"></i>
                    <span>Continue with Facebook</span>
                  </button>
                </div>*/}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Student;
