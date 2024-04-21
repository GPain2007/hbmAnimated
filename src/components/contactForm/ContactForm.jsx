import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs, { send } from "emailjs-com";
import "./Contact_From.scss";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
  reason: Yup.string(),
  date: Yup.date(),
  budget: Yup.number().min(
    3500,
    "Please note, we require a minimum floral investment of 3,500 for all full service weddings."
  ),
  venue: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters"),
  phone: Yup.number(),
  guest_count: Yup.number(),
  number_party: Yup.number(),
  floral_design_needs: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
  floral_wishes: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
  candles: Yup.string(),
  candle_message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
  reason: "",
  date: "",
  budget: "",
  venue: "",
  phone: "",
  whoIAm: "",
  couple_name1: "",
  couple_name2: "",
  guest_count: "",
  number_party: "",
  floral_design_needs: "",
  floral_wishes: "",
  candles: "",
  candle_message: "",
  pinterest: "",
  vendors: "",
  information: "",
};

const sendEmail = (values, actions) => {
  const selectedData = {};
  const { name, email, reason, ...otherValues } = values;
  selectedData.from_name = name;
  selectedData.from_email = email;
  selectedData.reason = reason;

  if (otherValues.number_party && !isNaN(otherValues.number_party)) {
    selectedData.number_party = otherValues.number_party;
  }

  if (otherValues.guest_count && !isNaN(otherValues.guest_count)) {
    selectedData.guest_count = otherValues.guest_count;
  }

  if (otherValues.couple_name1 && otherValues.couple_name1.trim() !== "") {
    selectedData.couple_name1 = otherValues.couple_name1;
  }
  if (otherValues.couple_name2 && otherValues.couple_name2.trim() !== "") {
    selectedData.couple_name2 = otherValues.couple_name2;
  }

  if (otherValues.whoIAm && otherValues.whoIAm.trim() !== "") {
    selectedData.whoIAm = otherValues.whoIAm;
  }

  if (otherValues.couple_names && otherValues.couple_names.trim() !== "") {
    selectedData.couple_names = otherValues.couple_names;
  }

  if (otherValues.phone && otherValues.phone.trim() !== "") {
    selectedData.from_phone = otherValues.phone;
  }

  if (otherValues.phone && otherValues.phone.trim() !== "") {
    selectedData.from_phone = otherValues.phone;
  }

  if (otherValues.date && otherValues.date.trim() !== "") {
    selectedData.from_date = otherValues.date;
  }

  if (otherValues.budget && !isNaN(otherValues.budget)) {
    selectedData.from_budget = otherValues.budget;
  }

  if (otherValues.venue && otherValues.venue.trim() !== "") {
    selectedData.from_venue = otherValues.venue;
  }

  if (otherValues.message && otherValues.message.trim() !== "") {
    selectedData.message = otherValues.message;
  }

  if (
    otherValues.floral_design_needs &&
    otherValues.floral_design_needs.trim() !== ""
  ) {
    selectedData.floral_design_needs = otherValues.floral_design_needs;
  }

  if (otherValues.floral_wishes && otherValues.floral_wishes.trim() !== "") {
    selectedData.floral_wishes = otherValues.floral_wishes;
  }

  if (otherValues.candle_message) {
    selectedData.candle_message = otherValues.candle_message;
  }

  if (otherValues.candles) {
    selectedData.candles = otherValues.candles;
  }

  if (otherValues.pinterest) {
    selectedData.pinterest = otherValues.pinterest;
  }

  if (otherValues.vendors && otherValues.vendors.trim() !== "") {
    selectedData.vendors = otherValues.vendors;
  }

  if (otherValues.information && otherValues.information.trim() !== "") {
    selectedData.information = otherValues.information;
  }

  if (otherValues.about_us && otherValues.about_us.trim() !== "") {
    selectedData.about_us = otherValues.about_us;
  }

  emailjs
    .send(
      "service_cfl2l94",
      "template_hlvwoss",
      selectedData,
      "4G1ZboWGj8Eab1SFK"
    )
    .then(
      (response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        alert("Your message has been sent! We will get back with you shortly.");
      },
      (error) => {
        actions.setSubmitting(false);
        alert("Failed to send message. Please try again later.");
      }
    );
  console.log(selectedData);
};

