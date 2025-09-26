"use client";
import { useEffect, useState } from 'react';
import type { ServiceResponse } from '@/schemas/servicesSchema';
import type { ServicesResponse } from '@/types/servicesTypes';
import { fetchServicesClient } from '@/services/client/servicesService';
import { FiRefreshCcw } from 'react-icons/fi';
import CreateServiceDialog from '@/components/admin/CreateServiceDialog';

export default function Page() {
  const [services, setServices] = useState<ServiceResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setError(null);
    setLoading(true);
    try {
      const data: ServicesResponse = await fetchServicesClient({ page: 1 });
      setServices(data.data);
    } catch (e) {
      setError('No se pudieron cargar los servicios.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Servicios</h1>
          <p className="text-gray-600">Listado desde el backend (con acceso admin).</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => void load()}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50"
          >
            <FiRefreshCcw className="size-4" />
            Refrescar
          </button>
          <CreateServiceDialog onCreated={() => void load()} />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16"><span>Cargando servicios...</span></div>
      ) : error ? (
        <div className="flex justify-center items-center py-16">
          <div className="text-center">
            <p className="text-red-600 mb-2">{error}</p>
            <button onClick={() => void load()} className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50">Reintentar</button>
          </div>
        </div>
      ) : services.length === 0 ? (
        <div className="flex justify-center items-center py-16"><span>No hay servicios.</span></div>
      ) : (
        <div className="overflow-x-auto rounded-md border">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-2">Nombre</th>
                <th className="text-left px-4 py-2">Tipo</th>
                <th className="text-left px-4 py-2">Precio</th>
                <th className="text-left px-4 py-2">Activo</th>
                <th className="text-left px-4 py-2">Actualizado</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.id} className="border-t">
                  <td className="px-4 py-2">{s.name}</td>
                  <td className="px-4 py-2">{s.type}</td>
                  <td className="px-4 py-2">${s.finalPrice.toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <span className={s.isActive ? 'text-green-600' : 'text-gray-500'}>
                      {s.isActive ? 'Sí' : 'No'}
                    </span>
                  </td>
                  <td className="px-4 py-2">{new Date(s.updatedAt ?? s.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}