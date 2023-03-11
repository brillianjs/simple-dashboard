import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Input, Button } from "@chakra-ui/react";
import { supabase } from "../utils/api";

function Inventory() {
  const [inventory, setInventory] = useState([]);
  async function getInventory() {
    let { data: inventory, error } = await supabase
      .from("inventory")
      .select("*");
    setInventory(inventory);
  }

  useEffect(() => {
    getInventory();
  }, []);

  inventory.map((e) => {
    console.log(e.name);
  });

  console.log(inventory);
  return (
    <>
      <div className="w-full p-10 bg-white rounded-lg">
        <div className="w-full flex justify-between">
          <h1 className="text-3xl font-bold text-teal-700 my-2">Inventory</h1>
          <Button color={"teal"}>Add Inventory</Button>
        </div>

        <div className="w-full border border-b-0 border-gray-300"></div>
        <div className="py-10">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Product Name</Th>
                  <Th>Total</Th>
                  <Th>Price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {inventory ? (
                  inventory.map((e, idx) => (
                    <Tr>
                      <Td>{idx + 1}</Td>
                      <Td>{e.product_name}</Td>
                      <Td>{e.total}</Td>
                      <Td>{e.price}</Td>
                    </Tr>
                  ))
                ) : (
                  <div>Not Data Found</div>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Inventory;
