/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";

export interface BoxProps {
  as?: React.ElementType;
  cursor?: string;
  width?: string;
  height?: string;
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
  fontWeight?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  textDecoration?: "none" | "underline" | "overline" | "line-through";
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  lineHeight?: string;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: number;
  borderRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  className?: string;
  overflowX?: string;
  overflowY?: string;
}

const BoxStyle = styled.div<BoxProps>`
  cursor: ${(props) => props.cursor || undefined};
  overflow: ${(props) => props.overflow || undefined};
  overflow-x: ${(props) => props.overflowX || undefined};
  overflow-y: ${(props) => props.overflowY || undefined};
  width: ${(props) => props.width || undefined};
  height: ${(props) => props.height || undefined};
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
  font-weight: ${(props) => props.fontWeight || undefined};
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
`;

export const GridBox: React.FC<GridBoxProps> = (props) => {
  return <GridBoxStyle {...props} />;
};

export default Box;
