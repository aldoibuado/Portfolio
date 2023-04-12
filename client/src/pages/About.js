import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b 
    from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4
          border-gray-500">About</p>
        </div>

       <p className="text-xl mt-20">Being able to brainstrom, work with a team, be creative and come up with new web applications is what 
        got me interested in becoming a web developer!</p>

        <br />
        
       <p className="text-xl">Lorem ipsum dolor sit amet. Ea dolores amet qui vero excepturi eos dicta perferendis ut perferendis delectus quo consectetur labore. 
        Vel voluptas incidunt nam odit deleniti non voluptatem tempora ut itaque distinctio. Sed temporibus eligendi et dolores nemo et error illum qui dolorem unde.</p>
        
      </div>
    </div>
  );
}

export default About;
