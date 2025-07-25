import { useState } from "react"
import { 
  FileText, 
  Home, 
  Search, 
  Settings, 
  Plus,
  Folder,
  Trash2,
  Moon,
  Sun
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Search", url: "/search", icon: Search },
  { title: "All Notes", url: "/notes", icon: FileText },
  { title: "Folders", url: "/folders", icon: Folder },
  { title: "Trash", url: "/trash", icon: Trash2 },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-primary font-medium" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground"

  return (
    <Sidebar
      className={collapsed ? "w-16" : "w-64"}
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <FileText className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-semibold text-sidebar-foreground">NoteNest</h2>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <div className="flex items-center justify-between mb-4">
            {!collapsed && (
              <SidebarGroupLabel className="text-sidebar-foreground/70">
                Navigation
              </SidebarGroupLabel>
            )}
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0 hover:bg-sidebar-accent"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup className="mt-8">
            <SidebarGroupLabel className="text-sidebar-foreground/70">
              Recent Notes
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-sidebar-foreground/60 text-sm">
                    <FileText className="h-4 w-4" />
                    <span>Getting Started</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-sidebar-foreground/60 text-sm">
                    <FileText className="h-4 w-4" />
                    <span>Meeting Notes</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-8 w-8 p-0 hover:bg-sidebar-accent"
          >
            {theme === "dark" ? 
              <Sun className="h-4 w-4" /> : 
              <Moon className="h-4 w-4" />
            }
          </Button>
          
          {!collapsed && (
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-sidebar-accent"
            >
              <Settings className="h-4 w-4" />
            </Button>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}