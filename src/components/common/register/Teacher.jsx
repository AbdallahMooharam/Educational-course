import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
const Teacher = () => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState([]);
  const [levels, setLevels] = useState([]);
  const [language_id, setLanguage_id] = useState("");
  const [Proficiency_id, setProficiency] = useState("");
  const [gender, setGender] = useState("");
  const [biography, setBiography] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [idPicture, setIdPicture] = useState(null);
  const [resume, setResume] = useState(null);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };
  const handleIdPictureChange = (e) => {
    setIdPicture(e.target.files[0]);
  };
  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };
  const handleAcceptTermsChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("firstname", e.target.firstName.value);
      formData.append("lastname", e.target.lastName.value);
      formData.append("email", e.target.email.value);
      formData.append("password", e.target.password.value);
      formData.append("confirm_password", e.target.confirm_password.value);
      formData.append("phone", e.target.phone.value);
      formData.append("whats", e.target.whats.value);
      formData.append("youtube_link", e.target.link.value);
      formData.append("balance", 0);
      formData.append("start_from", new Date().toISOString().split("T")[0]);
      formData.append("type", e.target.type.value);
      formData.append("course_id", e.target.course_id.value);
      formData.append("level_id", e.target.level_id.value);
      formData.append("gender", gender);
      formData.append("intro", biography);
      formData.append("language_id", language_id);
      formData.append("proficiency_id", Proficiency_id);
      formData.append("image", profilePicture);
      formData.append("nationalid", idPicture);
      formData.append("cv", resume);
      formData.append("accept_terms", acceptTerms);
      formData.append("code", e.target.code.value);
      formData.append("type", "teacher");

      const response = await fetch(
        "https://unih0me.com/api/auth/register/teacher",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        console.error(`Error: ${response.status} ${response.statusText}`);
        throw new Error(
          `Failed to register: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log(data);
      window.location.href = "/login";
    } catch (error) {
      console.error("Error:", error);
      setErrors(
        error.response
          ? error.response.data.errors
          : { general: "An error occurred" }
      );
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await fetch("https://unih0me.com/api/courses");
      const data = await response.json();
      setCourses(data.data.courses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLevels = async () => {
    try {
      const response = await fetch("https://unih0me.com/api/levels");
      const data = await response.json();
      setLevels(data.data.levels);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchLevels();
  }, []);

  return (
    <Container maxWidth="lg" className="font-[sans-serif]">
      <div className="font-[sans-serif] items-center">
        <div className="w-full h-full ">
          <div className="w-full p-6 ">
            <form onSubmit={handleSubmit} className="mx-auto ">
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold text-gray-800">
                  Register as a Teacher
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
                  <label className="text-gray-800 text-[15px] mb-2 block ">
                    {" "}
                    First Name
                    <span className={"spn_must_field"}>*</span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="firstName"
                      type="text"
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                      placeholder="Enter Your First Name"
                    />
                    {errors.firstName && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    {" "}
                    Last Name
                    <span className={"spn_must_field"}>*</span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="lastName"
                      type="text"
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                      placeholder="Enter Your Last Name"
                    />
                    {errors.lastName && (
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
                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    WhatsApp Number
                    <span className={"spn_must_field"}>*</span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="whats"
                      type="text"
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                      placeholder="Enter your WhatsApp Number"
                    />
                    {errors.whats && (
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
                    Gender
                    <span className={"spn_must_field"}>*</span>
                  </label>
                  <div className="relative flex items-center">
                    <select
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      
                    </select>
                    {errors.gender && (
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
                    Passport or national ID photo
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleIdPictureChange}
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    />
                  </div>
                </div>

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

                <div>
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

                <input type="hidden" name="type" value="teacher" />
                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    What Language Do You Want To Teach?
                    <span className={"spn_must_field"}>*</span>
                  </label>
                  <div className="relative flex items-center">
                    <select
                      name="course_id"
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    >
                      <option value="">Select Language</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                    {errors.course_id && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Language Level
                    <span className={"spn_must_field"}>*</span>
                  </label>
                  <div className="relative flex items-center">
                    <select
                      name="level_id"
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    >
                      <option value="">Select Level</option>
                      {levels.map((level) => (
                        <option key={level.id} value={level.id}>
                          {level.title}
                        </option>
                      ))}
                    </select>
                    {errors.level_id && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Language You Speak
                    <span className={"spn_must_field"}>*</span>
                  </label>
                  <div className="relative flex items-center">
                    <select
                      name="language_id"
                      value={language_id}
                      onChange={(e) => setLanguage_id(e.target.value)}
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    >
                      <option value="">Select Language</option>
                      <option value="arabic">Arabic</option>
                      <option value="english">English</option>
                    </select>
                    {errors.language_id && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Language Proficiency
                    <span className={"spn_must_field"}>*</span>
                  </label>

                  <div className="relative flex items-center">
                    <select
                      name="proficiency_id"
                      value={Proficiency_id}
                      onChange={(e) => setProficiency(e.target.value)}
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    >
                      <option value="">Select Proficiency_id</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="native">Native</option>
                    </select>
                    {errors.Proficiency_id && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-gray-800 text-[15px] mb-2 block">
                  Introduction
                </label>
                <div className="relative flex items-center">
                  <input
                    name="link"
                    type="text"
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Video Youtube Link"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-gray-800 text-[15px] mb-2 block">
                  Biography
                </label>
                <div className="relative flex items-center">
                  <textarea
                    name="biography"
                    value={biography}
                    onChange={(e) => setBiography(e.target.value)}
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Write About Yourself And Your Qualifications ( ONLY 500 Letters )"
                    maxLength="500"
                  />
                </div>
              </div>
              <div className="grid justify-center grid-cols-2 md:grid-cols-1 gap-4">
                <div className="mt-4">
                  <label className="text-gray-800 text-[15px] mb-2 block">
                    Resume
                    <span className={"spn_must_field"}>*</span>
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    />
                    {errors.resume && (
                      <span className="text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-8">
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
                <div className=" w-full px-4">
                  <button
                    type="button"
                    className="flex items-center justify-center w-full gap-4 py-3 text-sm tracking-wide text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
                  >
                    <i className="bi bi-google"></i>
                    <span>Continue with Google</span>
                  </button>
                </div>

              {/*  <div className="w-1/2 md:w-full px-4">
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

export default Teacher;
