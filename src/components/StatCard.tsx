import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export default function StatCard({ title, value, icon: Icon, trend }: StatCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-primary/20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <CardContent className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{title}</p>
            <p className="mt-3 text-4xl font-bold text-foreground tracking-tight">{value}</p>
            {trend && (
              <div className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                trend.positive 
                  ? "bg-success/10 text-success" 
                  : "bg-destructive/10 text-destructive"
              }`}>
                <span className="text-base">{trend.positive ? "↑" : "↓"}</span>
                {trend.value}
              </div>
            )}
          </div>
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow">
            <Icon className="h-8 w-8 text-white" />
            <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
