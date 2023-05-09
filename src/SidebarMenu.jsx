import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";

const categories = [
  {
    id: "1",
    name: "Books",
    subcategories: [
      {
        id: "1a",
        name: "Fiction",
        subsubcategories: ["Mystery", "Romance", "Sci-Fi"],
      },
      {
        id: "1b",
        name: "Non-fiction",
        subsubcategories: ["History", "Biography", "Self-help"],
      },
      {
        id: "1c",
        name: "Children",
        subsubcategories: ["Picture books", "Chapter books"],
      },
    ],
  },
  {
    id: "2",
    name: "Electronics",
    subcategories: [
      {
        id: "2a",
        name: "Phones",
        subsubcategories: ["Smartphones", "Feature phones"],
      },
      {
        id: "2b",
        name: "Laptops",
        subsubcategories: ["Windows", "Mac", "Chromebook"],
      },
      {
        id: "2c",
        name: "Tablets",
        subsubcategories: ["iPad", "Android"],
      },
      {
        id: "2d",
        name: "Accessories",
        subsubcategories: ["Cases", "Cables", "Chargers"],
      },
    ],
  },
  {
    id: "3",
    name: "Clothing",
    subcategories: [
      {
        id: "3a",
        name: "Men",
        subsubcategories: ["Shirts", "Pants", "Jackets"],
      },
      {
        id: "3b",
        name: "Women",
        subsubcategories: ["Dresses", "Skirts", "Blouses"],
      },
      {
        id: "3c",
        name: "Kids",
        subsubcategories: ["Boys", "Girls"],
      },
    ],
  },
];

const sidebarMenu = () => {
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demo-popup-menu",
  });
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const renderSubcategories = () => {
    if (!popupState.isOpen) {
      return null;
    }

    const category = categories.find((c) => c.id === popupState.clickedItem);

    return (
      <div>
        {category.subcategories.map((sub) => (
          <div key={sub.id}>
            <MenuItem
              onClick={() => popupState.setOpen(false)}
              {...bindTrigger(popupState)}
            >
              {sub.name}
            </MenuItem>
            {renderSubsubcategories(sub)}
          </div>
        ))}
      </div>
    );
  };

  const renderSubsubcategories = (subcategory) => {
    if (!selectedSubcategory || selectedSubcategory !== subcategory.id) {
      return null;
    }

    return (
      <div>
        {subcategory.subsubcategories.map((subsub) => (
          <MenuItem key={subsub} onClick={() => popupState.setOpen(false)}>
            {subsub}
          </MenuItem>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Categories
      </Button>
      <Menu {...bindMenu(popupState)}>
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            onClick={() => popupState.setClickedItem(category.id)}
          >
            {category.name}
          </MenuItem>
        ))}
      </Menu>
      {renderSubcategories()}
    </div>
  );
};

export default sidebarMenu;
