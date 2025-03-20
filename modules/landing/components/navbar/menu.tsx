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
        "bg-clip-padding backdrop-blur-2xl backdrop-filter bg-transparent p-1 lg:flex hidden rounded-2xl",
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
                  ? "bg-background/20 border"
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
        return <Card
        className={cn(
          "bg-clip-padding backdrop-blur-2xl backdrop-filter bg-transparent p-1 flex lg:hidden rounded-2xl w-full",
          props.className,
        )}
      >
        <CardContent className="p-0 flex flex-col w-full gap-1">
          {NAVBAR_CONSTANTS.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              {...(item.section && {
                onClick: () => {
                  onSetSection(item.path)
                },
              })}
              className={cn(
                "rounded-xl flex gap-2 py-2 px-4 items-center w-full",
                section === item.path ? "bg-background/20 border" : "",
              )}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </CardContent>
      </Card>
  
    default:
      return null;
  }
};

export default NavMenu;
