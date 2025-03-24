import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const EditDeleteButtons = ({ onEdit, onDelete }) => {
  return (
    <div className="flex space-x-3">
      <button onClick={onEdit} className="flex items-center text-green-500">
        <Pencil size={16} className="mr-1" /> Edit
      </button>
      <button onClick={onDelete} className="flex items-center text-red-500">
        <Trash2 size={16} className="mr-1" /> Delete
      </button>
    </div>
  );
};

export default EditDeleteButtons;
