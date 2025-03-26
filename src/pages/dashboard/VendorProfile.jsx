import { useState } from "react";
import { Camera } from "lucide-react";

const VendorProfile = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    businessName: "Doe's Electronics",
    phone: "+233 123 456 789",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Edit Profile
        </h2>

        {/* Profile Picture Upload */}
        <div className="flex justify-center mb-4">
          <label className="relative cursor-pointer">
            <input type="file" className="hidden" />
            <div className="w-24 h-24 rounded-full border-4 border-gray-300 flex items-center justify-center bg-gray-200 overflow-hidden">
              <Camera className="w-8 h-8 text-gray-600" />
            </div>
          </label>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorProfile;






