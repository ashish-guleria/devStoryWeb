export const validate1 = (data) => {

    let nameError = "",
        emailError = "",
        phoneNumberError = "",
        aboutappError = "",
        phoneFormat = /^\d{10}$/,
        emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!data.state.email.match(emailFormat)) {
        emailError = "invalid email";
    }
    if (!data.state.name) {
        nameError = "please enter your name"
    }
    if (!data.state.aboutapp) {
        aboutappError = "please select any"
    }
    if (!data.state.phoneNumber.match(phoneFormat)) {
        phoneNumberError = "please enter a valid mobile number"
    }
    if (emailError || nameError || aboutappError || phoneNumberError) {
        data.setState({ emailError, nameError, aboutappError, phoneNumberError })
        console.log("data")
        return false
    }
    return true

}
