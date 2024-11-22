"use client"


import { ChevronsUpDown } from 'lucide-react'

import { Button } from "../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
 
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { ScrollArea } from "../../components/ui/scroll-area"
import { useProductStore } from "../store/store"





export function VendorFilter() {
  
    const {vendors, selectedVendors , setFilteredVendor} = useProductStore(); // Assuming ProductStore contains vendors data
   
  const handleVendorChange = (vendorId: string) => {
   
  
     setFilteredVendor(vendorId); 
  };
  
  

// Utility function to get selected vendor names
const getSelectedVendorsText = () => {
    if (selectedVendors.length === 0) {
      return "Shop by Vendors";
    }
  
    // 5. Handle "all" case when it's selected
    if (selectedVendors.some(v => v.id === "all")) {
      return "All Vendors";
    }
  
    // 6. Get the names of selected vendors
    const selectedNames = selectedVendors.map(vendor => vendor.name);
    return selectedNames.join(", ");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-label="Select vendors"
          className="w-[250px] justify-between"
        >
          <span className="truncate">{getSelectedVendorsText()}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[250px]">
       
        <ScrollArea className="h-[300px]">
          {vendors.map((vendor) => (
            <DropdownMenuCheckboxItem
              key={vendor.id}
              checked={selectedVendors.includes(vendor)}
              onCheckedChange={() => handleVendorChange(vendor.id)}
            >
              {vendor.name}
            </DropdownMenuCheckboxItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

