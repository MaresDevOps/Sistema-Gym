# 💪 Sistema Gym - Titanes

Bienvenido al repositorio oficial del **Sistema Gym**, un software robusto e integral diseñado para la administración y control total de un gimnasio moderno. Este proyecto fue pensado, diseñado y creado por **Mares**, con el propósito de ofrecer una solución rápida, segura y altamente escalable para automatizar tareas rutinarias de los centros deportivos.

El sistema te permite mantener un registro limpio de clientes, monitorear el flujo de personas en el gimnasio, visualizar estadísticas financieras de forma gráfica y simplificar enormemente las tareas administrativas del día a día. Todo ello integrado en un panel (Dashboard) amigable, oscuro e intuitivo con excelentes tiempos de respuesta.

---

## 🛠️ Tecnologías Utilizadas

El proyecto fue construido bajo un modelo tradicional utilizando tecnologías sólidas y probadas:
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS y llamadas asíncronas con Fetch API).
- **Librerías UI/UX:** Bootstrap 4/5 para un diseño responsivo, jQuery, DataTables para un manejo dinámico de las tablas, SweetAlert2 para alertas interactivas y Chart.js para las gráficas financieras.
- **Backend:** PHP puro (procesamiento de peticiones AJAX y generación de APIs RESTful).
- **Base de Datos:** MySQL.

---

## 🚀 Características Principales

* **Control de Miembros:** Agrega, edita y elimina clientes del gimnasio con un clic. Control de datos personales y subida de fotografías de perfil.
* **Control de Membresías:** Asigna membresías con duraciones predefinidas. El sistema calcula de forma inteligente cuándo vence la membresía, cambiando el estado visual a "Vencido" o "Activo".
* **Registro de Visitas (Drop-in):** Opción rápida para añadir y registrar clientes que únicamente pagan el acceso por día, controlando directamente el ingreso monetario.
* **Dashboard y Reportes:** Gráficos estadísticos dinámicos para medir el impacto y crecimiento monetario de tu negocio, permitiendo filtrar ganancias por fechas.
* **Exportación de Datos:** Botones de acción integrados para exportar reportes en Excel, PDF o para mandar a impresión directa.
* **Seguridad (Auth):** Autenticación encriptada con MD5 para contraseñas de administradores. Validación de sesión en el frontend vía `localStorage`.

---

## ⚙️ Instalación y Configuración

Para correr este proyecto en tu entorno local (XAMPP, WAMP, o LAMP):

1. **Clona este repositorio** en la carpeta de tu servidor local (ej. `htdocs`).
   ```bash
   git clone https://github.com/MaresDevOps/Sistema-Gym.git
   ```

2. **Base de Datos:**
   - Abre `phpMyAdmin` (o tu gestor de base de datos preferido).
   - Crea una base de datos llamada `gym`.
   - Importa el archivo estructurado **`gym.sql`** que viene adjunto en la raíz de este proyecto.

3. **Credenciales de Acceso:**
   Para ingresar al panel de administración una vez levantado el servidor local, utiliza las siguientes credenciales maestras:
   - **Usuario (Email):** `Admin`
   - **Contraseña:** `Mares1411.`

---

## ⚠️ Notas de Desarrollo y Problemas Conocidos (Bugs)

Actualmente, el software cuenta con una sólida base estructural, pero al estar en constante desarrollo, presenta ciertos detalles técnicos que requieren ajustes manuales:

- **Problemas de Direccionamiento y Enrutamiento (URLs):**
  A lo largo del código (específicamente en algunos archivos HTML dentro de la carpeta `Views` y algunas redirecciones de JavaScript), existen errores en la forma en que están estructuradas las URL relativas. Por ejemplo, etiquetas como `<a href="./agregarV.html">` o llamadas a archivos `../index.html` pueden presentar conflictos o mandar un error `404 Not Found` dependiendo de desde qué nivel de navegación sean invocadas. Para que funcione todo en tu entorno, puede ser necesario limpiar las rutas para que se alineen perfectamente con la jerarquía de las carpetas.

---

*Diseñado y Desarrollado por **Mares** © 2024.*
