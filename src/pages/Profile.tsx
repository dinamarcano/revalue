import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BottomNav from "../components/BottomNav";

export default function Profile() {
  const navigate = useNavigate();

  const savedUser = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const [profileImage, setProfileImage] = useState<string | null>(
    savedUser.profileImage || null
  );

  const [email, setEmail] = useState(
    savedUser.email || ""
  );

  const [password, setPassword] = useState(
    savedUser.password || ""
  );

  const [company, setCompany] = useState(
    savedUser.company || ""
  );

  const [ubication, setUbication] = useState(
    savedUser.ubication || ""
  );

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const updatedUser = {
      email,
      password,
      company,
      ubication,
      profileImage,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    alert("Profile updated successfully ✅");
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center pb-28">

      {/* CONTAINER */}
      <div className="w-full max-w-[1200px] px-4 md:px-10 py-6 md:py-10">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8">

          {/* BACK */}
          <button
            onClick={() => navigate(-1)}
            className="text-[#2DCC70] text-base md:text-lg"
          >
            ← Back
          </button>

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Profile
          </h1>

          <div className="w-10" />
        </div>

        {/* PROFILE CARD */}
        <div className="bg-white rounded-[35px] shadow-md p-6 md:p-10">

          {/* IMAGE */}
          <div className="flex flex-col items-center mb-10">

            <div className="relative">

              {/* PROFILE IMAGE */}
              <div
                className="
                  w-32
                  h-32
                  md:w-44
                  md:h-44
                  rounded-full
                  overflow-hidden
                  border-[6px]
                  border-[#2DCC70]
                  bg-[#EAEAEA]
                  flex
                  items-center
                  justify-center
                "
              >

                {profileImage ? (
                  <img
                    src={profileImage}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-5xl md:text-7xl">
                    👤
                  </span>
                )}

              </div>

              {/* EDIT BUTTON */}
              <label
                className="
                  absolute
                  bottom-2
                  right-2
                  bg-[#2DCC70]
                  text-white
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  shadow-md
                "
              >
                ✎

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

            </div>

            <p className="text-[#777] mt-4 text-sm md:text-base text-center">
              Tap the pencil to change your photo
            </p>

          </div>

          {/* FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* EMAIL */}
            <div>

              <label className="text-[#2DCC70] font-semibold">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  mt-2
                  p-4
                  rounded-2xl
                  bg-[#F2F3F7]
                  outline-none
                "
              />

            </div>

            {/* PASSWORD */}
            <div>

              <label className="text-[#2DCC70] font-semibold">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full
                  mt-2
                  p-4
                  rounded-2xl
                  bg-[#F2F3F7]
                  outline-none
                "
              />

            </div>

            {/* COMPANY */}
            <div>

              <label className="text-[#2DCC70] font-semibold">
                Company Name
              </label>

              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="
                  w-full
                  mt-2
                  p-4
                  rounded-2xl
                  bg-[#F2F3F7]
                  outline-none
                "
              />

            </div>

            {/* LOCATION */}
            <div>

              <label className="text-[#2DCC70] font-semibold">
                City / Location
              </label>

              <input
                type="text"
                value={ubication}
                onChange={(e) => setUbication(e.target.value)}
                className="
                  w-full
                  mt-2
                  p-4
                  rounded-2xl
                  bg-[#F2F3F7]
                  outline-none
                "
              />

            </div>

          </div>

          {/* SAVE BUTTON */}
          <button
            onClick={handleSave}
            className="
              mt-10
              w-full
              py-4
              rounded-2xl
              bg-[#2DCC70]
              text-white
              text-lg
              md:text-xl
              font-semibold
              transition
              hover:scale-[1.01]
            "
          >
            Save Changes
          </button>

        </div>

      </div>

      {/* BOTTOM NAV */}
      <BottomNav />

    </div>
  );
}