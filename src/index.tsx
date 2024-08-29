/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  overflow?: "visible" | "hidden" | "scroll" | "auto" | "clip";
  overflowX?: "visible" | "hidden" | "scroll" | "auto" | "clip";
  overflowY?: "visible" | "hidden" | "scroll" | "auto" | "clip";

  width?: string;
  minWidth?: string;
  maxWidth?: string;

  height?: string;
  minHeight?: string;
  maxHeight?: string;

  padding?: string;
  paddingX?: string;
  paddingY?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;

  margin?: string;
  marginX?: string;
  marginY?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;

  border?: string;
  borderX?: string;
  borderY?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;

  background?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;

  color?: string;
  fontSize?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  textDecoration?: "none" | "underline" | "overline" | "line-through";
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  lineHeight?: string;
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
  wordBreak?: "normal" | "break-all" | "keep-all" | "break-word";
  textOverflow?: "clip" | "ellipsis";
  textShadow?: string;
  letterSpacing?: string;

  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;

  borderRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;

  as?: React.ElementType;

  display?:
    | "block"
    | "inline"
    | "inline-block"
    | "flex"
    | "grid"
    | "inline-flex"
    | "inline-grid"
    | "none"
    | "contents"
    | "table"
    | "table-row"
    | "table-cell"
    | "table-caption"
    | "table-column"
    | "table-column-group"
    | "table-header-group"
    | "table-footer-group"
    | "table-row-group"
    | "list-item"
    | "run-in"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";
  visibility?: "visible" | "hidden" | "collapse";

  opacity?: number;
  boxShadow?: string;
  transition?: string;
  transform?: string;
  transformOrigin?: string;
  animation?: string;
  pointerEvents?: "auto" | "none";
  userSelect?: "auto" | "none" | "text" | "contain" | "all";
  filter?: string;
  mixBlendMode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity"
    | "initial"
    | "inherit";
  backgroundClip?: "border-box" | "padding-box" | "content-box" | "text";
  backgroundAttachment?: "scroll" | "fixed" | "local";
  boxSizing?: "content-box" | "border-box";
  outline?: string;
  outlineOffset?: string;
  content?: string;
  float?: "left" | "right" | "none";
  clear?: "left" | "right" | "both" | "none";
  verticalAlign?: string;
  resize?: "none" | "both" | "horizontal" | "vertical";
  appearance?: string;
  cursor?: string;
  zIndex?: number;

  aspectRatio?: string;
  isolation?: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  objectPosition?:
    | "top left"
    | "top center"
    | "top right"
    | "center left"
    | "center center"
    | "center right"
    | "bottom left"
    | "bottom center"
    | "bottom right";
  overscrollBehavior?: "auto" | "contain" | "none";
  overscrollBehaviorY?: "auto" | "contain" | "none";
  overscrollBehaviorX?: "auto" | "contain" | "none";
  fontFamily?: string;
  fontStyle?: "normal" | "italic" | "oblique" | "initial" | "inherit";
  fontWeight?: "normal" | "bold" | "bolder" | "lighter" | number;
  fontVariantNumeric?:
    | "normal"
    | "ordinal"
    | "slashed-zero"
    | "lining-nums"
    | "oldstyle-nums"
    | "proportional-nums"
    | "tabular-nums"
    | "diagonal-fractions"
    | "stacked-fractions"
    | "ruby"
    | "initial"
    | "inherit";
  listStyleImage?: string;
  listStylePosition?: "inside" | "outside";
  listStyleType?:
    | "disc"
    | "circle"
    | "square"
    | "decimal"
    | "decimal-leading-zero"
    | "lower-roman"
    | "upper-roman"
    | "lower-greek"
    | "lower-alpha"
    | "upper-alpha"
    | "lower-latin"
    | "upper-latin"
    | "none";
  textDecorationColor?: string;
  textDecorationStyle?: "solid" | "double" | "dotted" | "dashed" | "wavy";
  textDecorationThickness?: string | number;
  textUnderlineOffset?: string | number;
  textWrap?: "normal" | "none" | "balance" | "avoid" | "wrap";
  textIndent?: string | number;
  hyphens?: "none" | "manual" | "auto";
  backgroundOrigin?: "border-box" | "padding-box" | "content-box";
  backgroundBlendMode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity"
    | "initial"
    | "inherit";
  backdropFilter?: string; // e.g., 'blur(5px)', 'brightness(0.5)', 'contrast(150%)'
  borderCollapse?: "collapse" | "separate";
  borderSpacing?: string | number;
  tableLayout?: "auto" | "fixed";
  captionSide?: "top" | "bottom";
  transitionProperty?: string; // e.g., 'all', 'opacity', 'transform'
  transitionDuration?: string; // e.g., '0.3s', '500ms'
  transitionTimingFunction?:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | string;
  transitionDelay?: string; // e.g., '0s', '200ms'
  accentColor?: string;
  caretColor?: string;
  scrollBehavior?: "auto" | "smooth";
  scrollMargin?: string | number; // e.g., '10px', '2em'
  scrollPadding?: string | number; // e.g., '10px', '2em'
  scrollSnapAlign?: "start" | "end" | "center" | "none";
  scrollSnapStop?: "normal" | "always";
  scrollSnapType?: "none" | "x" | "y" | "block" | "inline" | "both";
  touchAction?:
    | "auto"
    | "none"
    | "manipulation"
    | "pan-x"
    | "pan-y"
    | "pinch-zoom";
  willChange?: string; // e.g., 'transform', 'opacity', 'scroll-position'
}

