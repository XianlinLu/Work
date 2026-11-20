import { sitePath } from "@/lib/paths";
export default function SpatialIndexAlias() {
  const href = sitePath("/ai-glasses-ux/");
  return (
    <>
      <meta httpEquiv="refresh" content={"0; url=" + href} />
      <a href={href}>Spatial Interaction Framework</a>
    </>
  );
}
