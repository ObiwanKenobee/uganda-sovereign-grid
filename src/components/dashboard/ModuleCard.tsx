
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  path: string;
  stats?: {
    label: string;
    value: string | number;
  }[];
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  icon,
  color,
  path,
  stats,
}) => {
  return (
    <Card className="module-card">
      <div className={`module-card-header ${color}`} />
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white`}>
            {icon}
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link to={path}>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <h3 className="text-lg font-semibold mt-4">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mt-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-xl font-semibold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ModuleCard;
