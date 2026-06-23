import {
  BadgeCheck,
  Briefcase,
  Cpu,
  Factory,
  PackageCheck,
  Pill,
  Shirt,
  ShoppingBag,
  Snowflake,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  label: string;
  text: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  {
    label: "Perishables & frozen food",
    text: "Temperature-sensitive goods can be reviewed for route suitability, timing and documentation needs.",
    icon: Snowflake,
  },
  {
    label: "Pharmaceutical & healthcare",
    text: "Healthcare-related cargo may need careful checks around handling, declarations and destination rules.",
    icon: Pill,
  },
  {
    label: "FMCG and retail stock",
    text: "Business stock, samples and repeat shipments can be quoted with air, sea, road and documentation support.",
    icon: ShoppingBag,
  },
  {
    label: "Retail and fashion",
    text: "Clothing, textiles, accessories and branded goods can be reviewed for personal or commercial shipping.",
    icon: Shirt,
  },
  {
    label: "Engineering and manufacturing",
    text: "Parts, tools, machinery components and production samples can be reviewed with weight and packing details.",
    icon: Factory,
  },
  {
    label: "Technology and electronics",
    text: "Devices, equipment and battery-containing items may require extra restricted-goods checks before quoting.",
    icon: Cpu,
  },
  {
    label: "Merchandise in baggage",
    text: "Hand-carried commercial goods may need declarations and documentation before or after travel.",
    icon: Briefcase,
  },
  {
    label: "Animal-origin products",
    text: "Food, organic or animal-origin goods require cautious review because destination and border rules can be strict.",
    icon: BadgeCheck,
  },
  {
    label: "Household and family cargo",
    text: "Boxes, gifts, clothes, kitchen items and personal effects remain a core part of our quote service.",
    icon: PackageCheck,
  },
];
