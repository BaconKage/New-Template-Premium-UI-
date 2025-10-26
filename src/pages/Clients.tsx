import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Users, Calendar as CalendarIcon, Target } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const members = [
  { id: 1, name: "Rahul Sharma", plan: "Premium", status: "Active", trainer: "Rohit Verma" },
  { id: 2, name: "Priya Patel", plan: "Standard", status: "Active", trainer: "Anjali Das" },
  { id: 3, name: "Amit Kumar", plan: "Premium", status: "Active", trainer: "Karan Singh" },
  { id: 4, name: "Sneha Singh", plan: "Basic", status: "Active", trainer: "Meera Nair" },
  { id: 5, name: "Vikram Joshi", plan: "Standard", status: "Pending", trainer: "Suresh Kumar" },
];

const leads = {
  new: [
    { id: 1, name: "Arjun Mehta", interest: "Weight Training", source: "Walk-in" },
    { id: 2, name: "Neha Gupta", interest: "Yoga", source: "Phone" },
  ],
  contacted: [
    { id: 3, name: "Ravi Kumar", interest: "CrossFit", source: "Website" },
    { id: 4, name: "Simran Kaur", interest: "Cardio", source: "Referral" },
  ],
  converted: [
    { id: 5, name: "Pooja Reddy", interest: "Personal Training", source: "Walk-in" },
  ],
};

export default function Clients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Tabs defaultValue="management" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1">
          <TabsTrigger value="management" className="flex items-center gap-2 py-3">
            <Users className="h-4 w-4" />
            Client Management
          </TabsTrigger>
          <TabsTrigger value="attendance" className="flex items-center gap-2 py-3">
            <CalendarIcon className="h-4 w-4" />
            Member Attendance
          </TabsTrigger>
          <TabsTrigger value="leads" className="flex items-center gap-2 py-3">
            <Target className="h-4 w-4" />
            Leads Management
          </TabsTrigger>
        </TabsList>

        {/* Client Management */}
        <TabsContent value="management">
          <Card>
            <CardHeader>
              <CardTitle>All Members</CardTitle>
              <div className="flex gap-4 mt-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search members..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Plans</SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Name</th>
                      <th className="text-left py-3 px-4 font-medium">Plan</th>
                      <th className="text-left py-3 px-4 font-medium">Status</th>
                      <th className="text-left py-3 px-4 font-medium">Assigned Trainer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMembers.map((member) => (
                      <tr key={member.id} className="border-b hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-4 font-medium">{member.name}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline">{member.plan}</Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={member.status === "Active" ? "bg-success" : "bg-warning"}>
                            {member.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{member.trainer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Attendance */}
        <TabsContent value="attendance">
          <Card>
            <CardHeader>
              <CardTitle>Member Attendance</CardTitle>
              <div className="mt-4">
                <Select onValueChange={setSelectedMember}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a member" />
                  </SelectTrigger>
                  <SelectContent>
                    {members.map((member) => (
                      <SelectItem key={member.id} value={member.id.toString()}>
                        {member.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              {selectedMember ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-7 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-muted-foreground">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 28 }).map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg border-2 flex items-center justify-center text-sm font-medium transition-colors ${
                          Math.random() > 0.3
                            ? "bg-success/20 border-success text-success"
                            : "bg-muted border-border text-muted-foreground"
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-success/20 border-2 border-success" />
                      <span>Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-muted border-2 border-border" />
                      <span>Absent</span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-8">Select a member to view attendance</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Leads Management */}
        <TabsContent value="leads">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(leads).map(([stage, stageLeads]) => (
              <Card key={stage}>
                <CardHeader>
                  <CardTitle className="capitalize">{stage}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {stageLeads.map((lead) => (
                    <div key={lead.id} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                      <p className="font-medium">{lead.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{lead.interest}</p>
                      <Badge variant="outline" className="mt-2">{lead.source}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
