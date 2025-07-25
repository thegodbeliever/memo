import { Plus, FileText, Folder, Upload, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function QuickActions() {
  const actions = [
    {
      icon: FileText,
      label: "New Note",
      description: "Create a blank note",
      onClick: () => console.log("New note"),
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Folder,
      label: "New Folder",
      description: "Organize your notes",
      onClick: () => console.log("New folder"),
      gradient: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Upload,
      label: "Import",
      description: "Import existing documents",
      onClick: () => console.log("Import"),
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: Sparkles,
      label: "Template",
      description: "Start with a template",
      onClick: () => console.log("Template"),
      gradient: "bg-gradient-to-br from-orange-500 to-orange-600"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2 hover:shadow-md transition-all"
              onClick={action.onClick}
            >
              <div className={`p-2 rounded-lg ${action.gradient}`}>
                <action.icon className="h-4 w-4 text-white" />
              </div>
              <div className="text-center">
                <div className="font-medium text-sm">{action.label}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}