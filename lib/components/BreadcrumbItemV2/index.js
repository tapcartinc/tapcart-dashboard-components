import React from "react";
import Link from "../Link";
import { StyledBreadcrumb } from "./styles";

const BreadcrumbItemV2 = ({ children, href, ...rest }) => {
  const isALink = typeof children === "string" && href;
  console.log("isALink", isALink);
  return isALink ? (
    <div {...rest}>
      <Link href={href}>{children}</Link>
    </div>
  ) : (
    <StyledBreadcrumb {...rest}>
      {React.cloneElement(children, {
        href,
        ...rest
      })}
    </StyledBreadcrumb>
  );
};

export default BreadcrumbItemV2;
