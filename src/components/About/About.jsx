import React from "react";

const About = () => {
  return (
    <div
      className="container flex mx-auto bg-hero bg-cover bg-bottom h-80
      items-center //custom-utilities=> clip polygon clip-c-3"
    >
      <div
        className="container flex bg-martinique-low-opa-400 rounded-2xl
        flex-col space-y-1 text-center
        border mx-auto max-w-md p-4 text-white"
      >
        <h2 className="text-xl font-bold mb-2">
          High Quality Sportsware, Delivered To You
        </h2>
        <p>Chose the item you want and add it to your cart.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          aspernatur possimus.
        </p>
      </div>
    </div>
  );
};

export default About;
