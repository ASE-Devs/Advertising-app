import { Calendar, TrendingUp, Eye, MousePointer } from "lucide-react";

export default function Analysis() {
  return (
    <div className="p-6 space-y-8">
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: TrendingUp, color: "text-blue-500", label: "Total Ads", value: "120" },
          { icon: Eye, color: "text-green-500", label: "Total Impressions", value: "45,000" },
          { icon: MousePointer, color: "text-purple-500", label: "Click-Through Rate", value: "5.2%" },
          { icon: Calendar, color: "text-red-500", label: "Active Ads", value: "80" },
        ].map(({ icon: Icon, color, label, value }, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-4 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <Icon className={`${color}`} size={32} />
            <div>
              <p className="text-gray-500 text-sm">{label}</p>
              <h2 className="text-2xl font-bold">{value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h3 className="font-semibold text-gray-800 text-lg mb-4">Ad Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                {["Ad Name", "Status", "Impressions", "Clicks", "CTR"].map((header, i) => (
                  <th key={i} className="border p-4 text-sm font-semibold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Promo Ad 1", status: "Active", impressions: "10,000", clicks: "500", ctr: "5%" },
                { name: "Discount Ad", status: "Paused", impressions: "8,000", clicks: "320", ctr: "4%" },
                { name: "Flash Sale", status: "Active", impressions: "15,000", clicks: "750", ctr: "5%" },
                { name: "Limited Offer", status: "Active", impressions: "20,000", clicks: "950", ctr: "4.8%" },
                { name: "Mega Sale", status: "Paused", impressions: "9,500", clicks: "280", ctr: "3.5%" },
                { name: "Weekend Deals", status: "Active", impressions: "18,500", clicks: "830", ctr: "4.5%" },
                { name: "Clearance Sale", status: "Paused", impressions: "12,000", clicks: "410", ctr: "3.8%" },
              ].map((ad, index) => (
                <tr
                  key={index}
                  className={`text-center transition-all duration-300 hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="border p-4">{ad.name}</td>
                  <td className={`border p-4 font-semibold ${ad.status === "Active" ? "text-green-600" : "text-red-500"}`}>
                    {ad.status}
                  </td>
                  <td className="border p-4">{ad.impressions}</td>
                  <td className="border p-4">{ad.clicks}</td>
                  <td className="border p-4">{ad.ctr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
