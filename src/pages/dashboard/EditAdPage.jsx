import React from "react";
import EditAdForm from "../../components/EditAdForm";

const EditAdPage = () => {
  return (
    <div className="min-h-screen w-full p-8 bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-6">Edit Ad</h1>
      <EditAdForm />
    </div>
  );
};

export default EditAdPage;
