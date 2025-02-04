import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const StatCard = () => {
  const [teamCount, setTeamCount] = useState(0);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get("https://bharat-techx.vercel.app/api/registrations");
        if (Array.isArray(response.data)) {
          setTeamCount(response.data.length);
        }
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };

    fetchRegistrations();
  }, []);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Users size={20} className="mr-2 text-blue-400" />
          Total Teams
        </span>
        <p className="mt-1 text-3xl font-semibold text-gray-100">{teamCount}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;