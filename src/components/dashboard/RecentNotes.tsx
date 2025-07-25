import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NoteCard } from "./NoteCard"

// Mock data - will be replaced with real data later
const mockNotes = [
  {
    id: "1",
    title: "Project Planning Meeting",
    preview: "Discussed the upcoming product launch timeline and key milestones. Need to follow up on design deliverables and development sprints...",
    updatedAt: "2 hours ago",
    tags: ["meeting", "planning"]
  },
  {
    id: "2",
    title: "React Best Practices",
    preview: "Collection of React patterns and best practices for building scalable applications. Includes hooks, context, and performance optimization techniques...",
    updatedAt: "Yesterday",
    tags: ["development", "react"]
  },
  {
    id: "3",
    title: "Book Notes: The Lean Startup",
    preview: "Key insights from Eric Ries' methodology for building sustainable businesses through validated learning and iterative product development...",
    updatedAt: "3 days ago",
    tags: ["book", "business"]
  },
  {
    id: "4",
    title: "Weekly Goals",
    preview: "Personal and professional objectives for this week. Focus on completing the dashboard redesign and preparing for the client presentation...",
    updatedAt: "1 week ago",
    tags: ["goals", "personal"]
  },
  {
    id: "5",
    title: "Design System Documentation",
    preview: "Comprehensive guide to our design system including color palettes, typography, spacing, and component guidelines for consistent UI development...",
    updatedAt: "1 week ago",
    tags: ["design", "documentation"]
  },
  {
    id: "6",
    title: "Research: AI in Productivity",
    preview: "Analysis of how artificial intelligence is transforming productivity tools. Covering automation, smart suggestions, and natural language interfaces...",
    updatedAt: "2 weeks ago",
    tags: ["research", "ai"]
  }
]

export function RecentNotes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Notes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockNotes.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              preview={note.preview}
              updatedAt={note.updatedAt}
              tags={note.tags}
              onClick={() => console.log(`Opening note: ${note.title}`)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}