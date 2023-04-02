/** @format */

import React from "react";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Wrap,
  WrapItem,
  Button,
  Spinner,
} from "@chakra-ui/react";

import "./index.css";
import { useAuth0 } from "@auth0/auth0-react";

function Profile({ user }) {
  const { logout } = useAuth0();
  const zIndices = {
    zIndices: {
      dropdown: 1000,
    },
  };

  return (
    <Menu className="profile-list">
      <MenuButton>
        <Wrap>
          <WrapItem>
            <Avatar size="md" name={user.name} src={user.picture} />
          </WrapItem>
        </Wrap>
      </MenuButton>
      <MenuList position="relative" zIndex="dropdown">
        <MenuGroup title={user.name}>
          <MenuItem onClick={logout}>Log out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default Profile;
