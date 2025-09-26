type KpiCardProps = {
  title: string;
  value: string;
  delta?: string;
};

export default function KpiCard({ title, value, delta }: KpiCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <div className="text-sm text-gray-600">{title}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {delta && <div className="mt-1 text-xs text-gray-500">{delta}</div>}
    </div>
  );
}