# 📝 Todo List - Aplicación React con Vite

Una aplicación de lista de tareas (Todo List) desarrollada con React y Vite, que permite gestionar tareas de manera interactiva con funcionalidades CRUD completas.

## 🚀 Tecnologías Utilizadas

- **React 19.1.0** - Biblioteca de JavaScript para crear interfaces de usuario
- **Vite 7.0.4** - Herramienta de construcción rápida para desarrollo frontend
- **UUID 11.1.0** - Generación de identificadores únicos
- **Bootstrap 5.3.6** - Framework CSS para estilos y componentes
- **ESLint** - Linter para mantener calidad del código

## 📁 Estructura del Proyecto

```
Examen3ReactVite/
├── 📄 package.json              # Configuración del proyecto y dependencias
├── 📄 index.html                # Página HTML principal
├── 📄 vite.config.js            # Configuración de Vite
├── 📄 eslint.config.js          # Configuración de ESLint
├── 📄 README.md                 # Documentación del proyecto
├── 📁 public/                   # Archivos estáticos públicos
│   └── 📄 vite.svg             # Logo de Vite
└── 📁 src/                      # Código fuente de la aplicación
    ├── 📄 main.jsx              # Punto de entrada de la aplicación
    ├── 📄 App.jsx               # Componente principal
    ├── 📄 App.css               # Estilos del componente App
    ├── 📄 index.css             # Estilos globales
    ├── 📄 todolist.jsx          # Componente principal de la lista de tareas
    ├── 📄 TodoItem.jsx          # Componente individual de cada tarea
    └── 📁 assets/               # Recursos estáticos
        └── 📄 react.svg         # Logo de React
```

## 📄 Descripción de Archivos y Carpetas

### 🗂️ Archivos de Configuración (Raíz)

- **`package.json`**: Contiene la configuración del proyecto, dependencias, scripts de npm y metadatos del proyecto.
- **`index.html`**: Archivo HTML principal que sirve como punto de entrada. Incluye Bootstrap CDN y el contenedor raíz para React.
- **`vite.config.js`**: Configuración de Vite para el proceso de construcción y desarrollo.
- **`eslint.config.js`**: Configuración de ESLint para mantener estándares de código.

### 📁 Carpeta `public/`

Contiene archivos estáticos que se sirven directamente:
- **`vite.svg`**: Logo de Vite utilizado en la interfaz.

### 📁 Carpeta `src/`

Contiene todo el código fuente de la aplicación React:

#### 🔧 Archivos de Configuración y Estilos
- **`main.jsx`**: Punto de entrada de React, donde se monta la aplicación en el DOM.
- **`App.jsx`**: Componente raíz de la aplicación que renderiza el componente TodoList.
- **`App.css`**: Estilos específicos para el componente App.
- **`index.css`**: Estilos globales de la aplicación.

#### 📝 Componentes de la Aplicación
- **`todolist.jsx`**: Componente principal que gestiona:
  - Estado de la lista de tareas usando `useState`
  - Funciones para agregar, completar y eliminar tareas
  - Componente local `ResumenTareas` para mostrar estadísticas
  - Interfaz de usuario con formulario y lista de tareas

- **`TodoItem.jsx`**: Componente individual para cada tarea que incluye:
  - Checkbox para marcar como completada/pendiente
  - Visualización del texto de la tarea
  - Manejo de eventos para cambiar estado

#### 🎨 Carpeta `assets/`
- **`react.svg`**: Logo de React utilizado en la interfaz.

## ⚙️ Funcionalidades de la Aplicación

### 🔄 Gestión de Tareas (CRUD)
- **Crear**: Agregar nuevas tareas mediante un campo de entrada
- **Leer**: Visualizar todas las tareas en una lista
- **Actualizar**: Marcar tareas como completadas/pendientes
- **Eliminar**: Eliminar todas las tareas completadas

### 📊 Características Adicionales
- **Contador de tareas pendientes**: Muestra cuántas tareas faltan por completar
- **Resumen inteligente**: Mensajes dinámicos según el estado de las tareas
- **Interfaz responsiva**: Utiliza Bootstrap para un diseño adaptable
- **Generación de IDs únicos**: Cada tarea tiene un identificador único usando UUID

## 🛠️ Scripts Disponibles

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 🌐 Cómo Ejecutar el Proyecto

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   - URL: `http://localhost:5173/`

## 🎯 Estado del Proyecto

- ✅ Funcionalidades CRUD completas
- ✅ Componentes modulares y reutilizables
- ✅ Gestión de estado con React Hooks
- ✅ Interfaz de usuario responsive con Bootstrap
- ✅ Código limpio con ESLint

---

**Desarrollado con ❤️ usando React + Vite**
