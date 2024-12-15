# 🗺️ Red Atlas Frontend Challenge

Este proyecto es una aplicación desarrollada con **ReactJS** y **Vite** como parte del desafío de Frontend para **Red Atlas**. Su propósito es visualizar propiedades inmobiliarias en un mapa interactivo, gestionar datos a través de formularios y proporcionar una experiencia de usuario fluida y moderna.

Podés ver el proyecto en acción [acá](https://sdenicolas-red-atlas-challenge.vercel.app/).

## 🚀 Tecnologías utilizadas

Este proyecto utiliza tecnologías modernas para optimizar la experiencia de desarrollo y la funcionalidad del usuario:

- **React Query**: Para gestionar el estado de datos remotos y sincronizar con la API.
- **Axios**: Cliente HTTP para interactuar con el back-end.
- **React Router**: Para la navegación y gestión de rutas.
- **Tailwind CSS**: Sistema de estilos basado en utilidades para un diseño rápido y receptivo.
- **React Hook Form**: Manejo eficiente de formularios.
- **Zod**: Validación de datos para garantizar consistencia en entradas del usuario.
- **Mapbox**: Servicio de mapas interactivos para visualizar las propiedades.
- **Vite**: Herramienta rápida para desarrollo y construcción de aplicaciones.

## 🌟 Características principales

- **Mapa interactivo**: Uso de **Mapbox** para mostrar propiedades en ubicaciones específicas.
- **Gestión de propiedades**: Listar, crear, editar y visualizar propiedades mediante formularios dinámicos.
- **Filtrado y paginación**: Componentes intuitivos para explorar propiedades con criterios personalizados.
- **Diseño modular**: Arquitectura organizada en componentes, layouts y contextos.

## 🛠️ Requisitos previos

Antes de iniciar, asegurate de tener las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org/): Entorno de ejecución de JavaScript.
- [Bun](https://bun.sh/) o [PNPM](https://pnpm.io/): Administradores de paquetes recomendados.
- [Git](https://git-scm.com/): Para clonar el repositorio.
- **Token de Mapbox**: Necesario para habilitar los mapas interactivos. Podés obtener uno [acá](https://account.mapbox.com/).

## 🧑‍💻 Instalación y configuración

1. **Clonar el repositorio**:
   En tu terminal, ejecuta:

   ```bash
   git clone https://github.com/santi28/mid-frontend-challenge.git
   ```

2. **Instalar dependencias**:
   Ingresa al directorio del proyecto y ejecuta:

   ```bash
   bun install
   # o
   pnpm install
   ```

3. **Configurar Mapbox**:
   Utilizando el archivo `.env.template` como plantilla, crea un archivo `.env` en la raíz del proyecto y añade tu token de Mapbox y la URL de la API:

   ```bash
    cp .env.template .env
   ```

   ```env
     VITE_MAPBOX_TOKEN=your_mapbox_token_here
     VITE_API_URL=https://your-api-url.com
   ```

## 📦 Comandos disponibles

- **Iniciar el servidor de desarrollo**:

  ```bash
  bun dev
  # o
  pnpm dev
  ```

- **Construir para producción**:

  ```bash
  bun build
  # o
  pnpm build
  ```

- **Vista previa de producción**:
  ```bash
  bun preview
  # o
  pnpm preview
  ```

## 📂 Estructura del proyecto

El proyecto está organizado en las siguientes carpetas principales:

- **src/components**: Contiene los componentes reutilizables, organizados en subcarpetas según su funcionalidad.
- **src/contexts**: Maneja el estado global de la aplicación mediante contextos de React.
- **src/hooks**: Hooks personalizados para lógica reutilizable.
- **src/pages**: Vistas principales de la aplicación.
- **src/services**: Servicios para interactuar con las APIs.
- **src/lib**: Contiene utilidades y configuraciones comunes.
- **src/assets**: Archivos estáticos, como imágenes y datos.
