<script setup>
function resendEmail() {
  console.log('Resend Function is not implemented at the store yet!');
  alert ('Please chech your inbox and follow the instructions to verify your account!')
}

</script>

<template>
  <article class="confirmation-container">
      <section class="email-confirmation confirmation-container">
        <img src="/src/assets/Focus_Ninja-removebg-preview.png" alt="">
        <h1>Verify Your Email Address</h1>
        <p>We have sent an email to your address. Please check your inbox and follow the instructions to verify your account.</p>
        <div class="instructions">
          <h2>Didn't receive the email?</h2>
          <ul>
            <li>Check your spam or junk folder.</li>
            <li>Wait a few minutes, sometimes it can take a bit longer to arrive.</li>
            <li>If you still haven't received it, you can resend the verification email by clicking the following button:</li>
          </ul>
        </div>
        <button @click="resendEmail" class="resend-button"> Resend Confirmation
        </button>
      </section>
    </article>
  </template>
  
  <style scoped>

.confirmation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5%;
}

.email-confirmation {
  width: 500px;
  text-align: left;
  margin-top: 5%;
  background-color: var(--bg-color);
  border: none;
  box-shadow: var(--inner-items-box-shadow);
  padding: 20px;
  border-radius: 5px;
}

.email-confirmation img {
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
}

.email-confirmation h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.email-confirmation h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.email-confirmation p {
  font-size: 16px;
  padding: 10px;
  text-align: center;
}

.instructions {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.instructions ul {
  list-style: numeric;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
}

.instructions li {
  width: 60%;
  margin: 10px 0;
  font-size: 14px;
}

.resend-button {
  width: 80%;
  background-color: var(--btn-color);
  color: var(--btn-text-color);
  height: 70px;
  cursor: pointer;
  box-shadow: none;
  outline: none;
  border-style: none;
  margin-block-start: 20px;
  margin-bottom: 5px;
  border-radius: 5px;
}

.resend-button:hover {
    background-color: rgba(20, 19, 19, 0.757);
}

</style>