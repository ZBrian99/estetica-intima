import { Navbar } from './components/Navbar';

export default function NavbarV1Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Navbar Desktop V1
          </h1>
          <p className="text-muted-foreground mb-8">
            Esta es la implementación de la navbar desktop con navigation menus organizados según las especificaciones del diseño.
          </p>
          
          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Características implementadas:</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Brand/logo moderno a la izquierda</li>
                <li>• Navigation menus con mega menus organizados</li>
                <li>• Depilación: columnas Femenina/Masculina</li>
                <li>• Corporales: tratamientos y masajes organizados</li>
                <li>• Faciales: tratamientos en una columna</li>
                <li>• Belleza: Cejas/Pestañas y Manos/Pies</li>
                <li>• Iconos de búsqueda y carrito</li>
                <li>• Animaciones smooth y hover effects</li>
              </ul>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Navegación:</h2>
              <p className="text-muted-foreground">
                Prueba los diferentes menús de navegación en la barra superior para ver los mega menus organizados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}