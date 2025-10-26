import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { UserPlus, Dumbbell, Users } from "lucide-react";

export default function Registration() {
  const handleSubmit = (formType: string) => (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`${formType} Saved Successfully (Prototype Mode)`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Tabs defaultValue="member" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 h-auto p-1">
          <TabsTrigger value="member" className="flex items-center gap-2 py-3">
            <UserPlus className="h-4 w-4" />
            Member Registration
          </TabsTrigger>
          <TabsTrigger value="trainer" className="flex items-center gap-2 py-3">
            <Dumbbell className="h-4 w-4" />
            Trainer Registration
          </TabsTrigger>
          <TabsTrigger value="class" className="flex items-center gap-2 py-3">
            <Users className="h-4 w-4" />
            Create a Class
          </TabsTrigger>
        </TabsList>

        {/* Member Registration */}
        <TabsContent value="member">
          <Card>
            <CardHeader>
              <CardTitle>New Member Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit("Member Registration")} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="member-name">Full Name</Label>
                    <Input id="member-name" placeholder="Enter full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="member-email">Email</Label>
                    <Input id="member-email" type="email" placeholder="Enter email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="member-phone">Phone Number</Label>
                    <Input id="member-phone" type="tel" placeholder="Enter phone" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="member-dob">Date of Birth</Label>
                    <Input id="member-dob" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="member-plan">Membership Plan</Label>
                    <Select>
                      <SelectTrigger id="member-plan">
                        <SelectValue placeholder="Select plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic - ₹2,000/month</SelectItem>
                        <SelectItem value="standard">Standard - ₹3,000/month</SelectItem>
                        <SelectItem value="premium">Premium - ₹5,000/month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="member-trainer">Assign Trainer</Label>
                    <Select>
                      <SelectTrigger id="member-trainer">
                        <SelectValue placeholder="Select trainer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trainer1">Rohit Verma</SelectItem>
                        <SelectItem value="trainer2">Anjali Das</SelectItem>
                        <SelectItem value="trainer3">Karan Singh</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" className="w-full">Register Member</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trainer Registration */}
        <TabsContent value="trainer">
          <Card>
            <CardHeader>
              <CardTitle>New Trainer Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit("Trainer Registration")} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="trainer-name">Full Name</Label>
                    <Input id="trainer-name" placeholder="Enter full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trainer-email">Email</Label>
                    <Input id="trainer-email" type="email" placeholder="Enter email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trainer-phone">Phone Number</Label>
                    <Input id="trainer-phone" type="tel" placeholder="Enter phone" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trainer-specialty">Specialty</Label>
                    <Select>
                      <SelectTrigger id="trainer-specialty">
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strength">Strength Training</SelectItem>
                        <SelectItem value="cardio">Cardio</SelectItem>
                        <SelectItem value="yoga">Yoga</SelectItem>
                        <SelectItem value="crossfit">CrossFit</SelectItem>
                        <SelectItem value="boxing">Boxing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trainer-experience">Years of Experience</Label>
                    <Input id="trainer-experience" type="number" placeholder="Enter years" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trainer-certification">Certification</Label>
                    <Input id="trainer-certification" placeholder="Enter certification" required />
                  </div>
                </div>
                <Button type="submit" className="w-full">Register Trainer</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Create Class */}
        <TabsContent value="class">
          <Card>
            <CardHeader>
              <CardTitle>Create a New Class</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit("Class Creation")} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="class-name">Class Name</Label>
                    <Input id="class-name" placeholder="e.g., Morning Yoga" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class-type">Class Type</Label>
                    <Select>
                      <SelectTrigger id="class-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yoga">Yoga</SelectItem>
                        <SelectItem value="zumba">Zumba</SelectItem>
                        <SelectItem value="spinning">Spinning</SelectItem>
                        <SelectItem value="hiit">HIIT</SelectItem>
                        <SelectItem value="pilates">Pilates</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class-trainer">Assign Trainer</Label>
                    <Select>
                      <SelectTrigger id="class-trainer">
                        <SelectValue placeholder="Select trainer" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trainer1">Anjali Das</SelectItem>
                        <SelectItem value="trainer2">Divya Iyer</SelectItem>
                        <SelectItem value="trainer3">Kavita Rao</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class-capacity">Capacity</Label>
                    <Input id="class-capacity" type="number" placeholder="Max participants" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class-time">Time</Label>
                    <Input id="class-time" type="time" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class-days">Days</Label>
                    <Select>
                      <SelectTrigger id="class-days">
                        <SelectValue placeholder="Select days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="all">All Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" className="w-full">Create Class</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
