"use client";
import { Card, CardContent } from "@/components/ui/card";
import UseNavigation from "@/hooks/use-navigation";
import React from "react";
import { NAVBAR_CONSTANTS } from "./constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  origin: "mobile" | "desktop";
  className?: string;
};

const NavMenu = (props: Props) => {
  const { section, onSetSection } = UseNavigation();
  
  switch (props.origin) {
    case "desktop":
      return <Card className={cn(
        "bg-transparent p-1 lg:flex hidden rounded-2xl",
        props.className
      )}>
        <CardContent className="p-0 flex gap-2">
          { NAVBAR_CONSTANTS.map((item) => (
            <Link 
              key={item.id} 
              href={item.path}
              {...(item.section && {
                onClick: () => {
                  onSetSection(item.path)
                }
              })}
              className={cn(
                "rounded-xl flex gap-2 py-2 px-4 items-center",
                section === item.path
                  ? "text-primary"
                  : ""
              )}
            >
              { section === item.path && <item.icon className="w-4 h-4" /> }
              <span className="text-sm font-medium">{ item.label }</span>
            </Link>
          )) }
        </CardContent>
      </Card>
    
    case "mobile":
      return (
        <div className="flex flex-col gap-3 p-6 min-w-[250px]">
          { NAVBAR_CONSTANTS.map((item) => (
            <Link 
              key={item.id} 
              href={item.path}
              {...(item.section && {
                onClick: () => {
                  onSetSection(item.path)
                }
              })}
              className={cn(
                "flex gap-3 py-2.5 px-4 items-center rounded-lg transition-colors",
                section === item.path
                  ? "bg-primary/10 text-primary dark:bg-primary/20"
                  : "hover:bg-accent/50"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{ item.label }</span>
            </Link>
          )) }
        </div>
      )
  
    default:
      return null;
  }
};

export default NavMenu;
