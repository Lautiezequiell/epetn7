# 🌐 Sitio Web Oficial - EPET N°7

Repositorio oficial del sitio web del colegio **EPET N°7 de Jardín América, Misiones, Argentina**.  
El proyecto está desplegado en **Netlify**:  
👉 [https://epetn7.netlify.app](https://epetn7.netlify.app)

---

## 📁 Estructura del Proyecto

El sitio está desarrollado utilizando **HTML**, **CSS**, **JavaScript** y **React (con Vite)**.  
La estructura general es la siguiente:

```

epetn7/
│
├── public/              # Imágenes, íconos y otros archivos estáticos
│   ├── images/          # Carpeta donde se guardan las imágenes del sitio
│   └── favicon.ico
│
├── src/
│   ├── assets/          # Archivos multimedia o gráficos adicionales
│   ├── components/      # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── pages/           # Secciones principales (Inicio, Inscripciones, Aula Virtual, ExpoEPET, etc.)
│   ├── App.jsx          # Estructura base del sitio
│   ├── main.jsx         # Punto de entrada de la aplicación
│   └── styles/          # Archivos CSS globales o por componente
│
├── package.json         # Dependencias y scripts del proyecto
└── vite.config.js       # Configuración de Vite

````

---

## 🧩 Cómo editar el contenido del sitio

### 📝 1. Editar textos

1. Abre el archivo correspondiente en la carpeta `src/pages/`.
2. Busca el texto que quieras modificar dentro del componente.  
   Ejemplo:
   ```jsx
   <h1>Bienvenidos a la EPET N°7</h1>

3. Edita el texto directamente:
````
   jsx
   <h1>Bienvenidos al sitio oficial de la EPET N°7</h1>
   
4. Guarda los cambios y ejecuta el sitio para previsualizar:

   bash
   npm run dev
````   

---

### 🖼️ 2. Añadir o cambiar imágenes

1. Coloca la nueva imagen en la carpeta:
````
   
   public/images/
 ````  

   o en `src/assets/` (según cómo esté importada en tu código).
2. Asegúrate de usar un nombre corto y sin espacios, por ejemplo:
   `taller-mecanica.jpg`
3. Actualiza la ruta de la imagen en el archivo correspondiente:
````
   jsx
   <img src="/images/taller-mecanica.jpg" alt="Taller de Mecánica" />
   ````
4. Si la imagen se importa desde `src/assets`, usa:
````
   jsx
   <img src={taller} alt="Taller de Mecánica" />
 ````  

---

### 🔗 3. Cambiar o agregar enlaces (URLs)

1. Busca el componente o página donde se encuentra el enlace (por ejemplo, el Navbar o el Footer).
2. Edita la propiedad `href` o `to` del enlace:
````
   jsx
   <a href="https://aulavirtual.epetn7.edu.ar" target="_blank">
     Aula Virtual
   </a>
   ````

   o, si usas **React Router**:
````
   jsx
   <Link to="/inscripciones">Inscripciones</Link>
   ````
3. Guarda y prueba el enlace en el navegador.

---

### 🎨 4. Cambiar colores, tipografía o estilos

1. Ve al archivo de estilos global (`src/styles/` o `App.css`).
2. Modifica las variables o clases CSS.
````
   css
   :root {
     --color-primario: #004aad;
     --color-secundario: #f0f0f0;
     --fuente-principal: 'Poppins', sans-serif;
   }
  ```` 
3. Puedes agregar o ajustar animaciones usando CSS o librerías como **Framer Motion**.

---

### 📦 5. Instalar dependencias

Si descargas o clonas el proyecto por primera vez:
````
bash
git clone https://github.com/Lautiezequiell/epetn7.git
cd epetn7
npm install

````
Luego puedes ejecutar el proyecto localmente:
````
bash
npm run dev
````

El sitio estará disponible en:
👉 [http://localhost:5173](http://localhost:5173)

---

### ☁️ 6. Despliegue en Netlify

El proyecto se actualiza automáticamente cuando haces **push** al repositorio en GitHub.

Pasos para actualizar el sitio en producción:

1. Realiza tus cambios.
2. Guarda y haz commit:
````
   bash
   git add .
   git commit -m "Actualización de imágenes/textos"
   git push
  ```` 
3. Netlify detectará los cambios y reconstruirá el sitio automáticamente.

---

## 👨‍💻 Créditos

Desarrollado por **@lautiezequiell**, alumno de la EPET N°7.
Proyecto educativo de difusión institucional y técnica.

---

## 🧠 Tecnologías utilizadas

* ⚛️  React + Vite 
* 💅  CSS / Tailwind (según configuración) 
* 🌐  Netlify  (hosting y despliegue continuo)
* 🧰  JavaScript (ES6+) 

---

## 📫 Contacto

📍 EPET N°7 - Jardín América, Misiones, Argentina
🌎 [https://epetn7.netlify.app](https://epetn7.netlify.app)
📧 Contacto institucional: *epetn7@gmail.com*
