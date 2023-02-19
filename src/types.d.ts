/**
 * @category Dev
 * @module Dev Types
 */

declare module "*.svg" {
  const content: string;
  // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
