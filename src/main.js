const student_create_form = document.getElementById("student-create");
const msg = document.querySelector(".msg");

// now submit student create form
student_create_form.onsubmit = (e) => {
  e.preventDefault();

  // get form data
  const form_data = new FormData(e.target);
  const { name, email, phone, location, photo } = Object.fromEntries(form_data);

  // form validation
  if (!name || !email || !phone || !location || !photo) {
    msg.innerHTML = createAlert();
  } else if (!isEmail(email)) {
    msg.innerHTML = createAlert("Invalid Email Address", "warning");
  } else if (!isPhone(phone)) {
    msg.innerHTML = createAlert("Invalid Phone Number", "warning");
  } else {
    console.log(sendDataLS("teachers", {
      // obj a key and value same hole ekbar likhlei hobe
      name,
      email,
      phone,
      location,
      photo,
    }));;
    msg.innerHTML = createAlert("Student Data Created successfully", "success");

    e.target.reset();``
  }
};

