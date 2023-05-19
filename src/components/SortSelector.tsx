import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string
};

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", Label: "Relevance" },
    { value: "-added", Label: "Date added" },
    { value: "name", Label: "Name" },
    { value: "-released", Label: "Release date" },
    { value: "-metacritic", Label: "Popularity" },
    { value: "-rating", Label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.Label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.Label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
