import React from "react";
import { Formik } from "formik";

function Form() {
  return (
    <div>
      <Formik
        // definimos los valores iniciales
        initialValues={{
          name: "",
          email: "",
          phone: "",
          company: "",
          job: "",
          country: "",
          city: "",
          message: "",
        }}
        // definimos las validaciones
        validate={(valores) => {
          const errores = {}; // si no hay errores, entonces el objeto errores estará vacío

          if (!valores.name) {
            errores.name = "El nombre es obligatorio"; // si no hay nombre, entonces el error es "El nombre es obligatorio
          } else if (!/^[A-Z]+$/i.test(valores.name)) {
            errores.name = "El nombre no es válido";
          }

          if (!valores.email) {
            errores.email = "El email es obligatorio";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.email)
          ) {
            // si el email no es válido, entonces el error es "El email no es válido"
            errores.email = "El email no es válido";
          }

          if (!valores.phone) {
            errores.phone = "El teléfono es obligatorio";
          } else if (!/^[0-9]{10}$/i.test(valores.phone)) {
            errores.phone = "El teléfono no es válido";
          }

          if (!valores.company) {
            errores.company = "La empresa es obligatoria";
          }

          if (!valores.job) {
            errores.job = "El puesto es obligatorio";
          }

          if (!valores.country) {
            errores.country = "El país es obligatorio";
          }

          if (!valores.city) {
            errores.city = "La ciudad es obligatoria";
          }

          if (!valores.message) {
            errores.message = "El mensaje es obligatorio";
          }

          return errores;
        }}
        onSubmit={(values) => {
          // console.log("values:", values);
          // console.log("submit");
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            {console.log("touched", touched)}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={values.name}
                onChange={handleChange} // valida cuando el usuario escribe en el input
                onBlur={handleBlur} // valida cuando el usuario sale del input
              />
              {touched.name && errors.name && <p>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.phone && errors.phone && <p>{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.company && errors.company && <p>{errors.company}</p>}
            </div>
            <div>
              <label htmlFor="job">Job</label>
              <input
                type="text"
                id="job"
                name="job"
                placeholder="job"
                value={values.job}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.job && errors.job && <p>{errors.job}</p>}
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.country && errors.country && <p>{errors.country}</p>}
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.city && errors.city && <p>{errors.city}</p>}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {touched.message && errors.message && <p>{errors.message}</p>}
            </div>
            <button type="submit">Send</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Form;
