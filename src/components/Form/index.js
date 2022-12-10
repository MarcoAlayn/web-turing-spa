import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { sendContact } from "../../redux/actions";

function Formulario() {
  const [enviado, setEnviado] = useState(false);
  // console.log("ErrorMessage", ErrorMessage);
  const dispatch = useDispatch();
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
            // si el nombre no es válido, entonces el error es "El nombre no es válido"
            errores.name = "El nombre no es válido";
          }

          if (!valores.email) {
            errores.email = "El email es obligatorio";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.email)
          ) {
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
        // definimos la acción que se ejecutará cuando el usuario envíe el formulario
        onSubmit={(values, { resetForm }) => {
          // dispatch(values); // envía los datos del formulario a la store de redux
          dispatch(sendContact(values));
          resetForm(); // resetea los inputs el formulario despues de enviarlo
          setEnviado(true); // cambia el estado de enviado a true
          setTimeout(() => {
            setEnviado(false); // cambia el estado de enviado a false después de 3 segundos
          }, 5000);
        }}
      >
        {/* renderizamos el formulario */}
        {({ errors }) => (
          <Form>
            {/* {console.log("touched", touched)} */}
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" placeholder="name" />
              <ErrorMessage
                name="name"
                component={() => <p>{errors.name}</p>}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" placeholder="email" />
              <ErrorMessage
                name="email"
                component={() => <p>{errors.email}</p>}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <Field type="tel" id="phone" name="phone" placeholder="phone" />
              <ErrorMessage
                name="phone"
                component={() => <p>{errors.phone}</p>}
              />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <Field
                type="text"
                id="company"
                name="company"
                placeholder="company"
              />
              <ErrorMessage
                name="company"
                component={() => <p>{errors.company}</p>}
              />
            </div>
            <div>
              <label htmlFor="job">Job</label>
              <Field type="text" id="job" name="job" placeholder="job" />
              <ErrorMessage name="job" component={() => <p>{errors.job}</p>} />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <Field
                type="text"
                id="country"
                name="country"
                placeholder="country"
              />
              <ErrorMessage
                name="country"
                component={() => <p>{errors.country}</p>}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <Field type="text" id="city" name="city" placeholder="city" />
              <ErrorMessage
                name="city"
                component={() => <p>{errors.city}</p>}
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="message"
              ></Field>
              <ErrorMessage
                name="message"
                component={() => <p>{errors.message}</p>}
              />
            </div>
            <button type="submit">Send</button>
            {enviado && <p>Formulario enviado</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Formulario;
