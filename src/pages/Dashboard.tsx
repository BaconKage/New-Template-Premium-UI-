import { Users, UserPlus, Calendar, TrendingUp, Activity, Dumbbell, UserCheck, Target } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const stats = [
  { title: "Active Centers", value: "3", icon: Activity },
  { title: "New Members", value: "24", icon: UserPlus, trend: { value: "12%", positive: true } },
  { title: "Upcoming Renewals", value: "18", icon: Calendar },
  { title: "Month on Month Growth", value: "+15%", icon: TrendingUp, trend: { value: "3%", positive: true } },
  { title: "Total Active Members", value: "342", icon: Users },
  { title: "Trainers Available Today", value: "8", icon: Dumbbell },
  { title: "Today's Walk-Ins", value: "12", icon: UserCheck },
  { title: "Today's Leads", value: "7", icon: Target },
];

const renewalsDue = [
  { id: 1, name: "Rahul Sharma", plan: "Premium", dueDate: "2025-11-02", amount: "₹5,000" },
  { id: 2, name: "Priya Patel", plan: "Standard", dueDate: "2025-11-05", amount: "₹3,000" },
  { id: 3, name: "Amit Kumar", plan: "Premium", dueDate: "2025-11-08", amount: "₹5,000" },
  { id: 4, name: "Sneha Singh", plan: "Basic", dueDate: "2025-11-10", amount: "₹2,000" },
];

const todayLeads = [
  { id: 1, name: "Arjun Mehta", source: "Walk-in", interest: "Weight Training", time: "09:30 AM" },
  { id: 2, name: "Neha Gupta", source: "Phone", interest: "Yoga Classes", time: "11:15 AM" },
  { id: 3, name: "Vikram Joshi", source: "Website", interest: "Personal Training", time: "02:45 PM" },
  { id: 4, name: "Pooja Reddy", source: "Referral", interest: "Cardio", time: "04:20 PM" },
];

const availableTrainers = [
  { id: 1, name: "Rohit Verma", specialty: "Strength", avatar: "" },
  { id: 2, name: "Anjali Das", specialty: "Yoga", avatar: "" },
  { id: 3, name: "Karan Singh", specialty: "Cardio", avatar: "" },
  { id: 4, name: "Meera Nair", specialty: "CrossFit", avatar: "" },
  { id: 5, name: "Suresh Kumar", specialty: "Boxing", avatar: "" },
  { id: 6, name: "Kavita Rao", specialty: "Pilates", avatar: "" },
  { id: 7, name: "Aditya Mishra", specialty: "Nutrition", avatar: "" },
  { id: 8, name: "Divya Iyer", specialty: "Zumba", avatar: "" },
];

const monthlyData = [
  { month: "May", members: 285 },
  { month: "Jun", members: 298 },
  { month: "Jul", members: 310 },
  { month: "Aug", members: 325 },
  { month: "Sep", members: 330 },
  { month: "Oct", members: 342 },
];

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's your gym overview</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Today</p>
          <p className="text-lg font-semibold">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Monthly Growth Chart */}
        <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gradient-primary animate-pulse" />
              Membership Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-3 px-4">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex flex-1 flex-col items-center gap-3 group">
                  <div className="text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">{data.members}</div>
                  <div
                    className="relative w-full rounded-t-xl bg-gradient-primary transition-all duration-700 hover:scale-105 shadow-md hover:shadow-glow cursor-pointer"
                    style={{
                      height: `${(data.members / Math.max(...monthlyData.map(d => d.members))) * 100}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-xs font-semibold text-foreground">{data.month}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Renewals Due */}
        <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gradient-accent animate-pulse" />
              Renewals Due Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {renewalsDue.map((renewal) => (
                <div key={renewal.id} className="group flex items-center justify-between rounded-xl border border-border/50 bg-gradient-to-r from-card to-muted/30 p-4 transition-all hover:shadow-md hover:border-primary/30 hover:-translate-x-1">
                  <div>
                    <p className="font-semibold text-foreground">{renewal.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{renewal.plan} • Due {renewal.dueDate}</p>
                  </div>
                  <Badge className="bg-gradient-accent text-accent-foreground font-bold shadow-md">{renewal.amount}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* New Leads and Trainers */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Today's Leads */}
        <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gradient-success animate-pulse" />
              Today's New Leads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todayLeads.map((lead) => (
                <div key={lead.id} className="group flex items-start justify-between rounded-xl border border-border/50 bg-gradient-to-r from-card to-success/5 p-4 transition-all hover:shadow-md hover:border-success/30 hover:-translate-x-1">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{lead.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{lead.interest}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge className="bg-gradient-primary text-primary-foreground shadow-sm">{lead.source}</Badge>
                    <p className="text-xs text-muted-foreground font-medium">{lead.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trainers Available */}
        <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gradient-accent animate-pulse" />
              Trainers Available Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              {availableTrainers.map((trainer) => (
                <div key={trainer.id} className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 cursor-pointer">
                  <div className="relative">
                    <Avatar className="h-16 w-16 border-2 border-primary/30 ring-4 ring-primary/10 transition-all group-hover:ring-primary/30 group-hover:border-primary/50 shadow-lg">
                      <AvatarImage src={trainer.avatar} />
                      <AvatarFallback className="bg-gradient-accent text-accent-foreground font-bold text-lg">
                        {trainer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-gradient-success border-2 border-card shadow-md" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-foreground">{trainer.name.split(' ')[0]}</p>
                    <p className="text-xs text-muted-foreground font-medium">{trainer.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
