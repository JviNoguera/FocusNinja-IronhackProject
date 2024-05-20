<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-left">
        <nav class="footer-nav">
          <ul>
            <li><a href="/auth">Sign in</a></li>
            <li><a href="/aboutus">About us</a></li>
            <li><a href="/contactus">Contact us</a></li>
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
          <RouterLink class="social-icon" to='/:pathMatch(.*)*'>Facebook</RouterLink>
          <RouterLink class="social-icon" to='/:pathMatch(.*)*'>Twitter</RouterLink>
          <RouterLink class="social-icon" to='/:pathMatch(.*)*'>Instagram</RouterLink>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="legal-left">
        <a href="/privacy">Privacy Policy</a>
      </div>
      <p class="copyright">© 2024 Ninja Tasker Inc. All rights reserved.</p>
      <div class="legal-right">
        <a href="/termsofuse">Terms of Use</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>


.site-footer {
  width: 100vw;
  height: 100px;
  background-color: var(bg-color);
  padding: 15px;
  padding-bottom: 5px;
  text-align: center;
  font-size: smaller;
  box-shadow: var(--regular-box-shadow);
  
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
  color: var(--text-color);
}

.social-icon:hover {
  color: var(--text-color);
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
  color: var(--text-color);
}

.legal-links a:hover {
  color: var(--text-color);
}

.copyright {
  margin-top: 10px;
  font-size: 12px;
}
</style>
