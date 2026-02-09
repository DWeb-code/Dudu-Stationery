// Footer component
function createFooter(currentPage) {
    const footerHTML = `
<footer class="footer bg-secondary text-dark py-14 mt-16">
  <div class="footer-container max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10 border-b border-light-gray pb-10">
    <!-- Contatti cartoon -->
    <div class="footer-section flex flex-col gap-3 min-w-[180px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Contatti</span>
      <span class="text-xs flex items-center"><img src="../icons/shop.svg" alt="Negozio" style="height: 22px; width: 22px; margin-right: 8px;" /> Negozio</span>
      <span class="text-xs flex items-center"><img src="../icons/calendar.svg" alt="Orari" style="height: 22px; width: 22px; margin-right: 8px;" /> Orari</span>
      <span class="text-xs flex items-center"><img src="../icons/email.svg" alt="Email" style="height: 22px; width: 22px; margin-right: 8px;" /> Email</span>
      <span class="text-xs flex items-center"><img src="../icons/phone.svg" alt="Telefono" style="height: 22px; width: 22px; margin-right: 8px;" /> Telefono</span>
      <span class="text-xs flex items-center"><img src="../icons/pencils.svg" alt="Creatività" style="height: 22px; width: 22px; margin-right: 8px;" /> Creatività</span>
    </div>
    <!-- Navigazione -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Navigazione</span>
      <a href="../index.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2L2 8h2v6h4v-4h2v4h4V8h2L8 2z" fill="#3B7C59"/></svg> Home</a>
      <a href="chi-siamo.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7" stroke="#E07A5F" stroke-width="2"/><path d="M8 10c2 0 3-1.5 3-3S10 4 8 4 5 5.5 5 7s1 3 3 3z" fill="#E07A5F"/></svg> Chi Siamo</a>
      <a href="novita.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="12" height="8" rx="2" fill="#6C63FF"/></svg> Novità</a>
      <a href="servizi.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v12M2 8h12" stroke="#F9C784" stroke-width="2"/></svg> Servizi</a>
      <a href="contatti.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2h12v12H2V2z" stroke="#E07A5F" stroke-width="2"/></svg> Contatti</a>
    </div>
    <!-- Legali -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Legali</span>
      <a href="../termini-servizio.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" fill="#3B7C59"/></svg> Termini e condizioni</a>
      <a href="../privacy-policy.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="7" stroke="#E07A5F" stroke-width="2"/></svg> Privacy Policy</a>
      <a href="../cookie-policy.html" class="hover:text-accent flex items-center"><svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="12" height="12" rx="2" fill="#F9C784"/></svg> Cookie Policy</a>
    </div>
    <!-- Social -->
    <div class="footer-section flex flex-col gap-2 min-w-[140px]">
      <span class="footer-title text-eco text-lg font-bold mb-2">Seguici</span>
      <div class="flex gap-4 mt-2">
        <a href="https://www.facebook.com/cartoleria.dudu/" target="_blank" class="text-eco hover:text-accent"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 10.073c0-5.523-4.477-10-10-10S0 4.55 0 10.073c0 4.99 3.663 9.104 8.438 9.854v-6.96H5.898v-2.894h2.54V7.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.26c-1.243 0-1.632.772-1.632 1.563v1.88h2.773l-.443 2.894h-2.33v6.96C16.337 19.177 20 15.063 20 10.073z" fill="#1877F2"/></svg></a>
        <a href="https://www.instagram.com/cartoleriadudu/" target="_blank" class="text-eco hover:text-accent"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" stroke="#DD2A7B" stroke-width="2"/><circle cx="10" cy="10" r="5" stroke="#DD2A7B" stroke-width="2"/><circle cx="15" cy="5" r="1" fill="#DD2A7B"/></svg></a>
        <a href="https://wa.me/393317393337" target="_blank" class="text-eco hover:text-accent"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" stroke="#25D366" stroke-width="2"/><path d="M7 10c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3z" fill="#25D366"/></svg></a>
      </div>
    </div>
  </div>
  <div class="footer-copyright text-center text-xs text-dark mt-8">
    © 2026 Cartoleria Dudù. Tutti i diritti riservati.
  </div>
</footer>
    `;
    return footerHTML;
}

// Function to insert footer
function insertFooter(currentPage) {
  const footerHTML = createFooter(currentPage);
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
    footerPlaceholder.style.width = '100vw';
    footerPlaceholder.style.position = 'relative';
    footerPlaceholder.style.left = '50%';
    footerPlaceholder.style.right = '50%';
    footerPlaceholder.style.marginLeft = '-50vw';
    footerPlaceholder.style.marginRight = '-50vw';
  } else {
    // Fallback: insert at the end of body
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footerHTML;
    footerContainer.style.width = '100vw';
    footerContainer.style.position = 'relative';
    footerContainer.style.left = '50%';
    footerContainer.style.right = '50%';
    footerContainer.style.marginLeft = '-50vw';
    footerContainer.style.marginRight = '-50vw';
    document.body.appendChild(footerContainer.firstElementChild);
  }
}