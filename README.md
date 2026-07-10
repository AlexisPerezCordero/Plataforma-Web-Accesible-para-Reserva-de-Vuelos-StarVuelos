# ✈️ StarVuelos – Plataforma Web Accesible para Reserva de Vuelos

## 📖 Descripción

StarVuelos es una plataforma web desarrollada para optimizar el proceso de búsqueda y reserva de vuelos mediante una interfaz moderna, segura y accesible.

El proyecto fue diseñado bajo una arquitectura **MVC (Modelo-Vista-Controlador)** utilizando **ASP.NET Core MVC** y **MySQL**, incorporando estándares internacionales de accesibilidad **WCAG 2.1 AA**, buenas prácticas de seguridad y un plan de calidad basado en la norma **ISO/IEC 25010**.

La solución permite que cualquier usuario, incluyendo personas con discapacidad visual o motriz, pueda navegar, buscar vuelos y realizar reservas de manera sencilla e inclusiva.

---

# 🎯 Objetivos del Proyecto

- Desarrollar una plataforma web para la gestión y reserva de vuelos.
- Implementar una interfaz accesible bajo el estándar WCAG 2.1 AA.
- Mejorar la experiencia del usuario mediante un diseño intuitivo.
- Gestionar usuarios, vuelos, reservas y pagos.
- Aplicar buenas prácticas de seguridad informática.
- Validar la calidad del software mediante pruebas funcionales y de aceptación.

---

# 🚀 Funcionalidades

- 👤 Registro e inicio de sesión de usuarios.
- ✈️ Búsqueda de vuelos por origen, destino y fecha.
- 📅 Reserva de vuelos.
- 💳 Gestión de pagos.
- 📄 Historial de reservas.
- 🛫 Administración de vuelos.
- 👥 Gestión de usuarios.
- 🔒 Gestión de roles y permisos.
- ♿ Navegación accesible para personas con discapacidad.

---

# 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|-------------|
| ASP.NET Core MVC | Framework Backend |
| C# | Lenguaje de programación |
| MySQL | Base de datos |
| HTML5 | Desarrollo Frontend |
| CSS3 | Diseño |
| Bootstrap | Diseño Responsive |
| JavaScript | Interactividad |
| Git | Control de versiones |
| GitHub | Repositorio del proyecto |

---

# 🏗️ Arquitectura del Sistema

El proyecto fue desarrollado utilizando el patrón de arquitectura **Modelo - Vista - Controlador (MVC)**, permitiendo separar la lógica de negocio, la presentación y el acceso a datos para facilitar el mantenimiento y la escalabilidad del sistema.

```
Usuario
    │
    ▼
ASP.NET Core MVC
    │
 ┌──┴───────────────┐
 │                  │
 ▼                  ▼
Controladores     Vistas
 │
 ▼
Modelos
 │
 ▼
MySQL
```


# 🔒 Seguridad Implementada

El sistema incorpora diversas medidas para proteger la información de los usuarios y garantizar la integridad de la plataforma.

- Autenticación de usuarios.
- Gestión de roles y permisos.
- Cifrado de contraseñas.
- Protección contra SQL Injection.
- Protección contra ataques XSS.
- Protección contra ataques CSRF.
- Uso de HTTPS.
- Registro de actividades (Logs).
- Copias de seguridad periódicas.

---

# ♿ Accesibilidad

La plataforma fue desarrollada siguiendo las recomendaciones del estándar **WCAG 2.1 Nivel AA**, incorporando:

- Navegación mediante teclado.
- Compatibilidad con lectores de pantalla.
- Uso de etiquetas ARIA.
- Contraste adecuado de colores.
- Textos alternativos en imágenes.
- Formularios accesibles.
- Diseño orientado a la inclusión digital.

---

# 🧪 Pruebas Realizadas

Para garantizar la calidad del software se realizaron:

- ✅ Pruebas Unitarias.
- ✅ Pruebas de Integración.
- ✅ Pruebas del Sistema.
- ✅ Pruebas de Usabilidad.
- ✅ Pruebas de Accesibilidad.
- ✅ Pruebas de Aceptación.

El proyecto fue evaluado siguiendo los criterios de calidad establecidos en la norma **ISO/IEC 25010**.

---

# 📊 Resultados

Durante el desarrollo del proyecto se obtuvieron los siguientes resultados:

- Plataforma completamente funcional.
- Arquitectura escalable basada en MVC.
- Cumplimiento del estándar WCAG 2.1 AA.
- Validación mediante pruebas funcionales y de aceptación.
- Integración correcta entre el backend y la base de datos MySQL.
- Mejora en la experiencia de usuario mediante una interfaz accesible.
- Aplicación de buenas prácticas de desarrollo y seguridad.

---

# 📂 Estructura del Proyecto

```
StarVuelos
│
├── Controllers
├── Models
├── Views
├── wwwroot
│   ├── css
│   ├── js
│   └── images
├── Data
├── Services
├── appsettings.json
├── Program.cs
└── README.md
```

---

# 📚 Metodología

Durante el desarrollo se aplicó la metodología ágil **Scrum**, organizando el trabajo mediante Sprints para planificar, desarrollar y validar cada funcionalidad del sistema de manera incremental.

---

# 📈 Calidad del Software

El proyecto fue desarrollado considerando estándares y buenas prácticas de ingeniería de software, incluyendo:

- ISO/IEC 25010
- WCAG 2.1 AA
- OWASP Top 10
- Arquitectura MVC
- Scrum
