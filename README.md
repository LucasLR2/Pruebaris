# Pruebaris v1.1

**Aplicación web educativa de preguntas y respuestas sobre programación**

[![Pruebaris Login](resources/README.png)](https://lucaslr2.github.io/Pruebaris/)

**[Acceder a Pruebaris](https://lucaslr2.github.io/Pruebaris/)**

---

## Descripción

Pruebaris es un juego interactivo diseñado para aprender y practicar conceptos de programación a través de preguntas de opción múltiple. Ofrece una experiencia gamificada con dos modos de juego distintos y un completo sistema de logros para motivar el aprendizaje continuo.

---

## Características Principales

### Sistema de Perfiles
- Creación de cuenta con avatar personalizable
- Guardado local mediante LocalStorage
- Exportación e importación de perfiles en formato JSON

### Modos de Juego

**Modo Normal**
- 70 preguntas cuidadosamente seleccionadas
- 1 punto por respuesta correcta
- Sin penalización por errores
- Ideal para aprendizaje progresivo

**Modo Infinito**
- Preguntas aleatorias sin límite
- Puntuación variable (1-3 puntos según dificultad)
- Penalización por respuestas incorrectas
- Desafío continuo para usuarios avanzados

### Sistema de Progresión
- 10 logros desbloqueables
- Estadísticas detalladas de rendimiento
- Seguimiento de partidas jugadas
- Registro de puntos acumulados y precisión

---

## Contenido Educativo

El banco de preguntas abarca los siguientes temas fundamentales de programación:

- **Programación Orientada a Objetos (POO)** - Conceptos de clases, herencia, polimorfismo y encapsulación
- **Estructuras de Datos** - Arrays, listas enlazadas, pilas, colas y árboles
- **Bases de Datos y SQL** - Consultas, normalización y gestión de datos
- **Redes y Protocolos** - TCP/IP, HTTP, DNS y arquitectura de redes
- **Hardware y Arquitectura** - Componentes de computadores y organización de sistemas

---

## Estructura del Proyecto

```
Pruebaris/
│
├── index.html              # Pantalla de login y creación de cuentas
├── pruebaris.html          # Interfaz principal del juego
├── README.md               # Documentación del proyecto
│
├── css/
│   └── styles.css          # Estilos globales con variables CSS
│
├── js/
│   └── game.js             # Lógica del juego y sistema de preguntas
│
└── resources/
    ├── Login.png           # Imagen de fondo
    ├── Logo-sf.png         # Logo del proyecto
    └── README.png          # Captura para documentación
```

---

## Instalación y Uso

### Acceso Directo

**Prueba la aplicación en línea:** [https://lucaslr2.github.io/Pruebaris/](https://lucaslr2.github.io/Pruebaris/)

### Instalación Local

1. **Descarga el proyecto**
   ```bash
   git clone [URL-del-repositorio]
   cd pruebaris
   ```

2. **Ejecuta la aplicación**
   - Abre `index.html` en tu navegador web preferido
   - No requiere instalación de dependencias ni servidor

3. **Crea tu perfil**
   - Ingresa un nombre de usuario
   - Selecciona tu avatar favorito
   - Tu perfil se guardará automáticamente

4. **Carga un perfil existente**
   - Arrastra y suelta tu archivo JSON
   - O haz clic para seleccionarlo manualmente

5. **Comienza a jugar**
   - Elige entre Modo Normal o Modo Infinito
   - Responde las preguntas y desbloquea logros

---

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica y moderna
- **CSS3** - Variables CSS, Flexbox, Grid y diseño responsive
- **JavaScript Vanilla** - Sin frameworks externos
- **LocalStorage API** - Persistencia de datos del navegador
- **Dicebear API** - Generación de avatares personalizables
- **Glassmorphism** - Efectos visuales modernos con backdrop-filter

---

## Notas de Versión

### v1.1 - Versión Actual

**Mejoras de Diseño**
- Interfaz de login rediseñada con efectos glassmorphism
- Sistema de carga de archivos con drag & drop integrado
- Selector de avatares circular con scroll horizontal optimizado
- Experiencia de usuario mejorada y más fluida

**Optimizaciones**
- Eliminación de elementos redundantes en la UI
- Mejora en la disposición de elementos
- Ajustes de espaciado y padding

### v1.0 - Versión Inicial

**Funcionalidades Implementadas**
- Sistema completo de gestión de perfiles
- 70 preguntas sobre conceptos fundamentales de programación
- Dos modos de juego con mecánicas distintas
- Sistema de logros y estadísticas detalladas
- Interfaz responsive con tema oscuro y efectos glass
- Drag & drop para carga de perfiles

**Diseño**
- UI moderna con efectos de glassmorphism
- Experiencia de usuario fluida y atractiva
- Selector de avatares circular con scroll horizontal
- Animaciones y transiciones suaves

---

## Limitaciones Conocidas

- Los datos se almacenan únicamente en LocalStorage del navegador
- Limpiar caché o datos del navegador eliminará el progreso
- Se recomienda exportar el perfil regularmente como respaldo
- No incluye funcionalidad multijugador
- No incluye tabla de clasificación global

---

## Recomendaciones de Uso

- **Exporta tu perfil regularmente** para evitar pérdida de datos
- **Modo Normal** recomendado para principiantes
- **Modo Infinito** recomendado para practicar y mejorar precisión
- Compatible con navegadores modernos (Chrome, Firefox, Edge, Safari)

---

## Compatibilidad

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Navegadores móviles modernos

---

## Créditos

**Desarrollo:** Proyecto desarrollado mediante Inteligencia Artificial con personalización manual

**Porcentaje de desarrollo asistido por IA:** ~90%

**Personalización manual:** Ajustes de diseño, UX y optimizaciones específicas

---

## Licencia

Este proyecto es de código abierto y está disponible para fines educativos.

---

**Versión:** 1.1  
**Última actualización:** 2024  
**Demo en vivo:** [https://lucaslr2.github.io/Pruebaris/](https://lucaslr2.github.io/Pruebaris/)