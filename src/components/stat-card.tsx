type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <article className="stat-card panel">
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
    </article>
  );
}
