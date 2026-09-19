import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Petal & Epoch | Botanical Keepsake Studio" },
      {
        name: "description",
        content:
          "Preserve wedding, anniversary, and memorial flowers in handcrafted archival resin keepsakes.",
      },
      { property: "og:title", content: "Petal & Epoch | Botanical Keepsake Studio" },
      {
        property: "og:description",
        content:
          "Turn cherished celebration flowers into crystal-clear, handcrafted archival keepsakes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-dvh w-full overflow-hidden bg-background">
      <iframe
        className="h-full w-full border-0"
        src="/petal-and-epoch.html"
        title="Petal & Epoch botanical keepsake studio"
      />
    </main>
  );
}