const BoxStyle = styled.div<BoxProps>`
  accent-color: ${(props) => props.accentColor || undefined};
  caret-color: ${(props) => props.caretColor || undefined};
  scroll-behavior: ${(props) => props.scrollBehavior || undefined};
  scroll-margin: ${(props) => props.scrollMargin || undefined};
  scroll-padding: ${(props) => props.scrollPadding || undefined};
  scroll-snap-align: ${(props) => props.scrollSnapAlign || undefined};
  scroll-snap-stop: ${(props) => props.scrollSnapStop || undefined};
  scroll-snap-type: ${(props) => props.scrollSnapType || undefined};
  touch-action: ${(props) => props.touchAction || undefined};
  will-change: ${(props) => props.willChange || undefined};
  border-collapse: ${(props) => props.borderCollapse || undefined};
  border-spacing: ${(props) => props.borderSpacing || undefined};
  table-layout: ${(props) => props.tableLayout || undefined};
  caption-side: ${(props) => props.captionSide || undefined};
  transition-property: ${(props) => props.transitionProperty || undefined};
  transition-duration: ${(props) => props.transitionDuration || undefined};
  transition-timing-function: ${(props) =>
    props.transitionTimingFunction || undefined};
  transition-delay: ${(props) => props.transitionDelay || undefined};
  backdrop-filter: ${(props) => props.backdropFilter || undefined};
  background-blend-mode: ${(props) => props.backgroundBlendMode || undefined};
  background-origin: ${(props) => props.backgroundOrigin || undefined};
  hyphens: ${(props) => props.hyphens || undefined};
  text-decoration-color: ${(props) => props.textDecorationColor || undefined};
  text-decoration-style: ${(props) => props.textDecorationStyle || undefined};
  text-decoration-thickness: ${(props) =>
    props.textDecorationThickness || undefined};
  text-underline-offset: ${(props) => props.textUnderlineOffset || undefined};
  text-wrap: ${(props) => props.textWrap || undefined};
  text-indent: ${(props) => props.textIndent || undefined};
  list-style-type: ${(props) => props.listStyleType || undefined};
  list-style-position: ${(props) => props.listStylePosition || undefined};
  list-style-image: ${(props) => props.listStyleImage || undefined};
  font-variant-numeric: ${(props) => props.fontVariantNumeric || undefined};
  font-weight: ${(props) => props.fontWeight || undefined};
  font-style: ${(props) => props.fontStyle || undefined};
  font-family: ${(props) => props.fontFamily || undefined};
  overscroll-behavior: ${(props) => props.overscrollBehavior || undefined};
  overscroll-behavior-y: ${(props) => props.overscrollBehaviorY || undefined};
  overscroll-behavior-y: ${(props) => props.overscrollBehaviorY || undefined};
  overscroll-behavior-x: ${(props) => props.overscrollBehaviorX || undefined};

  object-fit: ${(props) => props.objectFit || undefined};
  object-position: ${(props) => props.objectPosition || undefined};

  cursor: ${(props) => props.cursor || undefined};
  overflow: ${(props) => props.overflow || undefined};
  overflow-x: ${(props) => props.overflowX || undefined};
  overflow-y: ${(props) => props.overflowY || undefined};
  width: ${(props) => props.width || undefined};
  min-width: ${(props) => props.minWidth || undefined};
  max-width: ${(props) => props.maxWidth || undefined};
  width: ${(props) => props.width || undefined};
  height: ${(props) => props.height || undefined};
  min-height: ${(props) => props.minHeight || undefined};
  max-height: ${(props) => props.maxHeight || undefined};
  padding: ${(props) => props.padding || undefined};
  padding-left: ${(props) => props.paddingLeft || props.paddingX || undefined};
  padding-right: ${(props) =>
    props.paddingRight || props.paddingX || undefined};
  padding-top: ${(props) => props.paddingTop || props.paddingY || undefined};
  padding-bottom: ${(props) =>
    props.paddingBottom || props.paddingY || undefined};
  margin: ${(props) => props.margin || undefined};
  margin-left: ${(props) => props.marginLeft || props.marginX || undefined};
  margin-right: ${(props) => props.marginRight || props.marginX || undefined};
  margin-top: ${(props) => props.marginTop || props.marginY || undefined};
  margin-bottom: ${(props) => props.marginBottom || props.marginY || undefined};
  border: ${(props) => props.border || undefined};
  border-top: ${(props) =>
    props.borderTop || props.borderY || props.border || undefined};
  border-right: ${(props) =>
    props.borderRight || props.borderX || props.border || undefined};
  border-bottom: ${(props) =>
    props.borderBottom || props.borderY || props.border || undefined};
  border-left: ${(props) =>
    props.borderLeft || props.borderX || props.border || undefined};
  background: ${(props) => props.background || undefined};
  background-color: ${(props) => props.backgroundColor || undefined};
  background-image: ${(props) => props.backgroundImage || undefined};
  background-position: ${(props) => props.backgroundPosition || undefined};
  background-size: ${(props) => props.backgroundSize || undefined};
  background-repeat: ${(props) => props.backgroundRepeat || undefined};
  color: ${(props) => props.color || undefined};
  font-size: ${(props) => props.fontSize || undefined};
  text-align: ${(props) => props.textAlign || undefined};
  text-decoration: ${(props) => props.textDecoration || undefined};
  text-transform: ${(props) => props.textTransform || undefined};
  line-height: ${(props) => props.lineHeight || undefined};
  position: ${(props) => props.position || undefined};
  top: ${(props) => props.top || undefined};
  right: ${(props) => props.right || undefined};
  bottom: ${(props) => props.bottom || undefined};
  left: ${(props) => props.left || undefined};
  z-index: ${(props) => props.zIndex || undefined};
  border-radius: ${(props) => props.borderRadius || undefined};
  border-top-left-radius: ${(props) =>
    props.borderTopLeftRadius || props.borderRadius || undefined};
  border-top-right-radius: ${(props) =>
    props.borderTopRightRadius || props.borderRadius || undefined};
  border-bottom-left-radius: ${(props) =>
    props.borderBottomLeftRadius || props.borderRadius || undefined};
  border-bottom-right-radius: ${(props) =>
    props.borderBottomRightRadius || props.borderRadius || undefined};

  display: ${(props) => props.display || undefined};
  visibility: ${(props) => props.visibility || undefined};
  opacity: ${(props) => props.opacity || undefined};
  box-shadow: ${(props) => props.boxShadow || undefined};
  text-shadow: ${(props) => props.textShadow || undefined};
  transition: ${(props) => props.transition || undefined};
  transform: ${(props) => props.transform || undefined};
  transform-origin: ${(props) => props.transformOrigin || undefined};
  animation: ${(props) => props.animation || undefined};
  pointer-events: ${(props) => props.pointerEvents || undefined};
  white-space: ${(props) => props.whiteSpace || undefined};
  word-break: ${(props) => props.wordBreak || undefined};
  text-overflow: ${(props) => props.textOverflow || undefined};
  letter-spacing: ${(props) => props.letterSpacing || undefined};
  user-select: ${(props) => props.userSelect || undefined};
  filter: ${(props) => props.filter || undefined};
  mix-blend-mode: ${(props) => props.mixBlendMode || undefined};
  background-clip: ${(props) => props.backgroundClip || undefined};
  background-attachment: ${(props) => props.backgroundAttachment || undefined};
  box-sizing: ${(props) => props.boxSizing || undefined};
  outline: ${(props) => props.outline || undefined};
  outline-offset: ${(props) => props.outlineOffset || undefined};
  content: ${(props) => props.content || undefined};
  float: ${(props) => props.float || undefined};
  clear: ${(props) => props.clear || undefined};
  vertical-align: ${(props) => props.verticalAlign || undefined};
  resize: ${(props) => props.resize || undefined};
  appearance: ${(props) => props.appearance || undefined};

  aspect-ratio: ${(props) => props.aspectRatio || undefined};
  box-sizing: ${(props) => props.boxSizing || undefined};
  isolation: ${(props) => props.isolation || undefined};
`;

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <BoxStyle {...props}>{children}</BoxStyle>;
};

