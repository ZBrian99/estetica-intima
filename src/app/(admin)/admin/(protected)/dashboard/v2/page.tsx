'use client';

import {
	SidebarInset,
	SidebarProvider,
	Sidebar,
	SidebarHeader,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarFooter,
	SidebarSeparator,
	SidebarTrigger,
	SidebarRail,
} from '@/components/ui/sidebar';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegendContent, ChartTooltipContent } from '@/components/ui/chart';
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	Legend,
	Line,
	LineChart,
	Pie,
	PieChart,
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { useEffect, useMemo, useState } from 'react';
import { FiHome, FiTag, FiGrid, FiLogOut, FiMoreHorizontal, FiRefreshCcw } from 'react-icons/fi';
import { BarChart3, Package, LogOut, Menu } from 'lucide-react';
import type { ServiceResponse } from '@/schemas/servicesSchema';
import type { ServicesResponse } from '@/types/servicesTypes';
import { fetchServicesClient, updateServiceClient } from '@/services/client/servicesService';
import { Button } from '@/components/ui/button';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { deleteServiceClient } from '@/services/client/servicesService';

// Nuevos datos para gráficos de ecommerce de estética
const monthlyRevenue = [
	{ month: 'Ene', revenue: 45000, goal: 50000 },
	{ month: 'Feb', revenue: 52000, goal: 50000 },
	{ month: 'Mar', revenue: 48000, goal: 50000 },
	{ month: 'Abr', revenue: 61000, goal: 55000 },
	{ month: 'May', revenue: 55000, goal: 55000 },
	{ month: 'Jun', revenue: 67000, goal: 60000 },
];

const topTreatments = [
	{ treatment: 'Limpieza Facial', bookings: 145, revenue: 87000 },
	{ treatment: 'Masaje Relajante', bookings: 98, revenue: 58800 },
	{ treatment: 'Depilación Láser', bookings: 76, revenue: 91200 },
	{ treatment: 'Tratamiento Anti-edad', bookings: 54, revenue: 81000 },
	{ treatment: 'Manicura', bookings: 132, revenue: 39600 },
];

const customerSatisfaction = [
	{ rating: '5 estrellas', count: 234, percentage: 68 },
	{ rating: '4 estrellas', count: 87, percentage: 25 },
	{ rating: '3 estrellas', count: 18, percentage: 5 },
	{ rating: '2 estrellas', count: 5, percentage: 1.5 },
	{ rating: '1 estrella', count: 2, percentage: 0.5 },
];

const appointmentTrends = [
	{ time: '09:00', appointments: 12 },
	{ time: '10:00', appointments: 18 },
	{ time: '11:00', appointments: 25 },
	{ time: '12:00', appointments: 22 },
	{ time: '13:00', appointments: 8 },
	{ time: '14:00', appointments: 15 },
	{ time: '15:00', appointments: 28 },
	{ time: '16:00', appointments: 32 },
	{ time: '17:00', appointments: 29 },
	{ time: '18:00', appointments: 24 },
	{ time: '19:00', appointments: 16 },
	{ time: '20:00', appointments: 10 },
];

const productSales = [
	{ category: 'Mujer', sales: 45, color: '#ff6b6b' },
	{ category: 'Hombre', sales: 32, color: '#4ecdc4' },
	{ category: 'Unisex', sales: 28, color: '#45b7d1' },
];

const ageDistribution = [
	{ ageGroup: '18-25', clients: 45 },
	{ ageGroup: '26-35', clients: 78 },
	{ ageGroup: '36-45', clients: 92 },
	{ ageGroup: '46-55', clients: 67 },
	{ ageGroup: '56+', clients: 34 },
];

