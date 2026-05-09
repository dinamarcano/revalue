# 🌱 Revalue

Revalue es una plataforma interactiva enfocada en incentivar el reciclaje mediante campañas, recompensas y máquinas inteligentes de reciclaje.

La aplicación permite que marcas o aliados creen campañas sostenibles conectadas a máquinas de reciclaje ubicadas en diferentes puntos de la ciudad, incentivando a los usuarios a reciclar botellas a cambio de beneficios, descuentos o puntos.

✨ Funcionalidades actuales
🔐 Inicio de sesión y registro de usuarios
👤 Perfil editable para aliados/marcas
🏢 Gestión de información de empresa y ubicación
♻️ Administración de máquinas de reciclaje
➕ Crear nuevas máquinas
✏️ Editar y eliminar máquinas
📍 Visualización de máquinas en mapa interactivo
🎯 Creación de campañas sostenibles
🖼️ Subida de imágenes para campañas
🎨 Personalización de colores de campañas
🔄 Activar o desactivar campañas
💾 Persistencia de datos usando LocalStorage

# 🧠 Estructura del Proyecto (Scaffolding)

```bash
Revalue/
├── public/                    # Recursos públicos e imágenes
│
├── src/
│   ├── assets/                # Recursos gráficos y multimedia
│   ├── components/            # Componentes reutilizables
│   ├── context/               # Context API y manejo global de estado
│   ├── hooks/                 # Custom hooks reutilizables
│   ├── lib/                   # Configuración de librerías externas
│   ├── pages/                 # Pantallas principales de la aplicación
│   ├── providers/             # Providers globales
│   ├── services/              # Manejo de datos y lógica externa
│   ├── styles/                # Estilos globales y configuraciones
│   ├── types/                 # Tipados y definiciones TypeScript
│   ├── utils/                 # Funciones auxiliares
│   ├── App.tsx                # Configuración de rutas
│   ├── main.tsx               # Punto de entrada principal
│   └── index.css              # Estilos globales
│
├── .env.example               # Variables de entorno de ejemplo
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── vite.config.ts

✍️ Convención de Commits

Para mantener un historial limpio y organizado, usamos la siguiente convención:

Tipo	Descripción
FEAT	Nuevas funcionalidades
FIX	Corrección de errores
STYLE	Cambios visuales o de estilos
REFACTOR	Mejoras internas del código
DOCS	Cambios en documentación
TEST	Pruebas o testing
CHORE	Configuración o mantenimiento
CREATE COMPONENT	Creación de componentes nuevos
