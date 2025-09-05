// app/api/auth/[...nextauth]/route.ts

import { handlers } from "@/lib/auth/auth";

// Exportar las funciones GET y POST
// GET = para mostrar páginas de login
// POST = para procesar el login
export const { GET, POST } = handlers;
