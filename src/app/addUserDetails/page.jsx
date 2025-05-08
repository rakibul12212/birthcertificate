import React from "react";
import Form from "../component/Form/Form";

const page = () => {
  return (
    <div>
      <div className="flex justify-center pt-10">
        <p className="text-xl font-semibold border-l-2 ps-3  inline-block">
          Add User Details
        </p>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default page;