const ContactForm = ({ onHide, ...props }) => {
  return (
    <div
      className="modal contact_modal"
      style={{ display: props.show ? "block" : "none" }}
    >
      <div className="modal-content">
        <span className="close" onClick={onHide}>
          &times;
        </span>
        <h1 className="text-center">
          <strong>Wedding and Floral Inquiry</strong>
        </h1>
        <br />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            sendEmail(values, actions);
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <div className="name">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className={`form-control ${
                    touched.name && errors.name ? "is-invalid" : ""
                  }`}
                  style={{ backgroundColor: "white" }}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="email">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="florals_for">
                <label className="form-label">Florals for:</label>
                <div role="group" aria-labelledby="reason-group">
                  <div>
                    <label>
                      <Field type="radio" name="reason" value="Wedding" />{" "}
                      Wedding
                    </label>

                    <Field name="reason">
                      {({ field }) => (
                        <div
                          style={{
                            marginLeft: "25px",
                            display:
                              field.value === "Wedding" ? "block" : "none",
                          }}
                        >
                          <div className="options">
                            <label
                              htmlFor="whose-iam-select"
                              className="select"
                            >
                              I am...
                            </label>
                            <Field name="whoIAm">
                              {({ field }) => (
                                <select {...field} className="select">
                                  <option value="">
                                    --Please choose an option--
                                  </option>
                                  <option value="Bride">Bride</option>
                                  <option value="Groom">Groom</option>
                                  <option value="Planner">Planner</option>
                                  <option value="Host">Host</option>
                                  <option value="Other">Other</option>
                                </select>
                              )}
                            </Field>
                          </div>

                          <div className="couples">
                            <label htmlFor="couples">
                              The Couples Names: ( please include first and last
                              name of each)
                            </label>
                            <div>
                              <label className="name"> 1)</label>
                              <Field
                                component="input"
                                type="text"
                                name="couple_name1"
                                className="input"
                              />
                            </div>
                            <div>
                              <label className="name"> 2)</label>
                              <Field
                                component="input"
                                type="text"
                                name="couple_name2"
                                className="input"
                              />
                            </div>
                          </div>

                          <div className="phone">
                            <label htmlFor="phone" className="form-label">
                              Phone:
                            </label>
                            <Field
                              type="tel"
                              name="phone"
                              className={`form-control ${
                                touched.name && errors.name ? "is-invalid" : ""
                              }`}
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="event_date">
                            <label htmlFor="date" className="form-label">
                              Event Date:
                            </label>
                            <Field
                              type="date"
                              name="date"
                              format="MM-dd-yyyy"
                              className={`form-control ${
                                touched.name && errors.name ? "is-invalid" : ""
                              }`}
                            />
                            <ErrorMessage
                              name="date"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="venue">
                            <label htmlFor="venue" className="form-label">
                              Venue Name:
                            </label>
                            <Field
                              type="text"
                              name="venue"
                              className={`form-control ${
                                touched.name && errors.name ? "is-invalid" : ""
                              }`}
                            />
                            <ErrorMessage
                              name="venue"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="budget">
                            <label htmlFor="budget" className="form-label">
                              My Floral Budget:
                            </label>
                            <Field
                              type="number"
                              name="budget"
                              className={`form-control ${
                                touched.name && errors.name ? "is-invalid" : ""
                              }`}
                            />
                            <ErrorMessage
                              name="budget"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="guest_count">
                            <label className="form-label">Guest Count:</label>
                            <Field
                              type="number"
                              name="guest_count"
                              className="form-control"
                            />
                          </div>

                          <div className="number_party">
                            <label
                              htmlFor="number_party"
                              className="form-label"
                            >
                              Number in Your Wedding Party:
                            </label>
                            <Field
                              type="number"
                              name="number_party"
                              className="form-control"
                            />
                          </div>

                          <div className="message">
                            <label htmlFor="message" className="form-label">
                              Please describe your overall vision for your
                              wedding flowers. Include details like style,
                              theme, and color palette. Ex: “We are envisioning
                              a natural, romantic look with blush blooms and
                              lots of greenery…”
                            </label>

                            <Field
                              name="message"
                              as="textarea"
                              className={`form-control ${
                                touched.message && errors.message
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              name="message"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="message">
                            <label
                              htmlFor="floral_design_needs"
                              className="form-label"
                            >
                              Please list your floral design needs (items that
                              you definitely must have): EX: “Bouquets for
                              myself and 5 bridesmaids, etc…”
                            </label>
                            <br />
                            <Field
                              name="floral_design_needs"
                              as="textarea"
                              className={`form-control ${
                                touched.message && errors.message
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <ErrorMessage
                              name="message"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div>
                            <label htmlFor="candles">
                              Will you need candles for your wedding &
                              reception?
                              <div role="group" aria-labelledby="reason-group">
                                <div>
                                  <label>
                                    <Field
                                      type="radio"
                                      name="candles"
                                      value="Yes"
                                    />
                                    Yes
                                  </label>
                                  <Field name="candles">
                                    {({ field }) => (
                                      <div
                                        style={{
                                          display:
                                            field.value === "Yes"
                                              ? "block"
                                              : "none",
                                        }}
                                      >
                                        <div className="message">
                                          <label htmlFor="kind-of-candles">
                                            If so, what would you like?
                                            <br />
                                            <Field
                                              name="candle_message"
                                              as="textarea"
                                              className={`form-control ${
                                                touched.message &&
                                                errors.message
                                                  ? "is-invalid"
                                                  : ""
                                              }`}
                                            />
                                            <ErrorMessage
                                              name="message"
                                              component="div"
                                              className="invalid-feedback"
                                            />
                                          </label>
                                        </div>
                                      </div>
                                    )}
                                  </Field>
                                </div>
                                <div>
                                  <label>
                                    <Field
                                      type="radio"
                                      name="candles"
                                      value="No"
                                    />
                                    No
                                  </label>
                                </div>
                              </div>
                            </label>
                          </div>

                          <div className="message">
                            <label className="form-label">
                              Please list your floral wishes (extra items that
                              you would like to have): EX: “I would love flowers
                              down the aisle if the budget allows, etc…”
                              <br />
                              <Field
                                name="floral_wishes"
                                as="textarea"
                                className={`form-control ${
                                  touched.message && errors.message
                                    ? "is-invalid"
                                    : ""
                                }`}
                              />
                              <ErrorMessage
                                name="message"
                                component="div"
                                className="invalid-feedback"
                              />
                            </label>
                          </div>

                          <div className="url">
                            <label className="form-label">
                              If you ideas or a vision for your wedding please
                              share a copy of your pinterest board below:
                            </label>

                            <Field
                              component="input"
                              type="url"
                              name="pinterest"
                              placeholder="https://example.com"
                              className="form-control"
                            />
                          </div>

                          <div className="message">
                            <label className="form-label">
                              Please Share some of your other vendors: (For
                              example your photographer, planner, videographer,
                              etc!)
                              <Field
                                name="vendors"
                                as="textarea"
                                className={`form-control ${
                                  touched.message && errors.message
                                    ? "is-invalid"
                                    : ""
                                }`}
                              />
                              <ErrorMessage
                                name="message"
                                component="div"
                                className="invalid-feedback"
                              />
                            </label>
                          </div>

                          <div className="message">
                            <label className="form-label">
                              Any other information you would like to share with
                              us?
                              <Field
                                name="information"
                                as="textarea"
                                className={`form-control ${
                                  touched.message && errors.message
                                    ? "is-invalid"
                                    : ""
                                }`}
                              />
                              <ErrorMessage
                                name="message"
                                component="div"
                                className="invalid-feedback"
                              />
                            </label>
                          </div>

                          <div className="message">
                            <label className="form-label">
                              How did you hear about us?
                              <Field
                                name="about_us"
                                as="textarea"
                                className={`form-control ${
                                  touched.message && errors.message
                                    ? "is-invalid"
                                    : ""
                                }`}
                              />
                              <ErrorMessage
                                name="message"
                                component="div"
                                className="invalid-feedback"
                              />
                            </label>
                          </div>
                        </div>
                      )}
                    </Field>
                  </div>

                  <div>
                    <label>
                      <Field type="radio" name="reason" value="Event" /> Event
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field
                        type="radio"
                        name="reason"
                        value="Floral Workshop"
                      />{" "}
                      Floral Workshop
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field
                        type="radio"
                        name="reason"
                        value="Branding Event"
                      />{" "}
                      Branding Event
                    </label>
                  </div>
                  <div>
                    <label>
                      <Field
                        type="radio"
                        name="reason"
                        value="Floral Arrangment"
                      />{" "}
                      Floral Arrangment
                    </label>
                  </div>

                  <div>
                    <label>
                      <Field type="radio" name="reason" value="Other" /> Other
                    </label>
                  </div>
                </div>
                <ErrorMessage
                  name="reason"
                  component="div"
                  className="invalid-feedback d-block"
                />
              </div>

              <div>
                <button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="mb-5"
                  onClick={() => console.log("Button clicked")}
                >
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
