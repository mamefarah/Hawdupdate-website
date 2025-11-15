interface CardProps {
  title: string;
  description: string;
  link: string;
}

export function Card({ title, description, link }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-text-muted mb-4">{description}</p>
        <a href={link} className="text-primary hover:text-primary-light transition-colors">
          Explore →
        </a>
      </div>
    </div>
  )
}