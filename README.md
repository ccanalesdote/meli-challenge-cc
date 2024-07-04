# Challenge Meli: Buscador de Productos (Frontend)

Este proyecto es una solución al challenge de Mercado Libre, implementado como un frontend en React. El buscador permite buscar productos de un catálogo simulado, listarlos y ver su detalle.

El proyecto consta de dos repositorios:

- [Frontend@Challenge Meli](https://github.com/ccanalesdote/meli-challenge-cc) desarrollado en React + Typescript
- [Backend@Challenge Meli](https://github.com/ccanalesdote/meli-challenge-backend-cc) desarrollado con Node y Express

## Tecnologías Utilizadas

Algunas de las tecnologías solo están implementadas de forma minima a modo de muestra

- **React:** Biblioteca principal para construir la interfaz de usuario.
- **TypeScript:** Superset de JavaScript que añade tipado estático para mejorar la calidad del código.
- **Vite:** Herramienta de construcción rápida y eficiente para proyectos web modernos.
- **Axios:** Cliente HTTP para realizar peticiones al backend.
- **Vitest:** Framework de pruebas unitarias y de componentes para React.
- **Redux:** Patrón de gestión de estado para manejar datos de la aplicación de forma centralizada.

## Requisitos Previos

- **Node.js y npm:** Asegúrate de tener instalados Node.js y un gestor de paquetes como npm.

- **Backend en ejecución:** Este frontend depende del backend para funcionar correctamente. Debes clonar y ejecutar el backend desde el siguiente enlace: [meli-challenge-backend-cc](https://github.com/ccanalesdote/meli-challenge-backend-cc)

## Instalación y Uso

1. Clona el repositorio:

```bash
git clone https://github.com/ccanalesdote/meli-challenge-cc.git
cd tu-repositorio
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Si lo deseas puedes ejecutar las pruebas:

```bash
npm test
```

## Funcionalidad

El buscador te permite encontrar productos dentro del siguiente catálogo:

- Smartphone Samsung Galaxy S10
- Smartphone Samsung Galaxy S10 Lite
- Smartphone Samsung Galaxy S20
- Televisor LG 43 pulgadas
- Televisor LG 43 pulgadas 4K
- Apple iPod Touch 5g 32gb Azul
- Apple iPod Touch 5g 32gb Rosa (Caja Abierta)
- Apple iPod Touch 32gb Verde
- Apple iPod Touch 4g 32gb Plata

Simplemente escribe el nombre del producto o parte de él en la barra de búsqueda y los resultados se actualizarán automáticamente.

## Estructura del Proyecto

```
src/
├── interceptors/      # Interceptores para Axios (manejo de errores, etc.)
├── models/            # Definiciones de tipos de datos y interfaces
├── presentation/      # Lógica de presentación (componentes visuales)
│   └── components/    # Componentes reutilizables (botones, inputs, etc.)
│   │   ├── atoms/     # Componentes reutilizables con enfoque atómico
│   │   └── pages/     # Páginas principales de la aplicación
│   └── layout/        # Estructura del template
├── redux/             # Configuración de Redux (slices, reducers, etc.)
├── services/          # Lógica de comunicación con el backend (peticiones Axios)
├── utils/             # Funciones de utilidad generales
├── App.tsx            # Componente principal de la aplicación
├── index.tsx          # Punto de entrada del proyecto
├── ...                # Otros archivos de configuración (vite.config.ts, etc.)
```

## Scripts Disponibles

- **npm run dev:** Inicia el servidor de desarrollo.
- **npm run build:** Compila el proyecto para producción.
- **npm run preview:** Previsualiza la compilación de producción localmente.
- **npm test:** Ejecuta las pruebas.

## Licencia

Este proyecto está bajo la Licencia MIT.
