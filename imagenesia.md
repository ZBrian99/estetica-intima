# Documentación de Parámetros - API de Pollinations AI

## URL Base
```
https://image.pollinations.ai/prompt/{prompt}
```

## Parámetros Disponibles

### Parámetro Obligatorio
- **`prompt`** (string): La descripción de la imagen que quieres generar
  - Debe estar en la URL como parte del path
  - Se recomienda usar descripciones claras y específicas
  - Ejemplo: "beautiful sunset over mountains"

### Parámetros Opcionales (Query Parameters)

#### Dimensiones
- **`width`** (número): Ancho de la imagen en píxeles
  - Rango: 64-2048 píxeles
  - Por defecto: 1024
  - Ejemplo: `?width=800`

- **`height`** (número): Alto de la imagen en píxeles
  - Rango: 64-2048 píxeles
  - Por defecto: 1024
  - Ejemplo: `?height=600`

#### Control de Generación
- **`seed`** (número): Semilla para reproducibilidad
  - Rango: cualquier número entero
  - Mismo seed + mismo prompt = misma imagen
  - Sin seed = imagen aleatoria cada vez
  - Ejemplo: `?seed=12345`

- **`model`** (string): Modelo de IA a utilizar
  - Opciones disponibles:
    - `flux` (por defecto): Modelo estándar, buena calidad general
    - `flux-realism`: Especializado en imágenes realistas
    - `turbo`: Generación más rápida, menor calidad
  - Ejemplo: `?model=flux-realism`

#### Mejoras y Configuración
- **`enhance`** (boolean): Mejora automática de la imagen
  - Valores: `true` o `false`
  - Por defecto: `false`
  - Mejora la calidad y detalles automáticamente
  - Ejemplo: `?enhance=true`

- **`nologo`** (boolean): Eliminar marca de agua
  - Valores: `true` o `false`
  - Por defecto: `false`
  - Ejemplo: `?nologo=true`

- **`private`** (boolean): Generación privada
  - Valores: `true` o `false`
  - Por defecto: `false`
  - Las imágenes no aparecen en galerías públicas
  - Ejemplo: `?private=true`

## Dimensiones Recomendadas

### Formatos Estándar
- **Cuadrado**: 1024x1024 (redes sociales)
- **Paisaje**: 1344x768 (presentaciones, web)
- **Retrato**: 768x1344 (móviles, stories)
- **Banner**: 1920x1080 (headers, fondos)

### Formatos Específicos
- **Instagram Post**: 1080x1080
- **Instagram Story**: 1080x1920
- **Facebook Cover**: 1200x630
- **Twitter Header**: 1500x500

## Palabras Clave Efectivas

### Estilos Artísticos
- `photorealistic`, `hyperrealistic`
- `digital art`, `concept art`
- `oil painting`, `watercolor`
- `minimalist`, `abstract`
- `vintage`, `retro`, `modern`

### Calidad y Técnica
- `high quality`, `4K`, `8K`, `ultra detailed`
- `professional photography`
- `studio lighting`, `natural lighting`
- `sharp focus`, `depth of field`
- `cinematic`, `dramatic lighting`

### Composición
- `close-up`, `wide shot`, `aerial view`
- `centered composition`, `rule of thirds`
- `symmetrical`, `asymmetrical`
- `foreground`, `background`, `bokeh`

### Colores y Ambiente
- `warm colors`, `cool colors`, `monochrome`
- `vibrant`, `muted`, `pastel`
- `golden hour`, `blue hour`, `sunset`
- `moody`, `bright`, `dark`, `atmospheric`

### Para Servicios Estéticos (Específico)
- `clean`, `professional`, `medical`, `spa-like`
- `natural skin`, `healthy skin`, `glowing skin`
- `relaxing`, `luxurious`, `modern clinic`
- `before and after`, `treatment result`
- `gentle`, `non-invasive`, `safe procedure`

## Estructura de Prompt Efectiva

### Formato Recomendado
```
[Sujeto principal] + [Acción/Estado] + [Estilo] + [Calidad] + [Iluminación] + [Composición]
```

### Ejemplo para Estética
```
"woman receiving laser hair removal treatment, professional medical spa, realistic photography, high quality, soft lighting, clean composition"
```

## Consejos para Mejores Resultados

### Prompts Efectivos
- Sé específico pero conciso
- Usa comas para separar conceptos
- Incluye el estilo deseado
- Especifica la calidad
- Menciona la iluminación

### Evitar
- Prompts demasiado largos (>200 caracteres)
- Contradicciones ("dark bright image")
- Términos muy técnicos sin contexto
- Múltiples estilos conflictivos

### Optimización
- Usa `flux-realism` para imágenes realistas
- Combina `enhance=true` con seeds fijos
- Prueba diferentes seeds para variaciones
- Ajusta dimensiones según el uso final
        