export interface FlexBoxProps extends BoxProps {
  gap?: string;
  display?: "flex" | "inline-flex";
  direction?: "row" | "col";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  alignContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly";
  flexBasis?: string | number;
  flexGrow?: number;
  flexShrink?: number;
  flex?: string | number;
  order?: number;
}

const FlexBoxStyle = styled(Box)<FlexBoxProps>`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) =>
    props.direction === "col" ? "column" : undefined};
  flex-wrap: ${(props) => props.wrap || undefined};
  justify-content: ${(props) => props.justify || undefined};
  align-items: ${(props) => props.align || undefined};
  align-content: ${(props) => props.alignContent || undefined};
  gap: ${(props) => props.gap || undefined};
  flex-basis: ${(props) => props.flexBasis || undefined};
  flex-grow: ${(props) => props.flexGrow || undefined};
  flex-shrink: ${(props) => props.flexShrink || undefined};
  flex: ${(props) => props.flex || undefined};
  order: ${(props) => props.order || undefined};
`;

export const FlexBox: React.FC<FlexBoxProps> = (props) => {
  return <FlexBoxStyle {...props} />;
};

export interface GridBoxProps extends BoxProps {
  display?: "grid" | "inline-grid";
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridTemplateAreas?: string;
  gridColumn?: string;
  gridRow?: string;
  gridAutoColumns?: string;
  gridAutoRows?: string;
  gridAutoFlow?: "row" | "column" | "dense" | "row dense" | "column dense";
  justifyItems?: "start" | "end" | "center" | "stretch";
  alignItems?: "start" | "end" | "center" | "stretch";
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignContent?:
    | "start"
    | "end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly";
  justifySelf?: "auto" | "start" | "end" | "center" | "stretch";
  alignSelf?: "auto" | "start" | "end" | "center" | "stretch";
  gap?: string;
  gridArea?: string;
  placeContent?:
    | "center"
    | "start"
    | "end"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "initial"
    | "inherit";
  placeItems?:
    | "center"
    | "start"
    | "end"
    | "stretch"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "initial"
    | "inherit";
  placeSelf?:
    | "center"
    | "start"
    | "end"
    | "stretch"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "initial"
    | "inherit";
}

