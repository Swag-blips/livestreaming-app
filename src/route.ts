import generateUniqueId from "generate-unique-id";
import { CalendarCheck, Home, User, Video } from "lucide-react";

interface Route {
  path: string;
  label: string;
  icon: React.FC;
  activePaths: string[];
  target?: string;
}

export const routes: Route[] = [
  {
    path: "/",
    label: "Home",
    icon: Home,
    activePaths: ["/"],
  },
  {
    path: "/dashboard/profile",
    label: "Profile",
    icon: User,
    activePaths: ["/dashboard/profile"],
  },
  {
    path: "/dashboard/schedule",
    label: "Schedule",
    icon: CalendarCheck,
    activePaths: ["/dashboard/schedule"],
  },
  {
    path: `/dashboard/golive?roomID=${generateUniqueId({
      length: 4,
    })}&role=Host`,
    label: "Go live",
    icon: Video,
    target: "_blank",
    activePaths: [
      `/dashboard/golive?roomID=${generateUniqueId({ length: 4 })}&role=Host`,
    ],
  },
];
