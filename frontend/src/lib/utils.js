export const PERMISSIONS = {
  MERCHANT: "merchant",
  LOCATION: "location",
  LICENSE: "license",
  REVENUE: "revenue",
  REPORT: "report",
};

export const capitalizeFirstLetter = (string) => {
  if (string?.length === 0) return string;
  return string?.charAt(0)?.toUpperCase() + string?.slice(1)?.toLowerCase();
};