// Simulated datasets (Spanish)
const mpMonthly = [
	{ month: 'Ene', pagos: 120 },
	{ month: 'Feb', pagos: 180 },
	{ month: 'Mar', pagos: 220 },
	{ month: 'Abr', pagos: 190 },
	{ month: 'May', pagos: 300 },
	{ month: 'Jun', pagos: 280 },
	{ month: 'Jul', pagos: 350 },
	{ month: 'Ago', pagos: 370 },
	{ month: 'Sep', pagos: 320 },
	{ month: 'Oct', pagos: 410 },
	{ month: 'Nov', pagos: 450 },
	{ month: 'Dic', pagos: 520 },
];

// Ventas por categoría (radar): Depilación, Corporales, Faciales, Pestañas & Cejas, Manos & Pies
const salesByCategory = [
	{ name: 'Depilación', ventas: 420 },
	{ name: 'Corporales', ventas: 380 },
	{ name: 'Faciales', ventas: 300 },
	{ name: 'Pestañas & Cejas', ventas: 260 },
	{ name: 'Manos & Pies', ventas: 310 },
];

// Reservas por género (pie): Hombre, Mujer, Unisex
const genderDistribution = [
	{ name: 'Mujer', value: 62 },
	{ name: 'Hombre', value: 28 },
	{ name: 'Unisex', value: 10 },
];

// Promociones (barras): clicks y visitas por promo (algunas activas)
const promoStats = [
	{ promo: '2x1 Martes', clicks: 130, visitas: 340, active: true },
	{ promo: '10% MP', clicks: 190, visitas: 410, active: true },
	{ promo: 'Pack Relax', clicks: 85, visitas: 220, active: false },
	{ promo: 'Bienvenida', clicks: 72, visitas: 180, active: false },
];

const serviceBookings = [
	{ name: 'Limpieza facial', reservas: 140 },
	{ name: 'Masaje descontracturante', reservas: 210 },
	{ name: 'Depilación definitiva', reservas: 110 },
	{ name: 'Lifting de pestañas', reservas: 90 },
	{ name: 'Radiofrecuencia', reservas: 75 },
];

// Tráfico web mensual
const webTraffic = [
	{ month: 'Ene', visitas: 2200 },
	{ month: 'Feb', visitas: 2600 },
	{ month: 'Mar', visitas: 3100 },
	{ month: 'Abr', visitas: 2900 },
	{ month: 'May', visitas: 3600 },
	{ month: 'Jun', visitas: 4200 },
	{ month: 'Jul', visitas: 5100 },
	{ month: 'Ago', visitas: 4800 },
	{ month: 'Sep', visitas: 4700 },
	{ month: 'Oct', visitas: 5600 },
	{ month: 'Nov', visitas: 6300 },
	{ month: 'Dic', visitas: 7200 },
];

const commonSearches = [
	{ name: 'masajes', count: 520 },
	{ name: 'depilación', count: 430 },
	{ name: 'facial', count: 380 },
	{ name: 'cejas', count: 240 },
	{ name: 'promociones', count: 210 },
];

// Horarios y días más habituales
const popularHours = [
	{ hour: '09:00', reservas: 24 },
	{ hour: '10:00', reservas: 38 },
	{ hour: '11:00', reservas: 45 },
	{ hour: '12:00', reservas: 32 },
	{ hour: '13:00', reservas: 18 },
	{ hour: '16:00', reservas: 41 },
	{ hour: '17:00', reservas: 47 },
	{ hour: '18:00', reservas: 36 },
];

const popularDays = [
	{ day: 'Lun', reservas: 52 },
	{ day: 'Mar', reservas: 61 },
	{ day: 'Mié', reservas: 74 },
	{ day: 'Jue', reservas: 68 },
	{ day: 'Vie', reservas: 81 },
	{ day: 'Sáb', reservas: 95 },
	{ day: 'Dom', reservas: 34 },
];

// Clicks al botón Reservar por día
const reserveClicks = [
	{ day: 'Lun', clicks: 120 },
	{ day: 'Mar', clicks: 140 },
	{ day: 'Mié', clicks: 160 },
	{ day: 'Jue', clicks: 180 },
	{ day: 'Vie', clicks: 220 },
	{ day: 'Sáb', clicks: 260 },
	{ day: 'Dom', clicks: 100 },
];

