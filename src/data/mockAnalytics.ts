// Datos simulados (hardcodeados) para el dashboard de e-commerce de estética
// Texto visible en español, nombres de variables y tipos en inglés.

export type RevenuePoint = {
  month: string;
  revenue: number; // ingresos en ARS
  orders: number;
};

export type CategorySales = {
  category: string;
  sold: number; // cantidad de servicios vendidos
  revenue: number; // ingresos ARS por categoría
};

export type GenderBookings = {
  gender: 'Femenino' | 'Masculino' | 'Unisex';
  value: number; // porcentaje o cantidad relativa
};

export type PromoUsage = {
  label: string;
  used: number; // veces aplicada
  conversions: number; // reservas concretadas desde promo
};

export type AvgTicketPoint = {
  month: string;
  average: number; // ticket promedio ARS
  target: number; // objetivo ARS
};

export const revenueByMonth: RevenuePoint[] = [
  { month: 'Ene', revenue: 1850000, orders: 210 },
  { month: 'Feb', revenue: 1620000, orders: 190 },
  { month: 'Mar', revenue: 2015000, orders: 230 },
  { month: 'Abr', revenue: 2230000, orders: 248 },
  { month: 'May', revenue: 2175000, orders: 242 },
  { month: 'Jun', revenue: 2380000, orders: 261 },
];

export const categorySales: CategorySales[] = [
  { category: 'Facial', sold: 320, revenue: 960000 },
  { category: 'Corporal', sold: 210, revenue: 840000 },
  { category: 'Depilación', sold: 410, revenue: 1230000 },
  { category: 'Uñas', sold: 180, revenue: 360000 },
  { category: 'Spa', sold: 125, revenue: 625000 },
];

export const bookingsByGender: GenderBookings[] = [
  { gender: 'Femenino', value: 68 },
  { gender: 'Masculino', value: 22 },
  { gender: 'Unisex', value: 10 },
];

export const promoUsage: PromoUsage[] = [
  { label: '2x1 Marzo', used: 86, conversions: 54 },
  { label: '10% Banco', used: 120, conversions: 77 },
  { label: 'Pack 5 Ses.', used: 42, conversions: 35 },
  { label: 'Bienvenida', used: 58, conversions: 31 },
];

export const avgTicketByMonth: AvgTicketPoint[] = [
  { month: 'Ene', average: 8800, target: 9000 },
  { month: 'Feb', average: 9100, target: 9200 },
  { month: 'Mar', average: 9500, target: 9500 },
  { month: 'Abr', average: 9800, target: 9800 },
  { month: 'May', average: 9700, target: 10000 },
  { month: 'Jun', average: 10200, target: 10200 },
];