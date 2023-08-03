'use strict';

const newFechaUTC = dias => {
 let fecha = new Date();
 fecha.setTime(fecha.getTime() + dias * 1000 * 60 * 60 * 24)
 return fecha.toUTCString();
}

const buyCookie = (name, dias) => {
 let expires = newFechaUTC(dias);
 document.cookie = `${name};expires=${expires}`;
}

const buscarCookie = cookieName => {
 let cookies = document.cookie;
 cookies = cookies.split(';');
 for (let i = 0; i < cookies.length; i++) {
  let cookie = cookies[i].trim();
  if (cookie.startsWith(cookieName)) {
   return cookie.split("=")[1];
  }
 }
 return 'no existe esa cookie';
};

addEventListener('load', () => {
 const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
 const botonDenegarCookies = document.getElementById('btn-denear-cookies');
 const avisoCookies = document.getElementById('aviso-cookies');
 const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');
 if (buscarCookie('accetedCookie') !== 'yes') {
  avisoCookies.classList.add('activo');
  fondoAvisoCookies.classList.add('activo');
  botonAceptarCookies.addEventListener('click', () => {
   avisoCookies.classList.remove('activo');
   fondoAvisoCookies.classList.remove('activo');
   buyCookie('accetedCookie=yes', 31);
  });
  botonDenegarCookies.addEventListener('click', () => {
   avisoCookies.classList.remove('activo');
   fondoAvisoCookies.classList.remove('activo');
   buyCookie('accetedCookie=no', 31);
  });
 }
})





