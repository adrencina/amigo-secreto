# 🎁 Amigo Secreto

Aplicación web simple desarrollada como parte de un desafío de programación.  
Permite a los usuarios ingresar nombres en una lista y realizar un sorteo aleatorio para descubrir quién será el **amigo secreto**.

---

## 🚀 Funcionalidades

- Agregar nombres mediante un campo de texto.
- Validación de entrada:
  - No permite campos vacíos.
  - Elimina espacios en blanco iniciales/finales.
  - Acepta únicamente letras (incluyendo acentos).
  - Rechaza nombres muy cortos (mínimo 2 caracteres).
  - Evita duplicados.
  - Capitaliza automáticamente el nombre.
- Visualizar la lista de amigos ingresados.
- Sortear aleatoriamente un amigo de la lista.
- Mostrar el resultado en pantalla.

---

## 🛠️ Tecnologías utilizadas

- **HTML5**
- **CSS3 (Flexbox, Variables CSS, Responsive básico)**
- **JavaScript (ES6)**

---

## 📂 Estructura del proyecto

amigo-secreto/

│── index.html # Estructura principal

│── style.css # Estilos de la aplicación

│── app.js # Lógica en JavaScript

└── assets/ # Imágenes e íconos

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:

git clone https://github.com/adrencina/amigo-secreto.git

2. Entrar en la carpeta:

cd amigo-secreto

3. Abrir el archivo index.html en tu navegador preferido.
   (No requiere instalación de dependencias)

⚡ Posibles mejoras futuras:

- Mejorar diseño responsive en dispositivos móviles.

- Agregar la opción de eliminar amigos de la lista.

- Persistir los datos en LocalStorage para no perderlos al refrescar la página.

- Crear una versión con backend para sorteos grupales en línea.

👤 Autor:

Adrián Encina
