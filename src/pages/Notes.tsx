import { useState } from "react"
import { Search, Filter, Grid3X3, List, Plus, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NoteCard } from "@/components/dashboard/NoteCard"
import { Badge } from "@/components/ui/badge"

// Extended mock data for notes page
const mockNotes = [
  {
    id: "1",
    title: "Project Planning Meeting",
    preview: "Discussed the upcoming product launch timeline and key milestones. Need to follow up on design deliverables and development sprints. The team is aligned on the Q2 objectives...",
    updatedAt: "2 hours ago",
    tags: ["meeting", "planning", "urgent"]
  },
  {
    id: "2",
    title: "React Best Practices",
    preview: "Collection of React patterns and best practices for building scalable applications. Includes hooks, context, and performance optimization techniques. Essential reading for the team...",
    updatedAt: "Yesterday",
    tags: ["development", "react", "documentation"]
  },
  {
    id: "3",
    title: "Book Notes: The Lean Startup",
    preview: "Key insights from Eric Ries' methodology for building sustainable businesses through validated learning and iterative product development. Focus on MVP and customer feedback loops...",
    updatedAt: "3 days ago",
    tags: ["book", "business", "startup"]
  },
  {
    id: "4",
    title: "Weekly Goals",
    preview: "Personal and professional objectives for this week. Focus on completing the dashboard redesign and preparing for the client presentation. Also need to review the Q1 metrics...",
    updatedAt: "1 week ago",
    tags: ["goals", "personal", "weekly"]
  },
  {
    id: "5",
    title: "Design System Documentation",
    preview: "Comprehensive guide to our design system including color palettes, typography, spacing, and component guidelines for consistent UI development across all projects...",
    updatedAt: "1 week ago",
    tags: ["design", "documentation", "system"]
  },
  {
    id: "6",
    title: "Research: AI in Productivity",
    preview: "Analysis of how artificial intelligence is transforming productivity tools. Covering automation, smart suggestions, and natural language interfaces. Impact on user workflows...",
    updatedAt: "2 weeks ago",
    tags: ["research", "ai", "productivity"]
  },
  {
    id: "7",
    title: "Client Feedback Summary",
    preview: "Compilation of recent client feedback from user interviews and surveys. Key themes include ease of use, feature requests, and pain points. Action items included...",
    updatedAt: "2 weeks ago",
    tags: ["client", "feedback", "ux"]
  },
  {
    id: "8",
    title: "Marketing Strategy Q2",
    preview: "Quarterly marketing strategy focusing on digital channels, content marketing, and community building. Budget allocation and KPIs defined for the upcoming quarter...",
    updatedAt: "3 weeks ago",
    tags: ["marketing", "strategy", "q2"]
  }
]

export default function Notes() {
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Extract all unique tags from notes
  const allTags = Array.from(
    new Set(mockNotes.flatMap(note => note.tags))
  ).sort()

  // Filter notes based on search and tags
  const filteredNotes = mockNotes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.preview.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => note.tags.includes(tag))
    return matchesSearch && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">All Notes</h1>
          <p className="text-muted-foreground">
            {filteredNotes.length} of {mockNotes.length} notes
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          New Note
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search notes by title or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Tag Filters */}
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer hover:opacity-80"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {selectedTags.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTags([])}
                  className="h-6 px-2 text-xs"
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notes Grid/List */}
      <div className={
        viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          : "space-y-4"
      }>
        {filteredNotes.map((note) => (
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

      {filteredNotes.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <div className="text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No notes found</h3>
              <p>Try adjusting your search query or filters</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}