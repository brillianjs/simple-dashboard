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

function Customer() {
  const [customer, setCustomer] = useState([]);
  async function getCustomer() {
    let { data: customer, error } = await supabase.from("customer").select("*");
    setCustomer(customer);
  }

  useEffect(() => {
    getCustomer();
  }, []);

  customer.map((e) => {
    console.log(e.name);
  });

  console.log(customer);
  return (
    <>
      <div className="w-full p-10 bg-white rounded-lg">
        <div className="w-full flex justify-between">
          <h1 className="text-3xl font-bold text-teal-700 my-2">Customer</h1>
          <Button color={"teal"}>Add Customer</Button>
        </div>

        <div className="w-full border border-b-0 border-gray-300"></div>
        <div className="py-10">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>No</Th>
                  <Th>Nama</Th>
                  <Th>Alamat</Th>
                  <Th>No Telepon</Th>
                </Tr>
              </Thead>
              <Tbody>
                {customer ? (
                  customer.map((e, idx) => (
                    <Tr>
                      <Td>{idx + 1}</Td>
                      <Td>{e.name}</Td>
                      <Td>{e.address}</Td>
                      <Td>{e.phone}</Td>
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

export default Customer;
