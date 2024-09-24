// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { toast } from "react-toastify";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     toast.success("Logout successful!");
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-white text-xl font-bold">
//           Recipe Manager
//         </Link>
//         <div className="flex items-center space-x-4">
//           {user ? (
//             <>
//               <Link to="/profile" className="text-white">
//                 {user.user || "Profile"}
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="text-white px-4 py-2 bg-blue-500 rounded"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="text-white px-4 py-2 bg-green-500 rounded"
//               >
//                 Sign Up
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
