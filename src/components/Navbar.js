import React from "react";
import { Link } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";

function Navbar(props) {
  return (
    <nav className="w-full flex backdrop-blur-lg px-20 py-3 justify-between items-center sticky top-0">
      <span>
        <Text className="text-3xl font-bold" color={"teal"}>
          JoBrillian Dashboard
        </Text>
      </span>
      <div className="flex flex-row space-x-4 font-bold items-center">
        <Link to="/">
          <Text color={"teal"}>Home</Text>
        </Link>
        <Link to={"/customer"}>
          <Text color={"teal"}>Customer</Text>
        </Link>
        <Link to={"/inventory"}>
          <Text color={"teal"}>Inventory</Text>
        </Link>
        <Link to={"/staff"}>
          <Text color={"teal"}>Staff</Text>
        </Link>
        <Button colorScheme={"teal"}>Logout</Button>
      </div>
    </nav>
  );
}

export default Navbar;
