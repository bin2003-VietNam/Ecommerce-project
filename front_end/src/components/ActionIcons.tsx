"use client";

import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";

interface ActionIconsProp {
  cartCount: number;
}

function ActionIcons() {
  const [cartCount, setCartCount] = useState(10);
  return (
    <div className="flex items-center gap-6">
      {/* CART */}
      <div className="relative cursor-pointer">
        <FiShoppingCart className="text-2xl" />

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-3 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-blue-500 text-white text-[11px] font-semibold">
            {cartCount}
          </span>
        )}
      </div>

      {/* USER */}
      <FaRegUser className="text-2xl cursor-pointer" />
    </div>
  );
}

export default ActionIcons;
