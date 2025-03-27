import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { apiDeleteVendorAdvertById } from "../services/adverts";

const handleDelete = async () => {
  // delete
  try {
    const response = await apiDeleteVendorAdvertById(ad.id);
    console.log(response.data);
    location.reload;
  } catch (error) {
    console.log;
  }
};

const EditDeleteButtons = ({ handleEdit, handleDelete }) => {
  return (
    <div className="flex space-x-3">
      <button onClick={handleEdit} className="flex items-center text-green-500">
        <Pencil size={16} className="mr-1" /> Edit
      </button>

      <button onClick={handleDelete} className="flex items-center text-red-500">
        <Trash2 size={16} className="mr-1" /> Delete
      </button>
    </div>
  );
};

export default EditDeleteButtons;
