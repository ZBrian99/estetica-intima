export interface AntesDespuesItem {
  id: number;
  nombre: string;
  descripcion: string;
  fecha: string;
  sesiones: string;
  profesional: string;
  imagenAntes: string;
  imagenDespues: string;
  categoria: string;
  resultados: string[];
}

export const tratamientosData: AntesDespuesItem[] = [
  {
    id: 1,
    nombre: 'Depilación Láser Piernas',
    descripcion:
      'Depilación definitiva con láser de diodo en piernas completas. Resultados visibles desde la primera sesión.',
    fecha: 'Marzo 2025',
    sesiones: '6 sesiones',
    profesional: 'Dra. Erica',
    imagenAntes:
      'https://image.pollinations.ai/prompt/woman%20legs%20with%20hair%20before%20laser%20treatment%20professional%20medical%20spa%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
    imagenDespues:
      'https://image.pollinations.ai/prompt/woman%20smooth%20hairless%20legs%20after%20laser%20treatment%20professional%20result%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
    categoria: 'Depilación Definitiva',
    resultados: ['Piel suave y uniforme', 'Reducción notable del vello', 'Sin irritación']
  },
  {
    id: 2,
    nombre: 'Tratamiento Facial Rejuvenecedor',
    descripcion: 'Tratamiento con radiofrecuencia y plasma rico en plaquetas para rejuvenecer la piel del rostro.',
    fecha: 'Febrero 2025',
    sesiones: '4 sesiones',
    profesional: 'Juli',
    imagenAntes:
      'https://image.pollinations.ai/prompt/woman%20face%20with%20wrinkles%20aging%20skin%20before%20facial%20rejuvenation%20treatment%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
    imagenDespues:
      'https://image.pollinations.ai/prompt/woman%20youthful%20smooth%20face%20after%20rejuvenation%20treatment%20glowing%20skin%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
    categoria: 'Rejuvenecimiento Facial',
    resultados: ['Mejora de textura', 'Piel más luminosa', 'Menos líneas finas']
  },
  {
    id: 3,
    nombre: 'Limpieza Facial Profunda',
    descripcion: 'Limpieza facial con microdermoabrasión y punta de diamante. Piel renovada y luminosa.',
    fecha: 'Abril 2025',
    sesiones: '1 sesión',
    profesional: 'Dani',
    imagenAntes:
      'https://image.pollinations.ai/prompt/woman%20face%20with%20acne%20blackheads%20before%20facial%20treatment%20professional%20spa%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
    imagenDespues:
      'https://image.pollinations.ai/prompt/woman%20clear%20glowing%20skin%20face%20after%20facial%20treatment%20professional%20result%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
    categoria: 'Belleza Total',
    resultados: ['Poros más limpios', 'Reducción de comedones', 'Piel más pareja']
  },
  {
    id: 4,
    nombre: 'Microblading Cejas',
    descripcion: 'Maquillaje semipermanente para cejas con técnica de microblading. Cejas perfectamente definidas.',
    fecha: 'Enero 2025',
    sesiones: '2 sesiones',
    profesional: 'Erica',
    imagenAntes:
      'https://image.pollinations.ai/prompt/woman%20sparse%20thin%20eyebrows%20before%20microblading%20treatment%20professional%20spa%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
    imagenDespues:
      'https://image.pollinations.ai/prompt/woman%20perfect%20defined%20eyebrows%20after%20microblading%20treatment%20professional%20result%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
    categoria: 'Belleza Total',
    resultados: ['Cejas definidas', 'Acabado natural', 'Resultado duradero']
  },
  {
    id: 5,
    nombre: 'Lifting de Pestañas',
    descripcion: 'Tratamiento de lifting y tinte de pestañas para una mirada más intensa y definida.',
    fecha: 'Enero 2025',
    sesiones: '1 sesión',
    profesional: 'Ana',
    imagenAntes:
      'https://image.pollinations.ai/prompt/close-up-woman-eyes-straight-short-eyelashes-before-lash-lift-treatment-realistic-photography?width=400&height=400&seed=505',
    imagenDespues:
      'https://image.pollinations.ai/prompt/close-up-woman-eyes-long-curved-lifted-eyelashes-after-lash-lift-treatment-realistic-photography?width=400&height=400&seed=505',
    categoria: 'Belleza Facial',
    resultados: ['Curva definida', 'Mirada más abierta', 'Sin necesidad de máscara']
  },
  {
    id: 7,
    nombre: 'Hidratación Facial Profunda',
    descripcion: 'Tratamiento intensivo de hidratación con ácido hialurónico para rostro luminoso.',
    fecha: 'Febrero 2025',
    sesiones: '3 sesiones',
    profesional: 'Dani',
    imagenAntes:
      'https://image.pollinations.ai/prompt/rostro-femenino-piel-seca-deshidratada-opaca-antes-hidratacion-facial?width=400&height=400&seed=70',
    imagenDespues:
      'https://image.pollinations.ai/prompt/rostro-femenino-piel-hidratada-luminosa-radiante-despues-tratamiento-acido-hialuronico?width=400&height=400&seed=70',
    categoria: 'Belleza Facial',
    resultados: ['Piel hidratada', 'Efecto glow', 'Menor resequedad']
  },
  {
    id: 8,
    nombre: 'Microblading Cejas',
    descripcion: 'Micropigmentación de cejas con técnica pelo a pelo para un resultado natural.',
    fecha: 'Marzo 2025',
    sesiones: '1 sesión',
    profesional: 'Juli',
    imagenAntes:
      'https://image.pollinations.ai/prompt/mujer-con-cejas-despobladas-sin-maquillaje-rostro-natural-antes-microblading?width=400&height=400&seed=80',
    imagenDespues:
      'https://image.pollinations.ai/prompt/mujer-con-cejas-perfectas-microblading-definidas-naturales-despues-tratamiento?width=400&height=400&seed=80',
    categoria: 'Belleza Facial',
    resultados: ['Cejas simétricas', 'Pelo a pelo natural', 'Baja mantención']
  },
  {
    id: 6,
    nombre: 'Depilación Masculina Espalda',
    descripcion: 'Depilación láser definitiva en espalda completa. Resultados duraderos y piel suave.',
    fecha: 'Marzo 2025',
    sesiones: '5 sesiones',
    profesional: 'Dani',
    imagenAntes:
      'https://image.pollinations.ai/prompt/man%20back%20with%20hair%20before%20laser%20treatment%20professional%20medical%20spa%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
    imagenDespues:
      'https://image.pollinations.ai/prompt/man%20smooth%20hairless%20back%20after%20laser%20treatment%20professional%20result%20realistic%20photography?width=800&height=600&model=flux-realism&enhance=true&nologo=true',
    categoria: 'Depilación Definitiva',
    resultados: ['Eliminación del vello', 'Menos foliculitis', 'Resultados duraderos']
  }
];