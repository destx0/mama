"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { FaHome, FaInfoCircle, FaBox, FaPhoneAlt } from "react-icons/fa";
import { GiRiceCooker } from "react-icons/gi";

export function NavbarComponent() {
  const [active, setActive] = useState(null);
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <GiRiceCooker className="text-green-800 text-3xl mr-2" />
            <div className="text-xl font-bold text-green-800">HMG Enterprise</div>
          </div>
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <HoveredLink href="/" className="flex items-center">
                <FaHome className="mr-2" /> Home
              </HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="About">
              <HoveredLink href="/about" className="flex items-center">
                <FaInfoCircle className="mr-2" /> About Us
              </HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Premium Rice"
                  href="/products/premium-rice"
                  src="/images/premium-rice.jpg"
                  description="Our finest selection of premium parboiled rice."
                  icon={<FaBox className="mr-2" />}
                />
                <ProductItem
                  title="Bulk Orders"
                  href="/products/bulk-orders"
                  src="/images/bulk-orders.jpg"
                  description="Large quantity orders for businesses and distributors."
                  icon={<FaBox className="mr-2" />}
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact">
              <HoveredLink href="/contact" className="flex items-center">
                <FaPhoneAlt className="mr-2" /> Contact Us
              </HoveredLink>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}