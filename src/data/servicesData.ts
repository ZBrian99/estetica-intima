import { GenderType } from "@/schemas/servicesSchema";

// Tipos para los datos de servicios
export interface BaseServiceData {
  name: string;
  price: number;
  bodyParts: string[];
  duration: number;
  gender?: GenderType;
  imageUrl: string;
}

export interface ComboServiceData {
  name: string;
  price: number;
  includedServices: string[];
  gender?: GenderType;
  imageUrl: string;
}

export interface PackServiceData {
  name: string;
  price: number;
  sessions: number;
  includedServices: string[];
  gender?: GenderType;
  imageUrl: string;
}

// SERVICIOS INDIVIDUALES FEMENINOS
export const INDIVIDUAL_SERVICES_FEMALE: BaseServiceData[] = [
  // Depilación facial
  { name: 'Axila', price: 6500, bodyParts: ['axilas'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20underarm%20laser%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Bozo', price: 6000, bodyParts: ['rostro'], duration: 20, imageUrl: 'https://image.pollinations.ai/prompt/professional%20facial%20hair%20removal%20upper%20lip%20treatment%2C%20clean%20medical%20spa%20environment%2C%20gentle%20laser%20procedure%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Mentón', price: 6000, bodyParts: ['rostro'], duration: 20, imageUrl: 'https://image.pollinations.ai/prompt/professional%20chin%20hair%20removal%20treatment%2C%20facial%20laser%20procedure%2C%20clean%20medical%20spa%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Rostro Completo', price: 15000, bodyParts: ['rostro'], duration: 60, imageUrl: 'https://image.pollinations.ai/prompt/professional%20complete%20facial%20hair%20removal%20treatment%2C%20full%20face%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Patilla', price: 6000, bodyParts: ['rostro'], duration: 15, imageUrl: 'https://image.pollinations.ai/prompt/professional%20sideburn%20hair%20removal%20treatment%2C%20facial%20laser%20procedure%2C%20clean%20medical%20spa%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Depilación íntima
  { name: 'Cavado Completo', price: 9000, bodyParts: ['intimo'], duration: 45, imageUrl: 'https://image.pollinations.ai/prompt/professional%20hair%20removal%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Cavado Bikini', price: 8000, bodyParts: ['intimo'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20hair%20removal%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Tira de Cola', price: 6000, bodyParts: ['intimo'], duration: 20, imageUrl: 'https://image.pollinations.ai/prompt/professional%20hair%20removal%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Labios Cavado', price: 6000, bodyParts: ['intimo'], duration: 15, imageUrl: 'https://image.pollinations.ai/prompt/professional%20intimate%20area%20laser%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Depilación piernas
  { name: 'Pierna Alta', price: 10000, bodyParts: ['piernas'], duration: 45, imageUrl: 'https://image.pollinations.ai/prompt/professional%20upper%20leg%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pierna Baja', price: 10000, bodyParts: ['piernas'], duration: 45, imageUrl: 'https://image.pollinations.ai/prompt/professional%20lower%20leg%20laser%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pierna Completa', price: 15000, bodyParts: ['piernas'], duration: 90, imageUrl: 'https://image.pollinations.ai/prompt/professional%20complete%20leg%20laser%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Rodilla', price: 6000, bodyParts: ['piernas'], duration: 15, imageUrl: 'https://image.pollinations.ai/prompt/professional%20knee%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Depilación brazos y manos
  { name: 'Brazo Completo', price: 9000, bodyParts: ['brazos'], duration: 60, imageUrl: 'https://image.pollinations.ai/prompt/professional%20complete%20arm%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Medio Brazo', price: 8000, bodyParts: ['brazos'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20forearm%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Mano', price: 6000, bodyParts: ['manos'], duration: 15, imageUrl: 'https://image.pollinations.ai/prompt/professional%20hand%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Depilación cuerpo
  { name: 'Cuello', price: 6000, bodyParts: ['cuello'], duration: 20, imageUrl: 'https://image.pollinations.ai/prompt/professional%20neck%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Espalda Superior', price: 7500, bodyParts: ['espalda'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20upper%20back%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Espalda Completa', price: 14000, bodyParts: ['espalda'], duration: 60, imageUrl: 'https://image.pollinations.ai/prompt/professional%20complete%20back%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Cintura', price: 7500, bodyParts: ['abdomen'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20waistline%20laser%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Abdomen', price: 8500, bodyParts: ['abdomen'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20abdomen%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Línea Alba', price: 6000, bodyParts: ['abdomen'], duration: 15, imageUrl: 'https://image.pollinations.ai/prompt/professional%20linea%20alba%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Glúteos', price: 9000, bodyParts: ['gluteos'], duration: 45, imageUrl: 'https://image.pollinations.ai/prompt/professional%20body%20contouring%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Medio Glúteo', price: 7500, bodyParts: ['gluteos'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20body%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Areola del Busto', price: 6000, bodyParts: ['busto'], duration: 15, imageUrl: 'https://image.pollinations.ai/prompt/professional%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Depilación pies
  { name: 'Empeine', price: 6000, bodyParts: ['pies'], duration: 20, imageUrl: 'https://image.pollinations.ai/prompt/professional%20foot%20instep%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Dedos de los Pies', price: 6000, bodyParts: ['pies'], duration: 15, imageUrl: 'https://image.pollinations.ai/prompt/professional%20toe%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
];

// SERVICIOS INDIVIDUALES MASCULINOS
export const INDIVIDUAL_SERVICES_MALE: BaseServiceData[] = [
  // Depilación facial masculina
  { name: 'Barba', price: 14000, bodyParts: ['rostro'], duration: 60, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20beard%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Nuca', price: 6000, bodyParts: ['cuello'], duration: 20, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20nape%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Cuello', price: 6000, bodyParts: ['cuello'], duration: 20, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20neck%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Depilación cuerpo masculino
  { name: 'Pecho', price: 8000, bodyParts: ['pecho'], duration: 45, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20torso%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Abdomen', price: 8000, bodyParts: ['abdomen'], duration: 30, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20abdomen%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Espalda Baja', price: 7000, bodyParts: ['espalda'], duration: 30, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20lower%20back%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Espalda Alta', price: 7000, bodyParts: ['espalda'], duration: 30, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20upper%20back%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Hombros', price: 6500, bodyParts: ['hombros'], duration: 30, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20shoulders%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Depilación brazos masculino
  { name: 'Brazos Completos', price: 9000, bodyParts: ['brazos'], duration: 60, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20arms%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Medio Brazo', price: 7000, bodyParts: ['brazos'], duration: 30, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20forearm%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Axilas', price: 6500, bodyParts: ['axilas'], duration: 30, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20underarm%20laser%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Manos', price: 6000, bodyParts: ['manos'], duration: 15, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20hands%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Depilación íntima masculina
  { name: 'Cavado Completo', price: 10000, bodyParts: ['intimo'], duration: 45, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20hair%20removal%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Tira', price: 6000, bodyParts: ['intimo'], duration: 20, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20hair%20removal%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pelvis', price: 7000, bodyParts: ['intimo'], duration: 30, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20pelvis%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Glúteos', price: 9500, bodyParts: ['gluteos'], duration: 45, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20body%20contouring%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Depilación piernas masculino
  { name: 'Pierna Entera', price: 15000, bodyParts: ['piernas'], duration: 90, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20leg%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Media Pierna', price: 9000, bodyParts: ['piernas'], duration: 45, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20lower%20leg%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Depilación pies masculino
  { name: 'Empeine - Dedos del pie', price: 6000, bodyParts: ['pies'], duration: 20, gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20foot%20instep%20toe%20hair%20removal%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
];

// COMBOS FEMENINOS
export const COMBO_SERVICES_FEMALE: ComboServiceData[] = [
  { name: 'Combo Pierna Entera + Cavado + Tira + Axilas', price: 21000, includedServices: ['Pierna Completa', 'Cavado Completo', 'Tira de Cola', 'Axila'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20female%20complete%20legs%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Pierna + Cavado + Tira + Axilas + Bozo', price: 22500, includedServices: ['Pierna Completa', 'Cavado Completo', 'Tira de Cola', 'Axila', 'Bozo'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20female%20complete%20legs%20facial%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Media Pierna + Cavado + Tira + Axilas', price: 20000, includedServices: ['Pierna Baja', 'Cavado Completo', 'Tira de Cola', 'Axila'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20female%20lower%20legs%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Media Pierna + Cavado + Tira + Axilas + Bozo', price: 21000, includedServices: ['Pierna Baja', 'Cavado Completo', 'Tira de Cola', 'Axila', 'Bozo'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20female%20lower%20legs%20facial%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Cavado + Tira + Axila', price: 17000, includedServices: ['Cavado Completo', 'Tira de Cola', 'Axila'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20laser%20treatment%20combo%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Pierna + Cavado + Tira', price: 19500, includedServices: ['Pierna Completa', 'Cavado Completo', 'Tira de Cola'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20female%20complete%20legs%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Pierna + Axilas', price: 19500, includedServices: ['Pierna Completa', 'Axila'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20female%20complete%20legs%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Media Pierna + Axilas', price: 18000, includedServices: ['Pierna Baja', 'Axila'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20female%20lower%20legs%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Media Pierna + Cavado + Tira', price: 19500, includedServices: ['Pierna Baja', 'Cavado Completo', 'Tira de Cola'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20female%20lower%20legs%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Bozo + Mentón', price: 12000, includedServices: ['Bozo', 'Mentón'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20female%20upper%20lip%20chin%20facial%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Axila + Bozo', price: 14000, includedServices: ['Axila', 'Bozo'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20female%20underarm%20upper%20lip%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
];

// COMBOS MASCULINOS
export const COMBO_SERVICES_MALE: ComboServiceData[] = [
  { name: 'Combo Pecho + Abdomen', price: 13000, includedServices: ['Pecho', 'Abdomen'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20torso%20abdomen%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Espalda Completa', price: 13000, includedServices: ['Espalda Alta', 'Espalda Baja'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20back%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Boxer Completo', price: 16500, includedServices: ['Cavado Completo', 'Tira', 'Glúteos'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20boxer%20hair%20removal%20combo%20treatment%2C%20clean%20medical%20spa%20environment%2C%20modern%20laser%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Pecho + Espalda Completa', price: 17500, includedServices: ['Pecho', 'Espalda Alta', 'Espalda Baja'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20torso%20complete%20back%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Espalda Completa + Pecho + Abdomen + Hombros + Axilas', price: 27500, includedServices: ['Espalda Alta', 'Espalda Baja', 'Pecho', 'Abdomen', 'Hombros', 'Axilas'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20upper%20body%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Espalda Completa + Hombros', price: 17500, includedServices: ['Espalda Alta', 'Espalda Baja', 'Hombros'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20back%20shoulders%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Piernas + Cavado + Tira', price: 19000, includedServices: ['Pierna Entera', 'Cavado Completo', 'Tira'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20legs%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Piernas + Pecho + Abdomen', price: 22000, includedServices: ['Pierna Entera', 'Pecho', 'Abdomen'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20legs%20torso%20abdomen%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Piernas + Pecho + Abdomen + Hombros', price: 26000, includedServices: ['Pierna Entera', 'Pecho', 'Abdomen', 'Hombros'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20legs%20torso%20abdomen%20shoulders%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Espalda Completa + Abdomen + Hombros', price: 20000, includedServices: ['Espalda Alta', 'Espalda Baja', 'Abdomen', 'Hombros'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20back%20abdomen%20shoulders%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Espalda Completa + Pecho + Hombros', price: 20000, includedServices: ['Espalda Alta', 'Espalda Baja', 'Pecho', 'Hombros'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20back%20torso%20shoulders%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Piernas + Espalda Completa', price: 22000, includedServices: ['Pierna Entera', 'Espalda Alta', 'Espalda Baja'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20legs%20back%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Piernas + Glúteos', price: 19000, includedServices: ['Pierna Entera', 'Glúteos'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20legs%20glutes%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Piernas + Glúteos + Cavado', price: 25000, includedServices: ['Pierna Entera', 'Glúteos', 'Cavado Completo'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20legs%20glutes%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Piernas + Espalda + Pecho + Abdomen', price: 27000, includedServices: ['Pierna Entera', 'Espalda Alta', 'Espalda Baja', 'Pecho', 'Abdomen'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20body%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Piernas + Espalda + Pecho + Abdomen + Cavado', price: 30000, includedServices: ['Pierna Entera', 'Espalda Alta', 'Espalda Baja', 'Pecho', 'Abdomen', 'Cavado Completo'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20body%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Piernas + Glúteos + Cavado + Espalda Baja', price: 28000, includedServices: ['Pierna Entera', 'Glúteos', 'Cavado Completo', 'Espalda Baja'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20legss%20glutes%20lower%20back%20har%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Piernas + Cavado + Axilas + Glúteos', price: 28000, includedServices: ['Pierna Entera', 'Cavado Completo', 'Axilas', 'Glúteos'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20legs%20underarm%20glutes%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Espalda Completa + Axilas + Cuello', price: 23000, includedServices: ['Espalda Alta', 'Espalda Baja', 'Axilas', 'Cuello'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20back%20underarm%20neck%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Brazos + Axilas', price: 15000, includedServices: ['Brazos Completos', 'Axilas'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20arms%20underarm%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Barba + Cuello', price: 13000, includedServices: ['Barba', 'Cuello'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20beard%20neck%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Barba + Cuello + Nuca', price: 18000, includedServices: ['Barba', 'Cuello', 'Nuca'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20beard%20neck%20nape%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Pecho + Abdomen + Pelvis', price: 19000, includedServices: ['Pecho', 'Abdomen', 'Pelvis'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20torso%20abdomen%20pelvis%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Full Cuerpo Completo', price: 158000, includedServices: ['Pecho', 'Abdomen', 'Cintura', 'Espalda Alta', 'Axilas', 'Hombros', 'Brazos Completos', 'Pierna Entera', 'Cavado Completo', 'Tira', 'Glúteos', 'Empeine - Dedos del pie'], gender: 'MALE', imageUrl: 'https://image.pollinations.ai/prompt/professional%20male%20complete%20full%20body%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Premium Depilación Completa Femenina', price: 145000, includedServices: ['Pierna Completa', 'Cavado Completo', 'Tira de Cola', 'Axila', 'Bozo', 'Rostro Completo', 'Brazo Completo', 'Espalda Completa'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20female%20premium%20complete%20hair%20removal%20combo%20treatment%2C%20laser%20procedure%2C%20clean%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
];

// TRATAMIENTOS CORPORALES
export const BODY_TREATMENTS: BaseServiceData[] = [
  // Maderoterapia
  { name: 'Maderoterapia', price: 21000, bodyParts: ['abdomen', 'gluteos', 'piernas'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20wood%20therapy%20maderoterapia%20treatment%2C%20aesthetic%20clinic%20environment%2C%20wooden%20tools%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Maderoterapia + Presoterapia', price: 26500, bodyParts: ['abdomen', 'gluteos', 'piernas'], duration: 80, imageUrl: 'https://image.pollinations.ai/prompt/professional%20wood%20therapy%20pressotherapy%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Mio Up
  { name: 'Mio Up 1 Zona', price: 10800, bodyParts: ['abdomen'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20mio%20up%20muscle%20stimulation%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Mio Up 2 Zonas', price: 20500, bodyParts: ['abdomen', 'gluteos'], duration: 45, imageUrl: 'https://image.pollinations.ai/prompt/professional%20mio%20up%20dual%20zone%20muscle%20stimulation%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Alpha Synergy
  { name: 'Alpha Synergy 1 Zona', price: 15000, bodyParts: ['abdomen'], duration: 20, imageUrl: 'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20body%20contori%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Alpha Synergy 2 Zonas', price: 25000, bodyParts: ['abdomen', 'gluteos'], duration: 40, imageUrl: 'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20dual%20zone%20body%20contourin%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Vacuum Therapy
  { name: 'Vacuum Therapy Glúteos', price: 10000, bodyParts: ['gluteos'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20vacuum%20therapy%20glutes%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Combos corporales
  { name: 'Mio Up + Maderoterapia', price: 26000, bodyParts: ['abdomen', 'gluteos'], duration: 60, imageUrl: 'https://image.pollinations.ai/prompt/professional%20mio%20up%20wood%20therapy%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Madero + Alpha Synergy', price: 26500, bodyParts: ['abdomen', 'gluteos'], duration: 60, imageUrl: 'https://image.pollinations.ai/prompt/professional%20wood%20therapy%20alpha%20synergy%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Alpha + Mio Up', price: 24000, bodyParts: ['abdomen', 'gluteos'], duration: 50, imageUrl: 'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20mio%20up%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Vacuum + Mio Up', price: 15000, bodyParts: ['gluteos'], duration: 60, imageUrl: 'https://image.pollinations.ai/prompt/professional%20vacuum%20therapy%20mio%20up%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Combo Glúteos Completo', price: 38000, bodyParts: ['gluteos'], duration: 90, imageUrl: 'https://image.pollinations.ai/prompt/professional%20body%20contouring%20combo%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipmen%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Tratamiento Corporal VIP Completo', price: 125000, bodyParts: ['abdomen', 'gluteos', 'piernas', 'espalda'], duration: 150, imageUrl: 'https://image.pollinations.ai/prompt/luxury%20VIP%20wellness%20treatment%2C%20premium%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
];

// TRATAMIENTOS FACIALES
export const FACIAL_TREATMENTS: BaseServiceData[] = [
  { name: 'Limpieza Facial Profunda', price: 25000, bodyParts: ['rostro'], duration: 60, imageUrl: 'https://image.pollinations.ai/prompt/professional%20deep%20facial%20cleansing%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Alpha Facial', price: 25500, bodyParts: ['rostro', 'cuello'], duration: 60, imageUrl: 'https://image.pollinations.ai/prompt/professional%20alpha%20facial%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Peeling Químico', price: 30000, bodyParts: ['rostro'], duration: 45, imageUrl: 'https://image.pollinations.ai/prompt/professional%20chemical%20peeling%20facial%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Dermaplaning', price: 25000, bodyParts: ['rostro'], duration: 45, imageUrl: 'https://image.pollinations.ai/prompt/professional%20dermaplaning%20facial%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Microblading', price: 140000, bodyParts: ['rostro'], duration: 120, imageUrl: 'https://image.pollinations.ai/prompt/professional%20microblading%20eyebrow%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Dermopigmentación Labial', price: 130000, bodyParts: ['rostro'], duration: 90, imageUrl: 'https://image.pollinations.ai/prompt/professional%20lip%20dermopigmentation%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Tratamiento Facial Premium Anti-Edad', price: 125000, bodyParts: ['rostro', 'cuello'], duration: 90, imageUrl: 'https://image.pollinations.ai/prompt/professional%20premium%20anti%20aging%20facial%20treatment%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
];

// MASAJES
export const MASSAGE_SERVICES: BaseServiceData[] = [
  { name: 'Masaje Descontracturante 50min', price: 28500, bodyParts: ['espalda', 'cuello'], duration: 50, imageUrl: 'https://image.pollinations.ai/prompt/professional%20therapeutic%20massage%20treatment%2C%20relaxing%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Masaje Descontracturante 30min', price: 22500, bodyParts: ['espalda', 'cuello'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20short%20therapeutic%20massage%20treatment%2C%20relaxing%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Masaje Deportivo', price: 24500, bodyParts: ['piernas', 'brazos'], duration: 30, imageUrl: 'https://image.pollinations.ai/prompt/professional%20sports%20massage%20treatment%2C%20athletic%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Piedras Calientes', price: 32500, bodyParts: ['espalda', 'piernas'], duration: 50, imageUrl: 'https://image.pollinations.ai/prompt/professional%20hot%20stone%20massage%20treatment%2C%20relaxing%20spa%20environment%2C%20heated%20stones%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Reflexología', price: 28500, bodyParts: ['pies'], duration: 50, imageUrl: 'https://image.pollinations.ai/prompt/professional%20reflexology%20foot%20massage%20treatment%2C%20relaxing%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Drenaje Linfático', price: 32500, bodyParts: ['piernas', 'abdomen'], duration: 60, imageUrl: 'https://image.pollinations.ai/prompt/professional%20lymphatic%20drainage%20massage%20treatment%2C%20therapeutic%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
];

// OTROS SERVICIOS
export const OTHER_SERVICES: BaseServiceData[] = [
  { name: 'Bronceado Natural', price: 27000, bodyParts: ['cuerpo'], duration: 45, imageUrl: 'https://image.pollinations.ai/prompt/professional%20natural%20tanning%20treatment%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
];

// PACKS DE TRATAMIENTOS
export const PACK_SERVICES: PackServiceData[] = [
  // Packs Maderoterapia
  { name: 'Pack 4 Maderoterapia', price: 79000, sessions: 4, includedServices: ['Maderoterapia'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20maderoterapia%20wood%20therapy%20package%2C%20aesthetic%20clinic%20environment%2C%20wooden%20tools%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 4 Maderoterapia + Presoterapia', price: 98000, sessions: 4, includedServices: ['Maderoterapia + Presoterapia'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20maderoterapia%20and%20pressotherapy%20package%2C%20aesthetic%20clinic%20environment%2C%20wooden%20tools%20and%20pressure%20equipment%2C%20modern%20spa%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Packs Mio Up
  { name: 'Pack 4 Mio Up 1 Zona', price: 40000, sessions: 4, includedServices: ['Mio Up 1 Zona'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20mio%20up%20muscle%20stimulation%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 4 Mio Up 2 Zonas', price: 78000, sessions: 4, includedServices: ['Mio Up 2 Zonas'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20mio%20up%20muscle%20stimulation%20two%20zones%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Packs Alpha Synergy
  { name: 'Pack 4 Alpha Synergy 1 Zona', price: 57000, sessions: 4, includedServices: ['Alpha Synergy 1 Zona'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20radiofreuec%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 4 Alpha Synergy 2 Zonas', price: 89000, sessions: 4, includedServices: ['Alpha Synergy 2 Zonas'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20radiofrequency%20two%20zones%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Packs Vacuum
  { name: 'Pack 4 Vacuum Glúteos', price: 38000, sessions: 4, includedServices: ['Vacuum Therapy Glúteos'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20vacuum%20therapy%20glutes%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Packs Combos
  { name: 'Pack 4 Vacuum + Mio Up', price: 56000, sessions: 4, includedServices: ['Vacuum + Mio Up'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20vacuum%20therapy%20and%20mio%20up%20combo%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 4 Madero + Alpha', price: 99000, sessions: 4, includedServices: ['Madero + Alpha Synergy'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20maderoterapia%20and%20alpha%20synergy%20combo%20package%2C%20aesthetic%20clinic%20environment%2C%20wooden%20tools%20and%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 4 Alpha + Mio Up', price: 89000, sessions: 4, includedServices: ['Alpha + Mio Up'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20alpha%20synergy%20and%20mio%20up%20combo%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 4 Mio Up + Maderoterapia', price: 96000, sessions: 4, includedServices: ['Mio Up + Maderoterapia'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20mio%20up%20and%20maderoterapia%20combo%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20and%20wooden%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 4 Combo Glúteos', price: 140000, sessions: 4, includedServices: ['Combo Glúteos Completo'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20glutes%20complete%20combo%20package%2C%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 6 Tratamiento Corporal Premium', price: 185000, sessions: 6, includedServices: ['Maderoterapia + Presoterapia', 'Alpha Synergy 2 Zonas'], imageUrl: 'https://image.pollinations.ai/prompt/premium%20wellness%20treatment%20package%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 8 Depilación Completa Premium', price: 220000, sessions: 8, includedServices: ['Combo Premium Depilación Completa Femenina'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20premium%20complete%20hair%20removal%20package%2C%20laser%20procedure%2C%20luxury%20medical%20spa%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  
  // Packs Faciales
  { name: 'Pack 4 Alpha Facial', price: 95000, sessions: 4, includedServices: ['Alpha Facial'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20alpha%20facial%20radiofrequency%20package%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 6 Peeling Químico', price: 170000, sessions: 6, includedServices: ['Peeling Químico'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20chemical%20peeling%20package%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 4 Microblading + Retoque', price: 195000, sessions: 4, includedServices: ['Microblading'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20microblading%20eyebrows%20package%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
  { name: 'Pack 10 Tratamiento Facial Anti-Edad Premium', price: 350000, sessions: 10, includedServices: ['Tratamiento Facial Premium Anti-Edad'], imageUrl: 'https://image.pollinations.ai/prompt/professional%20premium%20anti%20aging%20facial%20treatment%20package%2C%20luxury%20aesthetic%20clinic%20environment%2C%20modern%20equipment%2C%20soft%20lighting%2C%20professional%20photography%2C%20high%20quality?width=1024&height=1024&model=flux-realism&enhance=true&nologo=true&private=true' },
];

// CATEGORÍAS EXPANDIDAS
export const CATEGORIES = [
  'depilacion',
  'tratamientos-corporales',
  'maderoterapia',
  'mio-up',
  'alpha-synergy',
  'vacuum-therapy',
  'tratamientos-faciales',
  'limpieza-facial',
  'peeling',
  'microblading',
  'dermopigmentacion',
  'masajes',
  'bronceado',
  'estetica-integral'
];

// PARTES DEL CUERPO EXPANDIDAS
export const BODY_PARTS = [
  'rostro',
  'cuello',
  'hombros',
  'axilas',
  'brazos',
  'manos',
  'pecho',
  'busto',
  'abdomen',
  'espalda',
  'gluteos',
  'intimo',
  'piernas',
  'pies',
  'cuerpo-completo'
];

// TAGS EXPANDIDOS
export const TAGS = [
  'popular',
  'nuevo',
  'promocion',
  'verano',
  'invierno',
  'destacado',
  'oferta',
  'combo',
  'pack',
  'descuento',
  'limitado',
  'exclusivo',
  'recomendado',
  'tendencia',
  'premium',
  'express',
  'intensivo',
  'relajante',
  'anti-edad',
  'rejuvenecedor'
];

// OPCIONES DE ORDENAMIENTO
export const SORT_OPTIONS = [
  { value: 'price-asc', label: 'Precio: Menor a Mayor' },
  { value: 'price-desc', label: 'Precio: Mayor a Menor' },
  { value: 'createdAt-desc', label: 'Más Recientes' },
  { value: 'order-asc', label: 'Más Populares' },
  { value: 'name-asc', label: 'Nombre: A-Z' },
  { value: 'name-desc', label: 'Nombre: Z-A' },
  { value: 'duration-asc', label: 'Duración: Menor a Mayor' },
  { value: 'duration-desc', label: 'Duración: Mayor a Menor' }
];

// OPCIONES DE GÉNERO
export const GENDER_OPTIONS = [
  { value: 'FEMALE', label: 'Mujer' },
  { value: 'MALE', label: 'Hombre' },
  { value: 'UNISEX', label: 'Unisex' },
] as const;

// FUNCIÓN PARA OBTENER TODOS LOS SERVICIOS INDIVIDUALES
export function getAllIndividualServices(): BaseServiceData[] {
  return [
    ...INDIVIDUAL_SERVICES_FEMALE,
    ...INDIVIDUAL_SERVICES_MALE,
    ...BODY_TREATMENTS,
    ...FACIAL_TREATMENTS,
    ...MASSAGE_SERVICES,
    ...OTHER_SERVICES
  ];
}

// FUNCIÓN PARA OBTENER TODOS LOS COMBOS
export function getAllComboServices(): ComboServiceData[] {
  return [
    ...COMBO_SERVICES_FEMALE,
    ...COMBO_SERVICES_MALE
  ];
}

// FUNCIÓN PARA OBTENER TODOS LOS PACKS
export function getAllPackServices(): PackServiceData[] {
  return PACK_SERVICES;
}

// FUNCIÓN PARA OBTENER SERVICIOS POR GÉNERO
export function getServicesByGender(gender: GenderType): BaseServiceData[] {
  const allServices = getAllIndividualServices();
  return allServices.filter(service => 
    !service.gender || service.gender === gender || service.gender === 'UNISEX'
  );
}

// FUNCIÓN PARA OBTENER SERVICIOS POR CATEGORÍA
export function getServicesByCategory(category: string): BaseServiceData[] {
  const allServices = getAllIndividualServices();
  
  switch (category) {
    case 'depilacion':
    case 'depilacion-femenina':
      return INDIVIDUAL_SERVICES_FEMALE;
    case 'depilacion-masculina':
      return INDIVIDUAL_SERVICES_MALE;
    case 'tratamientos-corporales':
      return BODY_TREATMENTS;
    case 'tratamientos-faciales':
      return FACIAL_TREATMENTS;
    case 'masajes':
      return MASSAGE_SERVICES;
    default:
      return allServices;
  }
}