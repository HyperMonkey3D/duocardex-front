"use client";

import axios from "axios";
import { useFormik } from "Formik";

const AddClinicScreen = () => {
  const URL = "http://localhost:8000/clients";

  const formik = useFormik({
    initialValues: {
      DoctorFirstName: "",
      DoctorLastName: "",
      ClinicName: "",
      Address: "",
      Email: "",
      Phone: "",
    },
    onSubmit: (values) => {
      console.log("from from", JSON.stringify(values));
      postOrder(JSON.stringify(values));
      formik.resetForm();
    },
  });

  const postOrder = async (values: any) => {
    let config = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const post = await axios.post(URL, values, config);
      console.log("sent");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-300 h-full w-full">
      <div>
        <h2>Add New Clinic</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="DoctorFirstName">Doctor Name</label>
          <input
            id="DoctorFirstName"
            name="DoctorFirstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.DoctorFirstName}
          />
        </div>
        <div>
          <label htmlFor="DoctorLastName">Doctor Last Name</label>
          <input
            id="DoctorLastName"
            name="DoctorLastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.DoctorLastName}
          />
        </div>
        <div>
          <label htmlFor="ClinicName">Clinic</label>
          <input
            id="ClinicName"
            name="ClinicName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.ClinicName}
          />
        </div>
        <div>
          <label htmlFor="Address">Address</label>
          <input
            id="addAddressress"
            name="Address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Address}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="Email"
            name="Email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.Email}
          />
        </div>
        <div>
          <label htmlFor="Phone">Phone</label>
          <input
            id="Phone"
            name="Phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.Phone}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <button onClick={() => formik.resetForm()} type="button">
        cancel
      </button>
    </div>
  );
};

export default AddClinicScreen;
