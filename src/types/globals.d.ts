/* eslint-disable @typescript-eslint/no-namespace */

/**
 * Type declarations for the <glass-element> Web Component.
 * Source: liquid-glass/glass-element.js + liquid-glass/displacement-utils.js
 *
 * All observed attributes from GlassElement.observedAttributes are declared here.
 */

import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "glass-element": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        width?: string | number;
        height?: string | number;
        radius?: string | number;
        depth?: string | number;
        blur?: string | number;
        strength?: string | number;
        "background-color"?: string;
        "chromatic-aberration"?: string | number;
        debug?: string;
        responsive?: string;
        "base-width"?: string | number;
        "base-height"?: string | number;
        "auto-size"?: string;
        "min-width"?: string | number;
        "min-height"?: string | number;
      };
    }
  }
}

/** DisplacementUtils exposed on window by displacement-utils.js */
interface DisplacementUtilsAPI {
  getDisplacementMap(opts: {
    height: number;
    width: number;
    radius: number;
    depth: number;
  }): string;
  getDisplacementFilter(opts: {
    height: number;
    width: number;
    radius: number;
    depth: number;
    strength?: number;
    chromaticAberration?: number;
  }): string;
}

interface Window {
  DisplacementUtils: DisplacementUtilsAPI;
}
