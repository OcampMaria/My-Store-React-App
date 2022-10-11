import React from "react";
import {Icon} from '@iconify/react';


export const CartWidget = () => {
  return (
    <a href="some/link" className="button ">
      <span className="icon">
        <Icon icon="gridicons:cart" />
      </span>
    </a>
  );
};
