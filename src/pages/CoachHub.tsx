import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dumbbell, Calendar, Users } from "lucide-react";

const trainers = [
  { id: 1, name: "Rohit Verma", specialty: "Strength Training", experience: "8 years", clients: 28 },
  { id: 2, name: "Anjali Das", specialty: "Yoga", experience: "5 years", clients: 32 },
  { id: 3, name: "Karan Singh", specialty: "Cardio", experience: "6 years", clients: 25 },
  { id: 4, name: "Meera Nair", specialty: "CrossFit", experience: "4 years", clients: 22 },
  { id: 5, name: "Suresh Kumar", specialty: "Boxing", experience: "7 years", clients: 18 },
  { id: 6, name: "Kavita Rao", specialty: "Pilates", experience: "5 years", clients: 24 },
];

const attendance = [
  { id: 1, name: "Rohit Verma", status: "Present", checkIn: "06:00 AM" },
  { id: 2, name: "Anjali Das", status: "Present", checkIn: "07:30 AM" },
  { id: 3, name: "Karan Singh", status: "Present", checkIn: "06:15 AM" },
  { id: 4, name: "Meera Nair", status: "Absent", checkIn: "-" },
  { id: 5, name: "Suresh Kumar", status: "Present", checkIn: "08:00 AM" },
  { id: 6, name: "Kavita Rao", status: "Present", checkIn: "09:00 AM" },
];

const classes = [
  { id: 1, name: "Morning Yoga", trainer: "Anjali Das", time: "07:00 AM - 08:00 AM", capacity: "15/20", days: "Mon, Wed, Fri" },
  { id: 2, name: "HIIT Training", trainer: "Karan Singh", time: "06:00 AM - 07:00 AM", capacity: "12/15", days: "Tue, Thu, Sat" },
  { id: 3, name: "Strength & Power", trainer: "Rohit Verma", time: "05:00 PM - 06:00 PM", capacity: "10/12", days: "Mon, Wed, Fri" },
  { id: 4, name: "Boxing Basics", trainer: "Suresh Kumar", time: "06:00 PM - 07:00 PM", capacity: "8/10", days: "Tue, Thu" },
  { id: 5, name: "Evening Pilates", trainer: "Kavita Rao", time: "07:00 PM - 08:00 PM", capacity: "18/20", days: "Mon, Wed, Fri" },
];

export default function CoachHub() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="management" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1">
          <TabsTrigger value="management" className="flex items-center gap-2 py-3">
            <Dumbbell className="h-4 w-4" />
            Trainer Management
          </TabsTrigger>
          <TabsTrigger value="attendance" className="flex items-center gap-2 py-3">
            <Calendar className="h-4 w-4" />
            Trainer Attendance
          </TabsTrigger>
          <TabsTrigger value="classes" className="flex items-center gap-2 py-3">
            <Users className="h-4 w-4" />
            Group Classes
          </TabsTrigger>
        </TabsList>

        {/* Trainer Management */}
        <TabsContent value="management">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((trainer) => (
              <Card key={trainer.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16 border-2 border-primary/20">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                        {trainer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{trainer.name}</h3>
                      <p className="text-sm text-muted-foreground">{trainer.specialty}</p>
                      <div className="mt-3 space-y-1">
                        <p className="text-xs text-muted-foreground">Experience: {trainer.experience}</p>
                        <p className="text-xs text-muted-foreground">Active Clients: {trainer.clients}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Trainer Attendance */}
        <TabsContent value="attendance">
          <Card>
            <CardHeader>
              <CardTitle>Today's Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Trainer</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-left py-3 px-4 font-medium">Check-in Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendance.map((record) => (
                      <tr key={record.id} className="border-b hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="" />
                              <AvatarFallback className="bg-accent text-accent-foreground text-xs">
                                {record.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{record.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={record.status === "Present" ? "bg-success" : "bg-muted"}>
                            {record.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{record.checkIn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Group Classes */}
        <TabsContent value="classes">
          <Card>
            <CardHeader>
              <CardTitle>Class Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classes.map((cls) => (
                  <div key={cls.id} className="p-4 rounded-lg border hover:shadow-md transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{cls.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">Instructor: {cls.trainer}</p>
                        <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                          <span>🕐 {cls.time}</span>
                          <span>📅 {cls.days}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-sm">
                          {cls.capacity}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">capacity</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
