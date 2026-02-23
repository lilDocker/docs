declare module "*.mdx" {
  import { ReactNode } from "react";
  export default function MDXContent(props: any): ReactNode;
}