const GridBoxStyle = styled(Box)<GridBoxProps>`
  display: ${(props) => props.display || "grid"};
  grid-template-columns: ${(props) => props.gridTemplateColumns || undefined};
  grid-template-rows: ${(props) => props.gridTemplateRows || undefined};
  grid-template-areas: ${(props) => props.gridTemplateAreas || undefined};
  grid-column: ${(props) => props.gridColumn || undefined};
  grid-row: ${(props) => props.gridRow || undefined};
  grid-auto-columns: ${(props) => props.gridAutoColumns || undefined};
  grid-auto-rows: ${(props) => props.gridAutoRows || undefined};
  grid-auto-flow: ${(props) => props.gridAutoFlow || undefined};
  justify-items: ${(props) => props.justifyItems || undefined};
  align-items: ${(props) => props.alignItems || undefined};
  justify-content: ${(props) => props.justifyContent || undefined};
  align-content: ${(props) => props.alignContent || undefined};
  justify-self: ${(props) => props.justifySelf || undefined};
  align-self: ${(props) => props.alignSelf || undefined};
  gap: ${(props) => props.gap || undefined};
  grid-area: ${(props) => props.gridArea || undefined};
  place-content: ${(props) => props.placeContent || undefined};
  place-items: ${(props) => props.placeItems || undefined};
  place-self: ${(props) => props.placeSelf || undefined};
`;

export const GridBox: React.FC<GridBoxProps> = (props) => {
  return <GridBoxStyle {...props} />;
};

export default Box;
