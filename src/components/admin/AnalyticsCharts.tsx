"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import {
  revenueByMonth,
  categorySales,
  bookingsByGender,
  promoUsage,
  avgTicketByMonth,
} from '@/data/mockAnalytics';

const COLORS = ['#4ade80', '#60a5fa', '#f59e0b', '#ef4444', '#a78bfa'];

export default function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Ingresos por mes */}
      <Card>
        <CardHeader>
          <CardTitle>Ingresos por mes</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 280 }}>
            <ResponsiveContainer>
              <BarChart data={revenueByMonth} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip formatter={(v: number) => `$ ${v.toLocaleString('es-AR')}`} />
                <Legend />
                <Bar dataKey="revenue" name="Ingresos (ARS)" fill="#60a5fa" radius={[6, 6, 0, 0]} />
                <Bar dataKey="orders" name="Órdenes" fill="#4ade80" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Ventas por categoría */}
      <Card>
        <CardHeader>
          <CardTitle>Ventas por categoría</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 280 }}>
            <ResponsiveContainer>
              <BarChart data={categorySales} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="sold" name="Unidades" fill="#a78bfa" radius={[6, 6, 0, 0]} />
                <Bar dataKey="revenue" name="Ingresos (ARS)" fill="#f59e0b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Reservas por género */}
      <Card>
        <CardHeader>
          <CardTitle>Reservas por género</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 280 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={bookingsByGender}
                  dataKey="value"
                  nameKey="gender"
                  innerRadius={40}
                  outerRadius={100}
                  paddingAngle={6}
                >
                  {bookingsByGender.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <RechartsTooltip formatter={(v: number) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Ticket promedio vs objetivo */}
      <Card>
        <CardHeader>
          <CardTitle>Ticket promedio vs objetivo</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 280 }}>
            <ResponsiveContainer>
              <LineChart data={avgTicketByMonth} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip formatter={(v: number) => `$ ${v.toLocaleString('es-AR')}`} />
                <Legend />
                <Line type="monotone" dataKey="average" name="Promedio" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="target" name="Objetivo" stroke="#4ade80" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Uso de promociones */}
      <Card>
        <CardHeader>
          <CardTitle>Uso de promociones</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 280 }}>
            <ResponsiveContainer>
              <BarChart data={promoUsage} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="used" name="Usos" fill="#60a5fa" radius={[6, 6, 0, 0]} />
                <Bar dataKey="conversions" name="Conversiones" fill="#4ade80" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}