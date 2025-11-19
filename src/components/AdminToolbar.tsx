import { SANITY_STUDIO_URL } from "@/lib/sanityClient";

const AdminToolbar = () => {
  if (import.meta.env.MODE !== "development") {
    return null;
  }

  const studioUrl =
    import.meta.env.VITE_SANITY_STUDIO_URL || SANITY_STUDIO_URL || "https://wnrpfl2o.sanity.studio";
  const actions = ["Edit", "Update content", "Open in CMS", "Manage page"];

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {actions.map((label) => (
        <a
          key={label}
          href={studioUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90"
        >
          {label}
        </a>
      ))}
    </div>
  );
};

export default AdminToolbar;
