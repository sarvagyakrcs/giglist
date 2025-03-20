"use client"
import { useEffect, useState } from "react"
import { FileIcon, GlobeIcon, SettingsIcon } from "lucide-react"
import { useDebouncedValue } from '@mantine/hooks'

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/global/search-box/command-menu"
import { SearchItem, initialSearchData } from "./constants"

export function CommandK() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearch] = useDebouncedValue(searchQuery, 300)
  const [searchResults, setSearchResults] = useState<SearchItem[]>(initialSearchData)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!debouncedSearch) {
        setSearchResults(initialSearchData)
        return
      }

      setIsLoading(true)
      try {
        // Simulate API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // This is where you would normally make your API call
        // const response = await fetch(`/api/search?q=${debouncedSearch}`)
        // const data = await response.json()
        
        // For now, we'll just filter the initial data
        const filteredResults = initialSearchData.filter(item =>
          item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
        setSearchResults(filteredResults)
      } catch (error) {
        console.error('Search error:', error)
        setSearchResults([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchSearchResults()
  }, [debouncedSearch])

  const handleSelect = (item: SearchItem) => {
    if (item.onClick) {
      item.onClick()
    }
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="p-0 overflow-hidden shadow-lg">
        <DialogTitle className="not-sr-only hidden">Search</DialogTitle>
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <CommandInput 
            placeholder="Type a command or search..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            <CommandEmpty>{isLoading ? 'Searching...' : 'No results found.'}</CommandEmpty>
            <CommandGroup heading="Results">
              {searchResults.map((item) => (
                <CommandItem key={item.id} onSelect={() => handleSelect(item)}>
                  {item.type === 'file' && <FileIcon className="mr-2 h-4 w-4" />}
                  {item.type === 'website' && <GlobeIcon className="mr-2 h-4 w-4" />}
                  {item.type === 'setting' && <SettingsIcon className="mr-2 h-4 w-4" />}
                  <span>{item.title}</span>
                  {item.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}