export default function DashboardV2Page() {
	// Chart configs con colores variados
	const mpConfig = useMemo(() => ({ pagos: { label: 'Pagos MP', color: '#3b82f6' } }), []);
	const trafficConfig = useMemo(() => ({ visitas: { label: 'Visitas', color: '#10b981' } }), []);
	const salesConfig = useMemo(() => ({ ventas: { label: 'Ventas', color: '#8b5cf6' } }), []);
	const reservasConfig = useMemo(() => ({ reservas: { label: 'Reservas', color: '#f59e0b' } }), []);
	const countConfig = useMemo(() => ({ count: { label: 'Cantidad', color: '#ef4444' } }), []);
	const promoConfig = useMemo(
		() => ({
			clicks: { label: 'Clicks', color: '#06b6d4' },
			visitas: { label: 'Visitas', color: '#84cc16' },
		}),
		[]
	);
	const clicksConfig = useMemo(() => ({ clicks: { label: 'Clicks', color: '#ec4899' } }), []);
	const genderColors = ['#3b82f6', '#ec4899', '#8b5cf6'];

	// Estado de servicios para tabla integrada
	const [services, setServices] = useState<ServiceResponse[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [page, setPage] = useState<number>(1);
	const [meta, setMeta] = useState<ServicesResponse['pagination'] | null>(null);

	const loadServices = async (p: number = 1) => {
		setError(null);
		setLoading(true);
		try {
			const data: ServicesResponse = await fetchServicesClient({ page: p });
			setServices(data.data);
			setMeta(data.pagination);
		} catch (e) {
			setError('No se pudieron cargar los servicios.');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		void loadServices(page);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	const handleToggleActive = async (svc: ServiceResponse) => {
		const optimistic = services.map((s) => (s.id === svc.id ? { ...s, isActive: !s.isActive } : s));
		setServices(optimistic);
		try {
			await updateServiceClient(svc.id, { isActive: !svc.isActive });
		} catch (e) {
			// revertir
			setServices(services);
		}
	};

	const handleLogout = async () => {
		try {
			await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
		} catch (_) {
			// noop
		} finally {
			window.location.href = '/admin/login';
		}
	};

	const [activeTab, setActiveTab] = useState<'dashboard' | 'services'>('dashboard');

	return (
		<SidebarProvider>
			<div className="flex h-screen w-full">
				<Sidebar className="border-r">
					<SidebarHeader className="border-b p-4">
						<div className="flex items-center gap-2">
							<div className="h-8 w-8 rounded bg-primary" />
							<span className="font-semibold">Íntima Admin</span>
						</div>
					</SidebarHeader>
					<SidebarContent>
						<SidebarGroup>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<button
											onClick={() => setActiveTab('dashboard')}
											className={`w-full justify-start ${
												activeTab === 'dashboard' ? 'bg-accent' : ''
											}`}
										>
											<BarChart3 className="mr-2 h-4 w-4" />
											Dashboard
										</button>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<button
											onClick={() => setActiveTab('services')}
											className={`w-full justify-start ${
												activeTab === 'services' ? 'bg-accent' : ''
											}`}
										>
											<Package className="mr-2 h-4 w-4" />
											Servicios
										</button>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroup>
					</SidebarContent>
					<SidebarFooter className="border-t p-4">
						<div className="flex flex-col gap-2">
							<Button
								variant="ghost"
								className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
								onClick={handleLogout}
							>
								<LogOut className="mr-2 h-4 w-4" />
								Cerrar Sesión
							</Button>
							<div className="text-xs text-muted-foreground">
								v2.0.0
							</div>
						</div>
					</SidebarFooter>
				</Sidebar>
				
				<div className="flex-1 flex flex-col min-h-0">
					{/* Header con menú hamburguesa para mobile */}
					<div className="flex items-center justify-between p-4 border-b lg:hidden">
						<h1 className="text-xl font-semibold">
							{activeTab === 'dashboard' ? 'Dashboard' : 'Servicios'}
						</h1>
						<SidebarTrigger>
							<Menu className="h-5 w-5" />
						</SidebarTrigger>
					</div>
					<div className='flex flex-1 flex-col gap-4 p-4 overflow-y-auto'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							<SidebarTrigger />
							<Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbItem>
										<BreadcrumbLink href='/admin/dashboard/v2'>Admin</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator />
									<BreadcrumbItem>
										<BreadcrumbPage>{activeTab === 'dashboard' ? 'Dashboard' : 'Servicios'}</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>
						</div>
						<div className='flex items-center gap-2'>
							<Button variant='ghost' size='sm' onClick={() => void loadServices(page)}>
								<FiRefreshCcw className='size-4' />
								<span className='sr-only'>Refrescar</span>
							</Button>
						</div>
					</div>

					{activeTab === 'dashboard' && (
						<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
							{/* Ingresos Mensuales vs Objetivo */}
							<Card>
								<CardHeader>
									<CardTitle>Ingresos Mensuales vs Objetivo</CardTitle>
								</CardHeader>
								<CardContent className='h-64'>
									<ChartContainer config={{
										revenue: { label: 'Ingresos', color: '#8b5cf6' },
										goal: { label: 'Objetivo', color: '#e5e7eb' }
									}} className='h-full w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<AreaChart data={monthlyRevenue} margin={{ left: 12, right: 12 }}>
												<CartesianGrid strokeDasharray='3 3' className='stroke-muted' />
												<XAxis dataKey='month' tickLine={false} axisLine={false} dy={8} />
												<YAxis tickLine={false} axisLine={false} dx={-8} />
												<Tooltip content={<ChartTooltipContent />} />
												<Area
													type='monotone'
													dataKey='goal'
													stroke='#e5e7eb'
													fill='#f3f4f6'
													fillOpacity={0.3}
												/>
												<Area
													type='monotone'
													dataKey='revenue'
													stroke='#8b5cf6'
													fill='#8b5cf6'
													fillOpacity={0.6}
												/>
											</AreaChart>
										</ResponsiveContainer>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Tratamientos Más Populares */}
							<Card>
								<CardHeader>
									<CardTitle>Tratamientos Más Populares</CardTitle>
								</CardHeader>
								<CardContent className='h-64'>
									<ChartContainer config={{
										bookings: { label: 'Reservas', color: '#ec4899' }
									}} className='h-full w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<BarChart data={topTreatments} margin={{ left: 12, right: 12, bottom: 40 }}>
												<CartesianGrid strokeDasharray='3 3' className='stroke-muted' />
												<XAxis 
													dataKey='treatment' 
													tickLine={false} 
													axisLine={false} 
													angle={-45}
													textAnchor='end'
													height={60}
												/>
												<YAxis tickLine={false} axisLine={false} dx={-8} />
												<Tooltip content={<ChartTooltipContent />} />
												<Bar dataKey='bookings' fill='#ec4899' radius={[4, 4, 0, 0]} />
											</BarChart>
										</ResponsiveContainer>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Tendencias de Citas por Hora */}
							<Card>
								<CardHeader>
									<CardTitle>Tendencias de Citas por Hora</CardTitle>
								</CardHeader>
								<CardContent className='h-64'>
									<ChartContainer config={{
										appointments: { label: 'Citas', color: '#3b82f6' }
									}} className='h-full w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<LineChart data={appointmentTrends} margin={{ left: 12, right: 12 }}>
												<CartesianGrid strokeDasharray='3 3' className='stroke-muted' />
												<XAxis dataKey='time' tickLine={false} axisLine={false} dy={8} />
												<YAxis tickLine={false} axisLine={false} dx={-8} />
												<Tooltip content={<ChartTooltipContent />} />
												<Line
													type='monotone'
													dataKey='appointments'
													stroke='#3b82f6'
													strokeWidth={3}
													dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
												/>
											</LineChart>
										</ResponsiveContainer>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Ventas de Productos */}
							<Card>
								<CardHeader>
									<CardTitle>Distribucion por genero</CardTitle>
								</CardHeader>
								<CardContent className='h-64'>
									<ChartContainer config={{
										sales: { label: 'Cantidad', color: '#10b981' }
									}} className='h-full w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<PieChart>
												<Tooltip content={<ChartTooltipContent />} />
												<Pie 
													data={productSales} 
													dataKey='sales' 
													nameKey='category' 
													outerRadius={80} 
													label={({ category, sales }) => `${category}: ${sales}`}
												>
													{productSales.map((entry, index) => (
														<Cell key={`cell-${index}`} fill={entry.color} />
													))}
												</Pie>
												<Legend />
											</PieChart>
										</ResponsiveContainer>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Satisfacción del Cliente */}
						

						

							{/* Ingresos a la web (área) */}
							<Card className='md:col-span-2'>
								<CardHeader>
									<CardTitle>Ingresos a la web</CardTitle>
								</CardHeader>
								<CardContent className='h-72'>
									<ChartContainer config={trafficConfig} className='h-full w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<AreaChart data={webTraffic} margin={{ left: 12, right: 12 }}>
												<defs>
													<linearGradient id='fill-visitas' x1='0' y1='0' x2='0' y2='1'>
														<stop offset='5%' stopColor='var(--color-visitas)' stopOpacity={0.8} />
														<stop offset='95%' stopColor='var(--color-visitas)' stopOpacity={0.08} />
													</linearGradient>
												</defs>
												<CartesianGrid strokeDasharray='3 3' className='stroke-muted' />
												<XAxis dataKey='month' tickLine={false} axisLine={false} dy={8} />
												<YAxis tickLine={false} axisLine={false} dx={-8} />
												<Tooltip content={<ChartTooltipContent />} />
												<Area type='monotone' dataKey='visitas' stroke='var(--color-visitas)' fill='url(#fill-visitas)' />
											</AreaChart>
										</ResponsiveContainer>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Promociones más populares (barras: clicks/visitas) */}
							<Card>
								<CardHeader>
									<CardTitle>Promociones más populares</CardTitle>
								</CardHeader>
								<CardContent className='h-64'>
									<ChartContainer config={promoConfig} className='h-full w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<BarChart data={promoStats}>
												<CartesianGrid strokeDasharray='3 3' className='stroke-muted' />
												<XAxis
													dataKey='promo'
													tickLine={false}
													axisLine={false}
													interval={0}
													angle={-15}
													dy={10}
													height={60}
												/>
												<YAxis tickLine={false} axisLine={false} />
												<Tooltip content={<ChartTooltipContent />} />
												<Legend />
												<Bar dataKey='clicks' fill='var(--color-clicks)' radius={[4, 4, 0, 0]} />
												<Bar dataKey='visitas' fill='var(--color-visitas)' radius={[4, 4, 0, 0]} />
											</BarChart>
										</ResponsiveContainer>
									</ChartContainer>
									<div className='mt-2 text-xs text-muted-foreground'>Algunas promos están activas (demostración)</div>
								</CardContent>
							</Card>

							{/* Servicios más populares del mes (barras) */}
							<Card>
								<CardHeader>
									<CardTitle>Servicios más populares del mes</CardTitle>
								</CardHeader>
								<CardContent className='h-64'>
									<ChartContainer config={reservasConfig} className='h-full w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<BarChart data={serviceBookings}>
												<CartesianGrid strokeDasharray='3 3' className='stroke-muted' />
												<XAxis
													dataKey='name'
													tickLine={false}
													axisLine={false}
													interval={0}
													angle={-15}
													dy={10}
													height={60}
												/>
												<YAxis tickLine={false} axisLine={false} />
												<Tooltip content={<ChartTooltipContent />} />
												<Bar dataKey='reservas' fill='var(--color-reservas)' radius={[4, 4, 0, 0]} />
											</BarChart>
										</ResponsiveContainer>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Búsquedas más comunes (barras) */}
							<Card>
								<CardHeader>
									<CardTitle>Búsquedas más comunes</CardTitle>
								</CardHeader>
								<CardContent className='h-64'>
									<ChartContainer config={countConfig} className='h-full w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<BarChart data={commonSearches}>
												<CartesianGrid strokeDasharray='3 3' className='stroke-muted' />
												<XAxis
													dataKey='name'
													tickLine={false}
													axisLine={false}
													interval={0}
													angle={-15}
													dy={10}
													height={60}
												/>
												<YAxis tickLine={false} axisLine={false} />
												<Tooltip content={<ChartTooltipContent />} />
												<Bar dataKey='count' fill='var(--color-count)' radius={[4, 4, 0, 0]} />
											</BarChart>
										</ResponsiveContainer>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Horarios más habituales (barras) */}
							<Card>
								<CardHeader>
									<CardTitle>Horarios más habituales</CardTitle>
								</CardHeader>
								<CardContent className='h-64'>
									<ChartContainer config={reservasConfig} className='h-full w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<BarChart data={popularHours}>
												<CartesianGrid strokeDasharray='3 3' className='stroke-muted' />
												<XAxis dataKey='hour' tickLine={false} axisLine={false} />
												<YAxis tickLine={false} axisLine={false} />
												<Tooltip content={<ChartTooltipContent />} />
												<Bar dataKey='reservas' fill='var(--color-reservas)' radius={[4, 4, 0, 0]} />
											</BarChart>
										</ResponsiveContainer>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Días más habituales (barras) */}
							<Card>
								<CardHeader>
									<CardTitle>Días más habituales</CardTitle>
								</CardHeader>
								<CardContent className='h-64'>
									<ChartContainer config={reservasConfig} className='h-full w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<BarChart data={popularDays}>
												<CartesianGrid strokeDasharray='3 3' className='stroke-muted' />
												<XAxis dataKey='day' tickLine={false} axisLine={false} />
												<YAxis tickLine={false} axisLine={false} />
												<Tooltip content={<ChartTooltipContent />} />
												<Bar dataKey='reservas' fill='var(--color-reservas)' radius={[4, 4, 0, 0]} />
											</BarChart>
										</ResponsiveContainer>
									</ChartContainer>
								</CardContent>
							</Card>

							{/* Clicks en "Reservar" (línea) */}
							<Card>
								<CardHeader>
									<CardTitle>Clicks en "Reservar"</CardTitle>
								</CardHeader>
								<CardContent className='h-64'>
									<ChartContainer config={clicksConfig} className='h-full w-full'>
										<ResponsiveContainer width='100%' height='100%'>
											<LineChart data={reserveClicks}>
												<CartesianGrid strokeDasharray='3 3' className='stroke-muted' />
												<XAxis dataKey='day' tickLine={false} axisLine={false} />
												<YAxis tickLine={false} axisLine={false} />
												<Tooltip content={<ChartTooltipContent />} />
												<Line
													type='monotone'
													dataKey='clicks'
													stroke='var(--color-clicks)'
													strokeWidth={2}
													dot={{ r: 2 }}
													activeDot={{ r: 3 }}
												/>
											</LineChart>
										</ResponsiveContainer>
									</ChartContainer>
								</CardContent>
							</Card>
						</div>
					)}

					{activeTab === 'services' && (
						<Card>
							<CardHeader>
								<CardTitle>Gestión de servicios</CardTitle>
							</CardHeader>
							<CardContent>
								{loading ? (
									<div className='flex justify-center items-center py-12'>
										<span>Cargando servicios...</span>
									</div>
								) : error ? (
									<div className='flex justify-center items-center py-12'>
										<div className='text-center'>
											<p className='text-red-600 mb-2'>{error}</p>
											<Button variant='outline' size='sm' onClick={() => void loadServices(page)}>
												Reintentar
											</Button>
										</div>
									</div>
								) : services.length === 0 ? (
									<div className='flex justify-center items-center py-12'>
										<span>No hay servicios.</span>
									</div>
								) : (
									<div className='w-full overflow-x-auto rounded-md border'>
										<table className='min-w-full text-sm'>
											<thead className='bg-gray-50'>
												<tr>
													<th className='text-left px-4 py-2'>Nombre</th>
													<th className='text-left px-4 py-2'>Tipo</th>
													<th className='text-left px-4 py-2'>Precio</th>
													<th className='text-left px-4 py-2'>Activo</th>
													<th className='text-left px-4 py-2'>Actualizado</th>
													<th className='text-right px-4 py-2'>Acciones</th>
												</tr>
											</thead>
											<tbody>
												{services.map((s) => (
													<tr key={s.id} className='border-t'>
														<td className='px-4 py-2 font-medium'>{s.name}</td>
														<td className='px-4 py-2'>{s.type}</td>
														<td className='px-4 py-2'>{s.finalPrice.toFixed(2)}</td>
														<td className='px-4 py-2'>
															<div className='flex items-center gap-2'>
																<Switch
																	checked={s.isActive}
																	onCheckedChange={() => void handleToggleActive(s)}
																	ariaLabel='Alternar activo'
																/>
																<span className={s.isActive ? 'text-green-600' : 'text-gray-500'}>
																	{s.isActive ? 'Sí' : 'No'}
																</span>
															</div>
														</td>
														<td className='px-4 py-2'>{new Date(s.updatedAt ?? s.createdAt).toLocaleString()}</td>
														<td className='px-4 py-2'>
															<div className='flex items-center justify-end gap-2'>
																<DropdownMenu>
																	<DropdownMenuTrigger asChild>
																		<button className='inline-flex items-center gap-1 text-gray-600 hover:text-gray-900'>
																			<FiMoreHorizontal className='size-4' />
																		</button>
																	</DropdownMenuTrigger>
																	<DropdownMenuContent align='end'>
																		<DropdownMenuItem onClick={() => window.open(`/services/${s.id}`, '_blank')}>
																			Ver
																		</DropdownMenuItem>
																		<DropdownMenuItem
																			onClick={() => (window.location.href = `/admin/services?edit=${s.id}`)}
																		>
																			Editar
																		</DropdownMenuItem>
																		<DropdownMenuItem
																			variant='destructive'
																			onClick={async () => {
																				try {
																					await deleteServiceClient(s.id);
																					setServices((prev) => prev.filter((x) => x.id !== s.id));
																				} catch (e) {
																					alert('No se pudo eliminar el servicio');
																				}
																			}}
																		>
																			Eliminar
																		</DropdownMenuItem>
																	</DropdownMenuContent>
																</DropdownMenu>
															</div>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								)}

								{/* Paginación simple client-side con los metadatos del backend */}
								{meta && (
									<div className='mt-3 flex items-center justify-between text-sm text-gray-600'>
										<div>
											Página {meta.currentPage} de {meta.totalPages} • Total {meta.totalItems}
										</div>
										<div className='flex items-center gap-2'>
											<Button
												variant='ghost'
												size='sm'
												disabled={!meta.hasPreviousPage}
												onClick={() => setPage((p) => Math.max(1, p - 1))}
											>
												Anterior
											</Button>
											<Button
												variant='ghost'
												size='sm'
												disabled={!meta.hasNextPage}
												onClick={() => setPage((p) => p + 1)}
											>
												Siguiente
											</Button>
										</div>
									</div>
								)}
							</CardContent>
						</Card>
					)}
				</div>
				</div>
				</div>
		</SidebarProvider>
	);
}