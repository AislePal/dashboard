"use client";

import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
  IconMap,
  IconTimeline,
  IconUsersPlus,
  IconTag,
} from "@tabler/icons-react";
import { AudioWaveform, GalleryVerticalEnd } from "lucide-react";
import { Logo } from "../logo";
import { type SidebarData } from "../types";

export const sidebarData: SidebarData = {
  user: {
    name: "Pal",
    email: "pal@gmail.com",
    avatar: "/icons/logo.png",
  },
  teams: [
    {
      name: "AislePal",
      logo: Logo,
      plan: "Analytics",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navGroups: [
    {
      title: "",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: IconLayoutDashboard,
        },
        {
          title: "Customers",
          url: "/tasks",
          icon: IconUsersPlus,
        },
        // {
        //   title: "Trends",
        //   url: "/apps",
        //   icon: IconTimeline,
        // },
        {
          title: "Heatmaps",
          url: "/chats",
          icon: IconMap,
        },
        {
          title: "Items",
          url: "/users",
          icon: IconTag,
        },
        {
          title: "Chats",
          url: "/users",
          icon: IconUsers,
        },
      ],
    },
    {
      title: "Configuration",
      items: [
        {
          title: "Settings",
          url: "/settings/profile",
          icon: IconSettings,
          //   items: [
          //     {
          //       title: "Profile",
          //       icon: IconUserCog,
          //     },
          //     {
          //       title: "Account",
          //       url: "/settings/account",
          //       icon: IconTool,
          //     },
          //     {
          //       title: "Appearance",
          //       url: "/settings/appearance",
          //       icon: IconPalette,
          //     },
          //     {
          //       title: "Notifications",
          //       url: "/settings/notifications",
          //       icon: IconNotification,
          //     },
          //     {
          //       title: "Display",
          //       url: "/settings/display",
          //       icon: IconBrowserCheck,
          //     },
          //   ],
        },
      ],
    },
  ],
};
