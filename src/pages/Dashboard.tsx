import { QuickActions } from "@/components/dashboard/QuickActions"
import { RecentNotes } from "@/components/dashboard/RecentNotes"
import { TrendingUp, FileText, Folder, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  const stats = [
    {
      title: "Total Notes",
      value: "47",
      change: "+12% from last month",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Folders",
      value: "8",
      change: "+2 new this week",
      icon: Folder,
      color: "text-green-600"
    },
    {
      title: "Recent Activity",
      value: "23",
      change: "Notes edited today",
      icon: Clock,
      color: "text-purple-600"
    },
    {
      title: "Growth",
      value: "+42%",
      change: "Productivity increase",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome back!
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your notes today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Recent Notes */}
      <RecentNotes />
    </div>
  )
}