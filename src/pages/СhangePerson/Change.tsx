import React from "react";
import * as yup from "yup";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Formik, Field, Form } from "formik";
import "./Change.scss";



const validationSchema = yup.object({
    login: yup.string().required("login is required"),
    phone: yup
      .string()
      .min(11, "Phone should be of minimum 11 characters length")
      .max(16, "Phone should be of minimum 16 characters length")
      .required("Phone is required"),
    seria: yup
      .string()
      .min(4, "seria should be of minimum 4 characters length")
      .max(4, "seria should be of minimum 4 characters length")
      .required("seria is required"),
    number: yup
      .string()
      .min(6, "number should be of minimum 6 characters length")
      .max(6, "number should be of minimum 6 characters length")
      .required("number is required"),
  });
  const Change = () => {
    const formik = useFormik({
      initialValues: {
        name: "",
        surname: "",
        middleName: "",
        login: "ivanov",
        phone: "89655473326",
        seria: 5678,
        number: 658743,
        education: "",
        post: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  
    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="Change-Content">
            <div className="Change-ContentColumn">
              <div className="Change-InputsField">
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Имя"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>
              <div className="Change-InputsField">
                <TextField
                  fullWidth
                  id="surname"
                  name="surname"
                  label="Фамилия"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                  error={formik.touched.surname && Boolean(formik.errors.surname)}
                  helperText={formik.touched.surname && formik.errors.surname}
                />
              </div>
              <div className="Change-InputsField">
                <TextField
                  fullWidth
                  id="middleName"
                  name="middleName"
                  label="Отчество"
                  value={formik.values.middleName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.middleName && Boolean(formik.errors.middleName)
                  }
                  helperText={
                    formik.touched.middleName && formik.errors.middleName
                  }
                />
              </div>
              <div className="Change-InputsField">
                <TextField
                  fullWidth
                  id="login"
                  name="login"
                  label="Логин"
                  value={formik.values.login}
                  onChange={formik.handleChange}
                  error={formik.touched.login && Boolean(formik.errors.login)}
                  helperText={formik.touched.login && formik.errors.login}
                />
              </div>
              <div className="Change-InputsField">
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Телефон"
                  //type="password"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </div>
            </div>
            <div className="Change-ContentColumn">
              <div className="AddPerson-InputsField">
                <TextField
                  fullWidth
                  id="seria"
                  name="seria"
                  label="Серия паспорта"
                  value={formik.values.seria}
                  onChange={formik.handleChange}
                  error={formik.touched.seria && Boolean(formik.errors.seria)}
                  helperText={formik.touched.seria && formik.errors.seria}
                />
              </div>
              <div className="Change-InputsField">
                <TextField
                  fullWidth
                  id="number"
                  name="number"
                  label="Номер паспорта"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                  error={formik.touched.number && Boolean(formik.errors.number)}
                  helperText={formik.touched.number && formik.errors.number}
                />
              </div>
              <div className="Change-InputsField">
                <FormControl fullWidth>
                  <InputLabel id="education-label-id">Образование</InputLabel>
                  <Select
                    fullWidth
                    id="education"
                    labelId="education-label-id"
                    name="education"
                    value={formik.values.education}
                    label="Образование"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.education && Boolean(formik.errors.education)
                    }
                  >
                    <MenuItem value={"10"}>Ten</MenuItem>
                    <MenuItem value={"20"}>Twenty</MenuItem>
                    <MenuItem value={"30"}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="Change-InputsField">
                <FormControl fullWidth>
                  <InputLabel id="post-label-id">Должность</InputLabel>
                  <Select
                    fullWidth
                    id="post"
                    labelId="post-label-id"
                    name="post"
                    value={formik.values.post}
                    label="Должность"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.post && Boolean(formik.errors.post)
                    }
                  >
                    <MenuItem value={"10"}>Ten</MenuItem>
                    <MenuItem value={"20"}>Twenty</MenuItem>
                    <MenuItem value={"30"}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="Change-Footer">
            <Button
              className="Change-BtInp"
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Изменить
            </Button>
          </div>
        </form>
      </div>
    );
  };

export default Change
