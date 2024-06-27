// import React, { useState } from 'react';
// import axios from 'axios';

// const FormPage = () => {
//   const [form, setForm] = useState({
//     title: '',
//     firstName: '',
//     lastName: '',
//     position: '',
//     company: '',
//     businessArena: '',
//     employees: '',
//     street: '',
//     additionalInformation: '',
//     zipCode: '',
//     place: '',
//     country: '',
//     code: '',
//     phoneNumber: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/forms', form);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex justify-center items-center">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
//         <h2 className="text-2xl font-bold mb-4">General Information</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <input name="title" placeholder="Title" onChange={handleChange} value={form.title} className="border p-2" />
//           <input name="firstName" placeholder="First Name" onChange={handleChange} value={form.firstName} className="border p-2" />
//           <input name="lastName" placeholder="Last Name" onChange={handleChange} value={form.lastName} className="border p-2" />
//           <input name="position" placeholder="Position" onChange={handleChange} value={form.position} className="border p-2" />
//           <input name="company" placeholder="Company" onChange={handleChange} value={form.company} className="border p-2" />
//           <input name="businessArena" placeholder="Business Arena" onChange={handleChange} value={form.businessArena} className="border p-2" />
//           <input name="employees" placeholder="Employees" onChange={handleChange} value={form.employees} className="border p-2" />
//         </div>
//         <h2 className="text-2xl font-bold my-4">Contact Details</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <input name="street" placeholder="Street" onChange={handleChange} value={form.street} className="border p-2" />
//           <input name="additionalInformation" placeholder="Additional Information" onChange={handleChange} value={form.additionalInformation} className="border p-2" />
//           <input name="zipCode" placeholder="Zip Code" onChange={handleChange} value={form.zipCode} className="border p-2" />
//           <input name="place" placeholder="Place" onChange={handleChange} value={form.place} className="border p-2" />
//           <input name="country" placeholder="Country" onChange={handleChange} value={form.country} className="border p-2" />
//           <input name="code" placeholder="Code" onChange={handleChange} value={form.code} className="border p-2" />
//           <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} value={form.phoneNumber} className="border p-2" />
//           <input name="email" placeholder="Email" onChange={handleChange} value={form.email} className="border p-2" />
//         </div>
//         <div className="my-4">
//           <label className="inline-flex items-center">
//             <input type="checkbox" className="form-checkbox" required />
//             <span className="ml-2">I do accept the <a href="#" className="text-blue-600">Terms and Conditions</a></span>
//           </label>
//         </div>
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register Badge</button>
//       </form>
//     </div>
//   );
// };

// export default FormPage;
