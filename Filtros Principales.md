## 🎯 Filtros Principales
### 1. Tipo de Servicio (Obligatorio)
- Opciones : Todos, Individual, Combo, Pack
- UI : Botones toggle horizontales
- Comportamiento : Mutuamente excluyente
- Prioridad : Alta (filtro principal)
### 2. Género (Esencial)
- Opciones : Todos, Mujer, Hombre, Unisex
- UI : Radio buttons o toggle buttons
- Comportamiento : Mutuamente excluyente
- Prioridad : Alta
### 3. Rango de Precio (Crítico)
- Tipo : Slider con dos handles
- Formato : $0 - $200,000
- UI : Slider con 2 labels dinámicos
- Comportamiento : Rango continuo
- Prioridad : Alta
### 4. Categorías (Importante)
- Opciones : Depilación, Tratamientos Faciales, Corporales, etc. Todo vendra de un enum.
- UI : Dropdown multiselect o checkboxes
- Comportamiento : Múltiple selección
- Prioridad : Media-Alta
### 5. Partes del Cuerpo (Específico)
- Opciones : Rostro, Piernas, Brazos, Bikini, etc. Todo desde un enum.
- UI : Grid de checkboxes
- Comportamiento : Múltiple selección
- Prioridad : Media
### 6. Características Especiales (Marketing)
- Opciones : Destacados, Nuevos, Populares, En Oferta
- UI : Toggle buttons con badges
- Comportamiento : Múltiple selección
- Prioridad : Media
### 7. Duración (Funcional)
- Opciones : < 30min, 30-60min, 1-2h, > 2h
- UI : Checkboxes o select
- Comportamiento : Múltiple selección
- Prioridad : Baja-Media
### 8. Ordenamiento (Navegación)
- Opciones :
  - Precio: Menor a Mayor
  - Precio: Mayor a Menor
  - Más Populares
  - Más Recientes
- UI : Select dropdown
- Comportamiento : Mutuamente excluyente en el orden que consideres mejor ui ux
- Prioridad : Alta