<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <nav class="footer-nav">
          <ul>
            <li><RouterLink to="/auth">Sign In</RouterLink></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <!-- Otros enlaces de navegación -->
          </ul>
        </nav>
      </div>
      <div class="footer-center">
        <div class="contact-info">
          <p>e-mail: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: Example street, Barcelona</p>
        </div>
      </div>
      <div class="footer-right">
        <div class="social-links">
          <a href="#" class="social-icon">Facebook</a>
          <a href="#" class="social-icon">Twitter</a>
          <a href="#" class="social-icon">Instagram</a>
          <!-- Otros enlaces a redes sociales -->
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="legal-left">
        <a href="#">Privacy Policy</a>
      </div>
      <p class="copyright">© 2024 Ninja Tasker Inc. All rights reserved.</p>
      <div class="legal-right">
        <a href="#">Terms of Use</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.site-footer {
  width: 100vw;
  background-color: var(--secondary-bg-color);
  padding: 15px;
  text-align: center;
  font-size: smaller;
  height: 10vh;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left, .footer-center, .footer-right {
  flex: 1;
  text-align: center;
}

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
}

.footer-nav ul {
  list-style-type: none;
  padding: 0;
}

.footer-nav ul li {
  display: inline-block;
  margin-right: 10px;
}

.social-icon {
  display: inline-block;
  margin-right: 10px;
  text-decoration: none;
  color: #333;
}

.social-icon:hover {
  color: #007bff;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.legal-left, 
.legal-right {
  flex: 1;
  text-align: center;
}

.legal-links a {
  text-decoration: none;
  color: #333;
}

.legal-links a:hover {
  color: #007bff;
}

.copyright {
  margin-top: 10px;
  font-size: 12px;
}
</style>
