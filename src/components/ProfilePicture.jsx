import React from "react";

const ProfilePicture = () => {
  const imageURL = "./src/assets/profile.jpg";

  const handleClick = (e) => (e.target.style.display = "none");

  return <img onClick={(e) => handleClick(e)} src={imageURL} alt="profile" />;
};

export default ProfilePicture;
