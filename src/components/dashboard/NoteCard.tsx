import { FileText, Calendar, MoreVertical } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface NoteCardProps {
  title: string
  preview: string
  updatedAt: string
  tags?: string[]
  onClick?: () => void
}

export function NoteCard({ title, preview, updatedAt, tags = [], onClick }: NoteCardProps) {
  return (
    <Card 
      className="group cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02] bg-gradient-surface"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-card-foreground line-clamp-1">{title}</h3>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreVertical className="h-3 w-3" />
          </Button>
        </div>
        
        {tags.length > 0 && (
          <div className="flex gap-1 flex-wrap mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
          {preview}
        </p>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="h-3 w-3 mr-1" />
          {updatedAt}
        </div>
      </CardContent>
    </Card>
  )
}