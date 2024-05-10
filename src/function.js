/**
 * create validation alert
 * @param {*} msg 
 * @param {*} type 
 * @returns 
 */
const createAlert = (msg="All fields are required !", type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between"> ${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
};

/**
 * check if email is correct
 * @param {*} email 
 * @returns 
 */
const isEmail = (email) => {
    const pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{2,}\.[a-z]{2,4}$/;

    return pattern.test(email);
}


const isPhone = (phone) => {
    const pattern = /^(\+8801|8801|01)[0-9]{9,}$/;

    return pattern.test(phone);
}

